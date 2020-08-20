import React, { Component } from 'react';
import  { Link } from 'react-router-dom';
import './WorkoutCategoryItem.css';

class WorkoutCategoryItem extends Component {
  render() {
    const { category } = this.props;
    return(
      <Link to='/' className='workout-categories-link'>
        <li className='workout-categories-item'>
            <h3>{category}</h3>
        </li>
      </Link>
    );
  }
}

export default WorkoutCategoryItem;
