import React, { Component } from 'react';
import WorkoutItem from '../WorkoutItem/WorkoutItem';
import './WorkoutList.css';

class WorkoutList extends Component {
  
  render() {
    const { workouts } = this.props;
    return(
      <section className='workout-list-wrapper'>
        <ul className='workout-list'>
          {
            workouts.map((workout, ind) => (
              <WorkoutItem key={workout.id}
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
