import React, { Component } from 'react'

export default class Login extends Component {

  componentDidMount() {
    fetch('/api/login')
      .then(res => res.json());

  }

  render() {
    return (
      <div className="container mt-4">
        <div className="row d-flex align-items-center">
          <div className="col">
            <form method="POST" action="/api/login" className=" form-horizontal">
              <input type="text" className="form-control"
                id="email" name="email" placeholder="Login" ref={ emailInput => this.emailInput = emailInput} />
              <br></br>
              <input type="password"
                className="form-control" id="password" name="password"
                placeholder="Password" ref={ passwordInput => this.passwordInput = passwordInput} />
                <br></br>
  
            </form>
          </div>
        </div>
      </div>
    );
  }
}
