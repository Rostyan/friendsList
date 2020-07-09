import React, { Component } from 'react'

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
    console.log('Data', this.state.user)
    return (
      <div>
        fsdf
      </div>
    )
  }
}
