import React, { Component } from 'react';
import './App.css';
import Recipes from './Recipes';
import RecipeList from './RecipeList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Recipes />
        <RecipeList />
      </div>
    );
  }
}

export default App;
