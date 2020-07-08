import React, { Component } from 'react'

export default class Friends extends Component {
  state = {
    users: []
  }

  componentDidMount() {
    fetch('/api/friend')
      .then(res => res.json())
      .then(res => this.setState({
        users: res
      }))
      .catch(err => err);       
  }
  render() {
    console.log('Data', this.state.users.email)
    return (
      <div>
      {
        this.state.users.map(user=> {
          return (
            <div key = {user.id}> 
              Email: {user.email}
            </div>
          );
        })
      }
      </div>
    )
  }
}
