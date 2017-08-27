import React, { Component } from 'react';
import Api from '../../services/api';

class User extends Component{
  constructor(){
    super();
    this.state = {
      //getData: null,
      userProfile: {}
    }
  }
  componentDidMount() {
    let token = window.localStorage.getItem('token');
    this.state.userProfile = JSON.parse(window.localStorage.getItem('userProfile'));
    //Api.requestTokenGet(token).
    //then(data => this.setState({getData: data}));
  }
  render(){
    return (
      <div>
        <h1>USER</h1>
        <h2>{this.state.userProfile.userName}</h2>
        <h3>{this.state.userProfile.userEmail}</h3>
      </div>
    )
  }
}
export default User;