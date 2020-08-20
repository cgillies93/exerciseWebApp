import React, { Component } from 'react';
import WorkoutList from '../../components/WorkoutList/WorkoutList';
import './CategoryPage.css';

class CategoryPage extends Component {
  render() {
    const { match } = this.props;
    const url = match.url;
    const category = url.replace('/', '');
    
    return(
      <div className='category-page-wrapper'>
        <h2 className='page-title'>{category}</h2>
        <WorkoutList category={category}/>
      </div>
    );
  }
}

export default CategoryPage;
