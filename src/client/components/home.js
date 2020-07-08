import React, { Component } from 'react'

export default class Home extends Component {

  constructor(props) {
    super(props)

    this.state = {
      name: null,
      email: null,
      userImage: null,
      friendsList: [],
      status: ''
    }
  }

  componentDidMount() {
    fetch('/api/')
      .then(res => res.json())
      .then(res => this.setState({ email: res.email, name: res.name, friendsList: res.friendsList, userImage: user.userImage, status: res.status}))
      .catch(err => err);
  }

  render() {
    return (
      <div className='container'>
        
      </div>
    )
  }
}
