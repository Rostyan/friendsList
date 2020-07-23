import React, { Component } from 'react'

export default class AddPeopleToDB extends Component {
  state = {
    name: '',
    email: ''
  }

  componentDidMount() {
    fetch('/api/login')
      .then(res => res.json())
      .then(res => this.setState({
        email: res.email,
        name: res.name
      }));
  }

  render() {
    return (
      <form method="POST" action={`/api/addpeopletodb`} className="container">
        <div className="form-group">

          <label htmlFor="email">Email</label>
          <input type="text" className="form-control"
            id="email" name="email" placeholder="Login" ref={email => this.email = email} />

          <label htmlFor="name">Name</label>
          <input required name="name" type="text" className="form-control" placeholder="Name" />

          <label htmlFor="email">Password</label>
          <input required autoComplete="password" name="password" type="password" className="form-control" placeholder="Password" />
        </div>

        <button type="submit" className="btn btn-block btn-primary">Add People</button>
      </form>
    )
  }
}
