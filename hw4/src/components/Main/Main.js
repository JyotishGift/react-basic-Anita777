import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './Main.css';
import Signin from '../auth/signin';
import Signup from '../auth/signup';
import Signout from '../auth/signout';
import User from '../auth/user';

class Main extends Component {
  constructor() {
    super();
    this.state = {
      user: null,
      loggedIn: false
    }
  }
  setLoggedIn = () => {
    this.setState({ loggedIn: true });
  }
  render() {//{`/${user}`}
    const { user } = this.state;
    return (
      <div className="Main">
        <Switch>
        {this.state.loggedIn && <Redirect to= '/user' />}
          <Route exact path='/signin' render={() =>
          <Signin loggedIn={this.setLoggedIn} />} />
          <Route exact path='/signup' component={Signup} />
          <Route exact path='/signout' component={Signout} />
          <Route exact path='/user' component={User}/>
        </Switch>
      </div>
    )
  }
}

export default Main;



