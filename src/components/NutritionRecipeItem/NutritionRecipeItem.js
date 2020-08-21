import React, { Component } from 'react';
import  { Link } from 'react-router-dom';
import './NutritionRecipeItem.css';

class NutritionRecipeItem extends Component {
  render() {

    return(
      <Link className='nutrition-recipe-item-link'>
        <li className='nutrition-recipe-item'>
          <div className='recipe-item-img'>
          </div>
          <div className='recipe-item-info-wrapper'>
            <h3>Recipe Name</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas gravida tortor et sapien ultricies, id pharetra nisi suscipit. Sed accumsan odio sed nisl ornare malesuada. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam egestas nisi nibh, a eleifend neque tempor sit amet.</p>
            <div className='recipe-item-cook-info'>
              <p>Cook: {'45'} minutes</p>
              <p>Servings: {'12'}</p>
            </div>
          </div>
        </li>
      </Link>
    );
  }
}

export default NutritionRecipeItem;
