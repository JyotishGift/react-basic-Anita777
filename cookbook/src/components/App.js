import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import RecipeList from './RecipeList';
import Recipes from './Recipes';

import './App.css';
import img from './img.jpg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="header">
          <div className="nav">
            <header>
              <ul>
                <li><Link to ='/'>Home</Link></li>
                <li><Link to="/RecipeList"> Recipes List </Link></li>
              </ul>                
            </header> 
          </div>
          <div className="image">
            <h1 style={{ color: 'red'}}>COOKBOOK</h1>
            <img src={img} className="App-logo" alt="cookbook" />
          </div>
        </div>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/Recipes" component={Recipes}/>
            <Route path="/RecipeList" component={RecipeList}/>
          </Switch>
      </div>
    );
  }
}
export default App;

const Home = () => (<div></div>);