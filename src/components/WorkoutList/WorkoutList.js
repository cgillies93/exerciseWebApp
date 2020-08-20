import React, { Component } from 'react';
import WorkoutItem from '../WorkoutItem/WorkoutItem';
import './WorkoutList.css';

class WorkoutList extends Component {
  constructor(props) {
    super(props);
    const workouts = [
      "Workout One",
      "Workout Two",
      "Workout Three",
      "Workout Four",
      "Workout Five",
      "Workout Six",
      "Workout Seven",
      "Workout Eight",
      "Workout Nine",
      "Workout Ten"
    ];

    this.state = {
      workouts: workouts
    };
  }

  render() {
    return(
      <section className='workout-list-wrapper'>
        <ul className='workout-list'>
          {
            this.state.workouts.map((workout, ind) => (
              <WorkoutItem key={ind}
                           category={this.props.category}
                           workout={workout}/>
            ))
          }

        </ul>
      </section>
    );
  }
}

export default WorkoutList;
