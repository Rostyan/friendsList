import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import Header from './components/header'
import Home from './components/home'
import Login from './components/login'
import Friends from './components/friends'
import AddPeopleToDB from './components/addpeopletodb'

class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <div className="container"></div>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/friend' component={Friends} />
            <Route exact path='/addpeopletodb' component={AddPeopleToDB}/>

            <Route render={() => (<div className="error404">
                                      <h1>Error 404</h1>
                                      <h2>Page not found!</h2>
                                    </div>)} />

          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
