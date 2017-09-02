

import React, { Component } from 'react';
import { connect } from 'react-redux';
import selectRecipe from '../actions'

class RecipeList extends Component {
  render() {
    const { recipes, selectRecipe } = this.props;
    return (
      <div className="recipe-list"><h3>List of Recipes</h3>
        {recipes.map((recipe, ind) =>
          <li key={ind} onClick={() => {
            selectRecipe(recipe)
          }}>{recipe.name}</li>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    recipes: state.recipes,
    ingrid: state.ingridients
  };
};

const mapDispatchToProps = dispatch => {
  return {
    selectRecipe(recipe) {
      dispatch(selectRecipe(recipe))
    }
  };
};

export default connect (mapStateToProps, mapDispatchToProps)(RecipeList);