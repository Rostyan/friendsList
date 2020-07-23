import React, { Component } from 'react'
import SearchField from "react-search-field";
import PropTypes from 'prop-types';
import TypeChecker from 'typeco';

export default class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
      users: [],
      value: this.props.searchText
    }
    this.onChange = this.onChange.bind(this)
  }

  componentDidMount() {
    fetch('/api/friend')
      .then(res => res.json())
      .then(res => this.setState({
        users: res
      }))
      .catch(err => err);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.searchText !== nextProps.searchText) {
      this.setState({
        value: nextProps.searchText,
      });
    }
  }

  onChange(){
    this.setState({
      value: event.target.value,
    });
    if (TypeChecker.isFunction(this.props.onChange)) {
      this.props.onChange(event.target.value, event);
    }
  }

  addFriend(){
    fetch('/api/addfriend')
      .then(res => res.json())
      .then(res => this.setState({
        users: res
      }))
      .catch(err => err);
  }

  removeFriend(){

  }

  cancelRequest(){

  }


  render() {
    console.log('User', this.state)
    return (
      <div className='container'>
        <SearchField
        placeholder="Search..."
        onChange={this.onChange}
        classNames="react-search-field-input"
      />

      {
        this.state.users.map(person=> {
          return (
            <div> { 
              if (person.status == 'null'){
                <div key = {person.id}> 
                Name: {person.name}
                Status: {person.status}
              </div>
              } else if 
            
            :person.status == 'friends' 
            (<div key = {person.id}> 
              Name: {person.name}
              Status: {person.status}
              <button>Add friend</button>
              </div>)
              :person.status == 'pending request'(
                <div key = {person.id}> 
                Name: {person.name}
                Status: {person.status}
                <button>Add friend</button>
                </div>              )
              }
                </div>


          );
        })
      }
      </div>
    )
  }
}


Home.propTypes = {
  classNames: PropTypes.string,
  searchText: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
};

Home.defaultProps = {
  classNames: '',
  searchText: '',
  placeholder: 'Search',
  onChange: null,
};
