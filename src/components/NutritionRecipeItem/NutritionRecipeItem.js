import React, { Component } from 'react';
import  { Link } from 'react-router-dom';
import './NutritionRecipeItem.css';

class NutritionRecipeItem extends Component {
  render() {

    const { category, recipe } = this.props;

    return(
      <Link to={`/nutrition/${category}/${recipe.name}`} className='nutrition-recipe-item-link'>
        <li className='nutrition-recipe-item'>
          <div className='recipe-item-img'>
          </div>
          <div className='recipe-item-info-wrapper'>
            <h3>{recipe.name}</h3>
            <p>{recipe.description}</p>
            <div className='recipe-item-cook-info'>
              <p>Cook: {recipe.time}</p>
              <p>Servings: {recipe.servings}</p>
            </div>
          </div>
        </li>
      </Link>
    );
  }
}

export default NutritionRecipeItem;
