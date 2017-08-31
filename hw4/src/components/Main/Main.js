import React, { Component } from 'react';
import { Switch, Route} from 'react-router-dom';
import './Main.css';
import Signin from '../auth/signin';
import Signup from '../auth/signup';
import Signout from '../auth/signout';
import User from '../auth/user';

const Home = () => (<div></div>);

class Main extends Component {
  render() {
    const {loginIn} = this.props;
    return (
      <div className="Main">
        <Switch>
          <Route path="/" component={Home} exact />
          <Route exact path="/signin" component={props => <Signin{...props} loginSet = {loginIn}/>}/>
          <Route path='/signup' component={Signup} />
          <Route path='/signout' component={Signout} />
          <Route path="/user" component={User} />
        </Switch>
      </div>
    )
  }
}
export default Main;
