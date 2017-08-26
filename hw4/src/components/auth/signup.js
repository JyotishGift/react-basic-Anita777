import React, { Component } from 'react';

import Api from '../../services/api';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
      password: '',
      confirm_password: '',
      email: ''
    };
    this.updateInput = this.updateInput.bind(this);
    this.onsignUp = this.onsignUp.bind(this);
    this.url = 'http://api.jyotish.gift/api/v1/auth/signup/';
  }       

  onsignUp(e) {
    e.preventDefault();
    let data = { 
      user:this.state.user,
      password: this.state.password,
      email: this.state.email,
    }
    Api.request(this.url, data)
    .then(result => {
      console.log(result);
    })
    .catch(error => console.log('Request failed', error));
  }
  updateInput(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  render() {
    return (
      <form>
      <label htmlFor="user">User </label>
      <input
        onChange={this.updateInput}
        type="text"
        name="user"
        placeholder="Enter user"
      />
       <label htmlFor="password">Password </label>
        <input
        onChange={this.updateInput}
        type="text" 
        name="password" 
        placeholder="Enter password"
      />
      <label htmlFor="confirm_password">Confirm Password </label>
        <input
        onChange={this.updateInput}
        type="text" 
        name="confirm_password" 
        placeholder="Enter confirm password"
      />
      <label htmlFor="email">Email</label>
        <input
        onChange={this.updateInput}
        type="text" 
        name="email" 
        placeholder="Enter email"
      />  
        <button onClick={this.onsignUp}>Sign Up</button>
      </form>
    );
  }
}

export default Signup;
