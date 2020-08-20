import React, { Component } from 'react';
import WorkoutList from '../../components/WorkoutList/WorkoutList';
import './WorkoutCategoryPage.css';

class WorkoutCategoryPage extends Component {
  render() {
    const { match } = this.props;
    const url = match.url;
    const category = url.replace('/', '');

    return(
      <div className='workout-category-page-wrapper'>
        <h2 className='page-title'>{category}</h2>
        <WorkoutList category={category}/>
      </div>
    );
  }
}

export default WorkoutCategoryPage;
