import React, { Component } from 'react';
import './signin.css';
import Api from '../../services/api';

class Signin extends Component {
	constructor(props) {
		super(props);
		this.state = {
      user: '',
      password: '',
      errors: '',
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
      if(data.status === 'success') {
        this.setState({info: data.message});
        this.props.loginSet();
        this.parseRequest(this.state.info);
      } else {
        this.setState({errors: data.message});
        alert(this.state.errors)
      }
    });
  }
  parseRequest(obj) {
    let userName = obj.user.name;
    let userEmail = obj.user.email;
    let userProfile = {userName, userEmail}
    window.localStorage.setItem('token', obj.token);
    window.localStorage.setItem('userProfile', JSON.stringify(userProfile));
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

