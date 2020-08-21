import React, { Component } from 'react';
import NutritionRecipeItem from '../NutritionRecipeItem/NutritionRecipeItem';
import './NutritionRecipeList.css';

class NutritionRecipeList extends Component {
  constructor(props) {
    super(props);
    const recipes = [
      "Recipe One",
      "Recipe Two",
      "Recipe Three",
      "Recipe Four",
      "Recipe Five",
      "Recipe Six",
      "Recipe Seven",
      "Recipe Eight",
      "Recipe Nine",
      "Recipe Ten"
    ];

    this.state = {
      recipes: recipes
    };
  }

  render() {
    return(
      <section className='nutrition-list-wrapper'>
        <ul className='nutrition-recipe-list'>
          {
            this.state.recipes.map((recipe, ind) => (
              <NutritionRecipeItem key={ind}
                           recipe={recipe}/>
            ))
          }

        </ul>
      </section>
    );
  }
}

export default NutritionRecipeList;
