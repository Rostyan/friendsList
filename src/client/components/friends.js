import React, { Component } from 'react'
import FriendsTable from './usersTable/friendsTable'

export default class Friends extends Component {

  constructor(props) {
    super(props)

    this.state = {
      user: []
    }
  }

  componentDidMount() {
    fetch('/api/')
      .then(res => res.json())
      .then(res => this.setState({ user: res }))
      .catch(err => err);
  }


  render() {
    console.log('Data', this.state.user.email)
    return (
      <div>
      {
        this.state.user.map(person=> {
          return (
            <div key = {person.id}> 
              Email: {person.email}
            </div>
          );
        })
      }
      </div>
    )
  }
}
