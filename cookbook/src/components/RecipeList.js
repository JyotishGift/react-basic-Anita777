

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {selectRecipe, addRecipe, searchRecipe } from '../actions';
import './RecipeList.css';

class RecipeList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nameRecipe: '',
      nameIngred: '',
      quanityIngred: '',
    }
    this.addRec = this.addRec.bind(this);
    this.updateInput = this.updateInput.bind(this);
    this.id = 4;
  }
  addRec(e){
    e.preventDefault();
    addRecipe(this.state.nameRecipe)
  }
  updateInput(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  renderList() {
    return this.props.recipes.map((recipe, ind) => {
      return (
         <tr key={ind}>
          <td  onClick={() => {
            this.props.selectRecipe(recipe)
          }}>{recipe.name}</td>
        </tr>
      );
    });
  }
  render() {
    const { addRecipe, searchRecipe} = this.props;
      return (
      <div className="recipe-list">
        <table className="table table-hover">
          <thead>
            <tr>
              <th><h3>List of Recipes</h3></th>
            </tr>
          </thead>
          <tbody>
            {this.renderList()}
          </tbody>
        </table>
        <div className="recipe-add">
          <input
            onChange={this.updateInput}
            type="text"
            name="nameRecipe"
            placeholder="Enter name"
            required
          /> 
          <button  onClick={() => {
            this.id = this.id+1;
            console.log(this.id )
            addRecipe(this.state.nameRecipe, this.id )
          }}>Add Recipe</button>
        </div>

          <input type="text"
            name ="search"
            placeholder="Search"
            onChange= {(e) => {
              searchRecipe(e.target.value)
            }}
          />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    recipes: state.recipeReducer.recipes,
    //searchReducer: state.searchReducer
  }
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    { selectRecipe: selectRecipe,
      addRecipe: addRecipe, 
      searchRecipe: searchRecipe
    },
    dispatch
  );
};
export default connect (mapStateToProps, mapDispatchToProps)(RecipeList);

