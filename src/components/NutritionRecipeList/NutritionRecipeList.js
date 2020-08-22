import React, { Component } from 'react';
import NutritionRecipeItem from '../NutritionRecipeItem/NutritionRecipeItem';
import './NutritionRecipeList.css';
import recipes from '../../recipes';

class NutritionRecipeList extends Component {


  render() {

    const filterRecipes = recipes.filter(recipe => recipe.category === this.props.category)

    return(
      <section className='nutrition-list-wrapper'>
        <ul className='nutrition-recipe-list'>
          {
            filterRecipes.map((recipe, ind) => (
              <NutritionRecipeItem key={ind}
                                   category={this.props.category}
                                   recipe={recipe}/>
            ))
          }

        </ul>
      </section>
    );
  }
}

export default NutritionRecipeList;
