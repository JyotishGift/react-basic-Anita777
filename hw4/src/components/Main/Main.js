import React, { Component } from 'react';
import { Switch, Route, Redirect} from 'react-router-dom';
import './Main.css';
import Signin from '../auth/signin';
import Signup from '../auth/signup';
import Signout from '../auth/signout';
import User from '../auth/user';

const Home = () => (<div></div>);

class Main extends Component {
  render() {
    const {logging, loginIn} = this.props;
    return (
      <div className="Main">
        <Switch>
         {logging && <Redirect to= '/user' />}
          <Route exact path='/' render={() => <Home />} />
          <Route exact path='/signin' render={() =>
            <Signin loginSet={() => loginIn()} />} />
          <Route exact path='/signup' component={Signup} />
          <Route exact path='/signout' component={Signout} />
        </Switch>
      </div>
    )
  }
}

export default Main;



/*
{logging && <Redirect to= '/user' />}
*/