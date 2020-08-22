import React, { Component } from 'react';
import WorkoutList from '../../components/WorkoutList/WorkoutList';
import './WorkoutCategoryPage.css';
import workouts from '../../workouts.js';

class WorkoutCategoryPage extends Component {
  render() {
    const { match } = this.props;
    const url = match.url;
    const category = url.replace('/', '')

    let filterWorkouts = workouts.filter(workout =>
      workout.category === category);

    return(
      <div className='workout-category-page-wrapper'>
        <h2 className='page-title'>{category}</h2>
        <WorkoutList category={category}
                     workouts={filterWorkouts}/>
      </div>
    );
  }
}

export default WorkoutCategoryPage;
