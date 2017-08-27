import React, { Component } from 'react';
import './signin.css';
import Api from '../../services/api';

class Signin extends Component {
	constructor(props) {
		super(props);
		this.state = {
      user: '',
      password: '',
      name: null
    };
    this.updateInput = this.updateInput.bind(this);
    this.signIn = this.signIn.bind(this);
    this.url = 'http://api.jyotish.gift/api/v1/auth/login/';
  }
  signIn(e){
    e.preventDefault();
    let dataUser = { 
      user:this.state.user,
      password: this.state.password 
    };
    Api.request(this.url, dataUser).then(data => {
      this.setState({name: data.message.user.name});
      let userName = data.message.user.name;
      let userEmail = data.message.user.email;
      let userProfile = {userName, userEmail}
      window.localStorage.setItem('token', data.message.token);
      window.localStorage.setItem('userProfile', JSON.stringify(userProfile));
      if(data.status === 'success') {
         this.props.loggedIn()    
      }
    });
  }
  updateInput(e) {
   this.setState({ [e.target.name]: e.target.value });
  }
  render() {
    console.log(this.state.name)
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

