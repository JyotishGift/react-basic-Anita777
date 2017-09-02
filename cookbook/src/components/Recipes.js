
import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Recipes.css';

class Recipes extends Component {
  render() {
    const {selectedRecipe, ingridients} = this.props;
    if(!selectedRecipe) {
      return <div>Select Recipe</div>
    }
    return (
      <div className="recipe-active">
        <h2>{selectedRecipe.name}</h2>
          <div><h3>Ingridients:</h3>
            { ingridients.map((ingrid, ind) => {
                if(ingrid.recept_id === selectedRecipe.id){
                  return(<li key={ind}><span>{ingrid.name}</span><span>{ingrid.quanity}</span></li>)
                }
              })
            }
          </div>
      </div>  
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    selectedRecipe: state.selectedrecipe,
    ingridients: state.ingridients
  };
};

export default connect(mapStateToProps)(Recipes) ;