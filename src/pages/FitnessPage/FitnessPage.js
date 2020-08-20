import React, { Component } from 'react';
import WorkoutCategoryList from '../../components/WorkoutCategoryList/WorkoutCategoryList';
import './FitnessPage.css';

class FitnessPage extends Component {
  render() {
    return(
      <div className='fitness-page-wrapper'>
        <WorkoutCategoryList />
      </div>
    );
  }
}

export default FitnessPage;
