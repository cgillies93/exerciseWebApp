import React, { Component } from 'react';
import './ExerciseList.css';
import ExerciseItem from '../ExerciseItem/ExerciseItem';


class ExerciseList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      exercises: ["Exercise One", "Exercise Two", "Exercise Three", "Exercise Four"],
      currentIndex: 0,
      currentExercise: "",
      lenExercises: 4
    }

    this.nextExercise = this.nextExercise.bind(this);
  }

  componentDidMount() {
    let firstExercise = this.state.exercises[this.state.currentIndex];
    this.setState({
      currentExercise: firstExercise
    })
  }

  nextExercise() {
    let nextExercise = this.state.exercises[this.state.currentIndex + 1];
    this.setState({
      currentIndex: this.state.currentIndex + 1,
      currentExercise: nextExercise
    })
  }

  previousExercise() {
    let previousExercise = this.state.exercises[this.state.currentIndex - 1];
    this.setState({
      currentIndex: this.state.currentIndex - 1,
      currentExercise: previousExercise
    })
  }




  render() {
    console.log(this.state.currentIndex)

    return(
      <section className='workout-exercises-wrapper'>
        <h2 className='exercise-list-title'>Exercises</h2>
        <div className='exercise-item-button-wrapper'>

          <button className={
                    'prev-exercise-btn ' +
                    (this.state.currentIndex === 0 ? 'hide-btn' : '')}
                  onClick={()=> this.previousExercise()}>
          &#10094;
          </button>
          <ExerciseItem lenExercises={this.state.lenExercises}
                        exercise={this.state.currentExercise}
                        exerciseNumber={this.state.currentIndex + 1}/>
          <button className={
                    'next-exercise-btn ' +
                    (this.state.currentIndex === this.state.lenExercises - 1  ? 'hide-btn' : '')}
                  onClick={()=> this.nextExercise()}>
          &#10095;
          </button>
        </div>
      </section>
    );
  }
}

export default ExerciseList;
