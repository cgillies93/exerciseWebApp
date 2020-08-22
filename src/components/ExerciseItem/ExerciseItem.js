import React, { Component } from 'react';
import './ExerciseItem.css';


class ExerciseItem extends Component {

  render() {

    const { exercise, lenExercises, exerciseNumber } = this.props;

    return(
      <article className='workout-exercise-item'>
        <div className='workout-exercise-image'>
        </div>
        <div className='exercise-number-total'>
          <p>{exerciseNumber} / {lenExercises}</p>
        </div>
        <div className='exercise-name-type'>
          <h3>{exercise}</h3>
          <p>Chest</p>
        </div>
        <div className='exercise-rest-time'>
          <p className='exercise-rest-time-title'>Rest Time</p>
          <p>Between Sets: 45 seconds</p>
          <p>Between Exercises: 1 minute</p>
        </div>
        <table className='exercise-rep-set-table'>
          <tbody>
            <tr className='exercise-rep-set-table-headers'>
              <th></th>
              <th className='th-sets'>Sets</th>
              <th>Reps</th>
            </tr>
            <tr>
              <td className='td-checkbox'>
                <input type='checkbox'/>
              </td>
              <td className='td-sets'>1</td>
              <td>15</td>
            </tr>
            <tr>
              <td className='td-checkbox'>
                <input type='checkbox'/>
              </td>
              <td className='td-sets'>2</td>
              <td>12</td>
            </tr>
            <tr>
              <td className='td-checkbox'>
                <input className='checkbox' type='checkbox' name='set3'/>
              </td>
              <td className='td-sets'>3</td>
              <td>10</td>
            </tr>
            <tr>
              <td className='td-checkbox'>
                <input type='checkbox'/>
              </td>
              <td className='td-sets'>4</td>
              <td>15</td>
            </tr>
          </tbody>
        </table>
      </article>
    );
  }
}

export default ExerciseItem;
