import React, { Component } from 'react';
import NutritionCategoryItem from '../NutritionCategoryItem/NutritionCategoryItem';
import './NutritionCategoryList.css';

class NutritionCategoryList extends Component {

  constructor(props) {
    super(props);
    const categories = [
      "Clean Eating",
      "Keto",
      "Vegan",
      "Paleo",
      "Gluten Free"
    ];
    this.state = {
      categories: categories
    };
  }

  render() {
    return(
      <section className='nutrition-categories-wrapper'>
        <h2 className='page-title'>Nutrition Categories</h2>
        <ul className='nutrition-categories-list'>
        {
          this.state.categories.map((category, ind) => (
            <NutritionCategoryItem key={ind}
                                   category={category}/>
          ))
        }
        </ul>
      </section>

    );
  }
}

export default NutritionCategoryList;
