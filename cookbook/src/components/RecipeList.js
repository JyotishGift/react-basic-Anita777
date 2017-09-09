
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {selectRecipe, addRecipe, searchRecipe, searchRecipeByIngred } from '../actions';
import './RecipeList.css';

class RecipeList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nameRecipe: ''
    }
    this.updateInput = this.updateInput.bind(this);
    this.id = 4;
    this.check1=false;
    this.check2=false;
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
    const { addRecipe, searchRecipe, searchRecipeByIngred} = this.props;
      return (
      <div className="container">
        <h3>Search recipe</h3>
          <form className="form-inline search-form">
            <div className="form-group">
              <label className="sr-only">Search</label>
              <div className="checkbox">
                <label><input type="checkbox" value="" onClick={(e) => {
                  this.check1=true;
                  this.check2=false;
                }}/>by recipe</label>
              </div>              
              <input type="text" className="form-control" id= "search" placeholder="Search"
                onChange= {(e) => {
                  if (this.check1) {
                    searchRecipe(e.target.value);
                  }
                  if (this.check2) {
                    searchRecipeByIngred(e.target.value);
                  }
                }} />

              <div className="checkbox">
              <label><input type="checkbox" value="" 
                onClick={(e) => {
                  this.check2=true;
                  this.check1=false;
                }}/>by ingredients</label>
            </div>          
          </div>
        </form>
        <div className="container">
          <table className="table table-hover">
            <thead>
              <tr>
                <th><h2>List of Recipes</h2></th>
              </tr>
            </thead>
            <tbody>
              {this.renderList()}
            </tbody>
          </table>
        </div>
        <form className="form-inline search-form">
          <div className="form-group">
            <input className="form-control"
              onChange={this.updateInput}
              type="text"
              name="nameRecipe"
              placeholder="Enter name recipe"
              required
            />
            <button className="btn add-btn" onClick={() => {
              this.id = this.id + 1;
              addRecipe(this.state.nameRecipe, this.id )
            }}>Add Recipe</button> 
          </div>
        </form>
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
      searchRecipe: searchRecipe,
      searchRecipeByIngred: searchRecipeByIngred
    },
    dispatch
  );
};
export default connect (mapStateToProps, mapDispatchToProps)(RecipeList);


