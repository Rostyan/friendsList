const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const users = new Schema({

  email: {
    type: String,
    required: [true, "email can't be an empty field"],
    lowercase: true,
    trim: true,
    unique: [true, "email is already used in system!"]
  },
  password: {
    type: String,
    required: true,
    minlength: [6, "password is too short!"],
    maxlength: [50, "password is too long!"]
  },

  name: {
    type: String,
    trim: true,
    required: [true, "Name can't be an empty field"],
    maxlength: [50, "name is too long"]
  },

  status: {
    type: String,
    default: null
  },

  friendsList: [{
    friendId: { type: mongoose.Schema.Types.ObjectId, ref: 'users' },
    friendName: { type: String, default: '' }
  }],

}, { collection: "users" });

module.exports = mongoose.model("users", users);