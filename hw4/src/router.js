import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import Signin from './components/auth/signin'
import Signup from './components/auth/signup'

const NotFound = () => <h2>Not found 404</h2>;

const Login = () => <h2>LOGIN</h2>;

const Home2 = () => <h2>Home</h2>;

class Router extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/" component={Home2} exact/>
          <Route path="/login" component={Login}/>
          <Route path="/signin" component={Signin}/>
          <Route path="/signup" component={Signup}/>
          <Route component={NotFound}/>
        </Switch>
      </div>
    );
  }
}

export default Router;