import React, { Component } from 'react';
import Api from '../../services/api';

class User extends Component{
  constructor(){
    super();
    this.state = {
      getData: null,
      userProfile: {}
    }
  }
  componentDidMount() {
    let token = window.localStorage.getItem('token');
    this.setState({userProfile: JSON.parse(window.localStorage.getItem('userProfile'))});
    // All users
    //Api.requestTokenGet(token).
    //then(data => this.setState({getData: data}));
  }
  render(){
    console.log(this.state.userProfile)
    return (
      <div>
        <h1>{this.state.userProfile.userName}</h1>
        <h3>{this.state.userProfile.userEmail}</h3>
      </div>
    )
  }
}
export default User;