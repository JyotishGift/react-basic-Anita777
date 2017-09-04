
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { deleteRecipe } from '../actions';
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
    const {selectedRecipe, ingredients, deleteRecipe} = this.props;
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
                  return(
                    <div key={ind}>
                      <input 
                       type="text"
                       placeholder={ingred.name}
                       onChange={this.updateInput}
                       name="nameIngred"
                       required
                      />
                      <input 
                       type="text"
                       placeholder={ingred.quanity}
                       onChange={this.updateInput}
                       name="quanityIngred"
                       required
                      />
                    </div>
                  )
                }
              })
            }
            <button onClick={() => {
              console.log("save")}}>
              Change recipe
            </button>            
            <p></p>
            <button onClick={() => {
              deleteRecipe(selectedRecipe.recipe_id)}}>
              Delete recipe
            </button>
            
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
    { deleteRecipe: deleteRecipe },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Recipes) ;

