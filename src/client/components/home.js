import React, { Component } from 'react'
import UsersTable from './usersTable/usersTable'

export default class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
      users: []
    }
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
    console.log('User', this.state)
    return (
      <div className='container'>
        
      </div>
    )
  }
}
