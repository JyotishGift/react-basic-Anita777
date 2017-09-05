

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {selectRecipe, addRecipe, searchRecipe } from '../actions';
import './RecipeList.css';

class RecipeList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nameRecipe: ''
    }
    this.updateInput = this.updateInput.bind(this);
    this.id = 4;
  }
  updateInput(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  renderList() {
    return this.props.recipes.map((recipe, ind) => {
      return (
        <tr key={ind}>
          <td  onClick={() => {
            this.props.selectRecipe(recipe);
            this.setState({ selectRec: recipe.name});
            this.props.history.push('/Recipes/');
          }}>{recipe.name}</td>
        </tr>
      );
    });
  }

  render() {
    const { addRecipe, searchRecipe} = this.props;
      return (
      <div>
        <span style={{ float: 'right' }}>
          <label>Search recipe</label>
          <input type="text"
              name ="search"
              placeholder="Search"
              onChange= {(e) => {
                searchRecipe(e.target.value)
              }}
          />
          </span>
        <div className="container-main">
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
        </div>
        <div className="divApp">
          <div className="divAddR">
            <input
              onChange={this.updateInput}
              type="text"
              name="nameRecipe"
              placeholder="Enter name"
              required
            /> 
            <button  onClick={() => {
              this.id = this.id + 1;
              addRecipe(this.state.nameRecipe, this.id )
            }}>Add Recipe</button>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    recipes: state.recipeReducer.recipes,
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

