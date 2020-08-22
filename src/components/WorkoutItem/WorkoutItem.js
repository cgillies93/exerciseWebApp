import React, { Component } from 'react';
import  { Link } from 'react-router-dom';
import './WorkoutItem.css';

class WorkoutItem extends Component {
  render() {
    let { category, workout } = this.props;
    category = category.replace(' ', '');

    return(
      <Link to={`/${category}/${workout.name}`}
            className='workout-item-link'>
        <li className='workout-item'>
            <h3>{workout.name}</h3>
            <p>{workout.level}</p>
            <div className='workout-time-equip-wrapper'>
              <div className='workout-item-time'>
                <p>{workout.time}</p>
              </div>
              <div className='workout-item-equipment'>
                <p>{workout.equipment}</p>
              </div>
            </div>
        </li>
      </Link>
    );
  }
}

export default WorkoutItem;
