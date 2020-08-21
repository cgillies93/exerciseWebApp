import React, { Component } from 'react';
import NutritionRecipeList from '../../components/NutritionRecipeList/NutritionRecipeList';
import './NutritionCategoryPage.css';

class NutritionCategoryPage extends Component {
  render() {
    const { match } = this.props;
    const url = match.url;
    const category = url.split('/')[2];

    return(
      <div className='nutrition-category-page-wrapper'>
        <h2 className='page-title'>{category}</h2>
        <NutritionRecipeList/>
      </div>
    );
  }
}

export default NutritionCategoryPage;
