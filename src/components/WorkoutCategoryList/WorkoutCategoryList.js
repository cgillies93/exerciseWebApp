import React, { Component } from 'react';
import  { Link } from 'react-router-dom';
import WorkoutCategoryItem from '../WorkoutCategoryItem/WorkoutCategoryItem';
import './WorkoutCategoryList.css';

class WorkoutCategoryList extends Component {

  constructor(props) {
    super(props);
    const categories = [
      "Muscle Building",
      "Fat Loss",
      "Increase Strength",
      "Ab Workouts",
      "Full Body",
      "Sports Performance",
      "Bodyweight",
      "Beginner",
      "At Home",
      "Cardio"
    ];
    this.state = {
      categories: categories
    };

  }
  render() {
    return(
      <section className='workout-categories-wrapper'>
        <h2 className='page-title'>Workout Categories</h2>
        <ul className='workout-categories-list'>
          {
            this.state.categories.map((category, ind) => (
              <WorkoutCategoryItem key={ind} category={category}/>
            ))
          }
        </ul>
      </section>

    );
  }
}

export default WorkoutCategoryList;
