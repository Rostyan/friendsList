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
                id="email" name="email" placeholder="Login" ref={email => this.email = email} />
              <br></br>
              <input type="password"
                className="form-control" id="password" name="password"
                placeholder="Password" ref={password => this.password = password} />
                <br></br>
                
              <div className="form-actions">
                <input type="submit"
                  className="btn btn-block btn-primary btn-default" value="Sign In" />
                <button ><a href='/signup'>Add people</a></button>
              </div>

            </form>
          </div>
        </div>
      </div>
    );
  }
}
