import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './Main.css';
import Signin from '../auth/signin';
import Signup from '../auth/signup';
import User from '../auth/user';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
      login: false
    }
  }
  setLogin = () => {
    this.setState({ login: true });
    // return <Redirect to="/user" />;
  }

  render() {
    const { user } = this.state;
    console.log({ user })
    return (
      <div className="Main">
        <Switch>
          <Route exact path="/signin" render={() =><Signin loginIn={this.setLogin}/>}/>
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/user" component={User}/>
        </Switch>
      </div>
    )
  }
}

export default Main;