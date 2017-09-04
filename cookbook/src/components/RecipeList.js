

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {selectRecipe, addRecipe } from '../actions';
import './RecipeList.css';

class RecipeList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nameRecipe: '',
      nameIngred: '',
      quanityIngred: ''
    }
    this.addRec = this.addRec.bind(this);
    this.updateInput = this.updateInput.bind(this);
  }
  addRec(e){
    e.preventDefault();
    addRecipe(this.state.nameRecipe)
  }
  updateInput(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  render() {
    const { recipes, selectRecipe, addRecipe} = this.props;
      return (
      <div className="recipe-list"><h3>List of Recipes</h3>
        {recipes.map((recipe, ind) =>
          <li key={ind} onClick={() => {
            selectRecipe(recipe)
          }}>{recipe.name}</li>
        )}
        <p></p>
        <input
          onChange={this.updateInput}
          type="text"
          name="nameRecipe"
          placeholder="Enter name"
          required
        /> 
        <button  onClick={() => {
            addRecipe(this.state.nameRecipe)
        }}>Add Recipe</button>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    recipes: state.recipeReducer.recipes
  }
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    { selectRecipe: selectRecipe,
      addRecipe: addRecipe
    },
    dispatch
  );
};
export default connect (mapStateToProps, mapDispatchToProps)(RecipeList);

