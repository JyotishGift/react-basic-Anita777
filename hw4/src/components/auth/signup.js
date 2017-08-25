import React, { Component } from 'react';

//import {requestPost} from '../../services/api';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
      password: '',
      confirm_password: '',
      email: '',
    };
    this.updateInput = this.updateInput.bind(this);
    this.onsignUp = this.onsignUp.bind(this);
  }
  onsignUp() {
    const url = 'http://api.jyotish.gift/api/v1/auth/';
    return fetch(url+'signup', {
      method: "POST",
      body: JSON.stringify({
        user: this.state.user,
        password: this.state.password,
        email: this.state.email
      }),
      headers: { "Content-Type": "application/json" },
    })
    .then(data => {
       alert(data, 'registration completed successfully!');
    })
    .catch(err => {
      console.log('Request failed', err)
    });
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
        required
      />
       <label htmlFor="password">Password </label>
        <input
        onChange={this.updateInput}
        type="text" 
        name="password" 
        placeholder="Enter password"
        required
      />
      <label htmlFor="confirm_password">Confirm Password </label>
        <input
        onChange={this.updateInput}
        type="text" 
        name="confirm_password" 
        placeholder="Enter confirm password"
        required
      />
      <label htmlFor="email">Email</label>
        <input
        onChange={this.updateInput}
        type="text" 
        name="email" 
        placeholder="Enter email"
        required
      />  
        <button onClick={this.onsignUp}>Sign Up</button>
      </form>
    );
  }
}

export default Signup;
