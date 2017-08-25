import React, { Component } from 'react';
import './signin.css';
//import api from '../../services/api';
//import {requestGet} from '../../services/api';

class Signin extends Component {
	constructor(props) {
		super(props);
		this.state = {
      user: '',
      password: '',

      touched: {
        name: false,
        password: false
      }
    };
    this.updateInput = this.updateInput.bind(this);
    this.signIn = this.signIn.bind(this);
  }
  signIn(){
    //alert('User is ' + this.state.user + ' Password is ' + this.state.password);  
    //requestGet();
    const url = 'http://api.jyotish.gift/api/v1/auth/';
    return fetch(url+'/signup', {
      method: "POST",
      body: JSON.stringify({
        user: this.state.user,
        password: this.state.password
      }),
      headers: { "Content-Type": "application/json" },
    })
    .then(data => {
      console.log(data);
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
      <label htmlFor="name">User </label>
      <input
        onChange={this.updateInput}
        id="user"  
        type="text"
        name="user"
        placeholder="Enter user"
        required
      />
       <label htmlFor="password">Password </label>
        <input
        onChange={this.updateInput}
        type="text" 
        id="password" 
        name="password" 
        placeholder="Enter password"
        required
      />
        <button onClick={ this.signIn}>Sign In</button>
      </form>
    );
  }
}
export default Signin;

