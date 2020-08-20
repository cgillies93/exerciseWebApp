import React, { Component } from 'react';
import  { Link } from 'react-router-dom';
import './WorkoutItem.css';

class WorkoutItem extends Component {
  render() {
    const { category, workout } = this.props;

    return(
      <Link to={`/${category}/workout`} className='workout-item-link'>
        <li className='workout-item'>
            <h3>{workout}</h3>
        </li>
      </Link>
    );
  }
}

export default WorkoutItem;
