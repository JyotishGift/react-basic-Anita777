
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { deleteRecipe } from '../actions';
import './Recipes.css';

class Recipes extends Component {
    render() {

    const {selectedRecipe, ingredients, deleteRecipe} = this.props;
    console.log(this.props)
    if(!selectedRecipe) {
      return <div>Select Recipe</div>
    }
    return (
      <div className="recipe-active">
        <h2>{selectedRecipe.name}</h2>
        <h3>Ingredients:</h3>
          <div>
            { ingredients.map((ingred, ind) => {
                if(ingred.ingred_id === selectedRecipe.recipe_id){
                  return(<li key={ind}><span>{ingred.name}</span><span>{ingred.quanity}</span></li>)
                }
              })
            }
            <button onClick={() => deleteRecipe(selectedRecipe.recipe_id)}>Delete recipe</button>
          </div>
      </div>  
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    selectedRecipe: state.selectedrecipe,
    ingredients: state.recipeReducer.ingredients
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    { deleteRecipe: deleteRecipe },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Recipes) ;