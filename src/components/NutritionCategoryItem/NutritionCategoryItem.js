import React, { Component } from 'react';
import  { Link } from 'react-router-dom';
import './NutritionCategoryItem.css';

class NutritionCategoryItem extends Component {
  render() {
    const { category } = this.props;
    return(
      <Link to={`/nutrition/${category}`} className='nutrition-categories-link'>
        <li className='nutrition-categories-item'>
            <h3 className='category-item-name'>{category}</h3>
        </li>
      </Link>
    );
  }
}

export default NutritionCategoryItem;
