import React, { Component } from 'react';
import './signin.css';
import Api from '../../services/api';
import {Redirect } from 'react-router-dom';

class Signin extends Component {
	constructor(props) {
		super(props);
		this.state = {
      user: '',
      password: '',
    };
    this.updateInput = this.updateInput.bind(this);
    this.signIn = this.signIn.bind(this);
    this.url = 'http://api.jyotish.gift/api/v1/auth/login/';
  }
  signIn(e){
    e.preventDefault();
    let data = { 
      user:this.state.user,
      password: this.state.password 
    };
    const dataRequest = Api.request(this.url, data);
    let nameUser = dataRequest.then(data => console.log(data.message.user.name));
    dataRequest.then(result => {
    if(result.status === 'success') {
      this.props.loginIn();
      console.log(this.props.nameUser = nameUser);
      }
    }); 
  }
  updateInput(e) {
   this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
     <form onSubmit={this.signIn}>
      <input
        onChange={this.updateInput}
        type="text"
        name="user"
        placeholder="Enter user"
        required
      />
        <input
        onChange={this.updateInput}
        type="text" 
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

