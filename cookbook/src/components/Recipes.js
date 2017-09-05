
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { deleteRecipe, addIngredient } from '../actions';
import './Recipes.css';

class Recipes extends Component {
   constructor(props) {
    super(props);
    this.state = {
      nameIngred: '',
      quanityIngred: ''
    }
    this.updateInput = this.updateInput.bind(this);
  }
  updateInput(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  render() {
    const {selectedRecipe, ingredients, deleteRecipe, addIngredient} = this.props;
    if(!selectedRecipe) {
      return <div>Select Recipe</div>
    }
    return (
      <div className="container">
        <h2>{selectedRecipe.name}</h2>
        <h3>Ingredients:</h3>
        <ul className="list-unstyled">
          { ingredients.map((ingred, ind) => {
            if(ingred.ingred_id === selectedRecipe.recipe_id){
              return(
                <li key={ind}><span>{ingred.name}</span><span>{ingred.quanity}</span></li>
              )
            }
          })
          }
        </ul>
        <div className="divApp">
          <div className="divDel">
            <button onClick={() => {
              deleteRecipe(selectedRecipe.recipe_id);
              this.props.history.push('/RecipeList/')
            }}>
              Delete recipe
            </button>
          </div>
          <div className="divChen">
            <button onClick={() => {
              console.log("save")}}>
              Change recipe
             </button>
          </div>
          <div className="divAdd">
            <input
              onChange={this.updateInput}
              type="text"
              name="nameIngred"
              placeholder="Enter ingredient"
               required
            />
            <input
              onChange={this.updateInput}
              type="text"
              name="quanityIngred"
              placeholder="Enter quanity"
              required
            />
            <button  onClick={() => {
              addIngredient(this.state.nameIngred, this.state.quanityIngred,selectedRecipe.recipe_id)
            }}>Add Ingredient</button>
          </div>
        </div>
      </div>  
    )
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
    { 
      deleteRecipe: deleteRecipe,
      addIngredient: addIngredient
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Recipes) ;

