import React, { Component } from 'react';
import NutritionCategoryList from '../../components/NutritionCategoryList/NutritionCategoryList';
import './NutritionPage.css';

class NutritionPage extends Component {
  render() {

    return(
      <div className='nutrition-page-wrapper'>
        <NutritionCategoryList category={this.props.category}/>
      </div>
    );
  }
}

export default NutritionPage;
