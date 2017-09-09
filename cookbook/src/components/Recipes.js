
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { deleteRecipe, addIngredient, deleteIngredients} from '../actions';
import './Recipes.css';

class Recipes extends Component {
   constructor(props) {
    super(props);
    this.state = {
      nameIngred: '',
      quanityIngred: ''
    },
    this.ingr=[];
    this.updateInput = this.updateInput.bind(this);
  }
  updateInput(e) {
    this.setState({ [e.target.name]: e.target.value });
    this.ingr.filter((ingred, index) => {
     if(ingred.name === e.target.placeholder) {
        ingred.name = e.target.value
      } 
      if(ingred.quanity === e.target.placeholder) {
        ingred.quanity = e.target.value
      } 
       return ingred
    })
  }
  render() {
 
    const {
      selectedRecipe,
      ingredients,
      deleteRecipe,
      addIngredient,
      deleteIngredients,
    } = this.props;
  
    this.ingr=ingredients.filter(ingred => {
    if(ingred.ingred_id === selectedRecipe.recipe_id)
      return ingred
    })  

    if(!selectedRecipe) {
      return <div>Select Recipe</div>
    }
    return (
      <div className="container">
        <h2>{selectedRecipe.name}</h2>
        <h3>Ingredients:</h3>
        <table className="filterTable">
          <thead>
            <tr>
              <td>Ingredient</td>
              <td>Quanity</td>
            </tr>
          </thead>
          <tbody>
          { 
            ingredients.map((ingred, ind) => {
            if(ingred.ingred_id === selectedRecipe.recipe_id){
              return(
                <tr key={ind} >
                  <td  width="50" >
                    <input onChange={this.updateInput}
                       type="text" 
                       name={ind}
                       placeholder={ingred.name} className="filterInput"/></td>
                  <td width="25">
                    <input onChange={this.updateInput}
                     type="text" 
                     name={ind}
                     placeholder={ingred.quanity} className="filterInput"/></td>
                </tr>
              )
            }
          })
          }
          </tbody>
        </table>
        <div className="divApp">
          <div className="divDel">
            <button onClick={() => {
              deleteRecipe(selectedRecipe.recipe_id);
              deleteIngredients(selectedRecipe.recipe_id);
              this.props.history.push('/RecipeList/');
            }}>
              Delete recipe
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
      addIngredient: addIngredient,
      deleteIngredients: deleteIngredients
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Recipes) ;
