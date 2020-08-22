import React, { Component } from 'react';
import  { Link } from 'react-router-dom';
import './WorkoutCategoryItem.css';

class WorkoutCategoryItem extends Component {
  render() {
    let { category } = this.props;

    return(
      <Link to={`/${category}`}
            className='workout-categories-link'>
        <li className='workout-categories-item'>
            <h3 className='category-item-name'>{category}</h3>
        </li>
      </Link>
    );
  }
}

export default WorkoutCategoryItem;
