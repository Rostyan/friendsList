const express = require('express');
const cookieParser = require('cookie-parser');
const indexRouter = require('./routes/index');
const passport = require('passport');
const session = require('express-session');
const mongoose = require("mongoose");
const methodOverride = require('method-override');

let app = express();

require('./config/passport')(passport);

const db = require('./config/mongo_url');

mongoose.connect(db, { useNewUrlParser: true })
  .then(() => console.log('Database connected!'))
  .catch(err => console.log(err));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static('dist'));
app.use(methodOverride("_method"));

app.use(
  session({
    secret: 'secret',
    resave: false,
    saveUninitialized: true   
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use('/api/', indexRouter);

const PORT = process.env.PORT || 4000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));