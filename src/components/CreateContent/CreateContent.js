import React, { Component } from 'react';
import CreateBlogPost from '../CreateBlogPost/CreateBlogPost';
import CreateRecipe from '../CreateRecipe/CreateRecipe';
import CreateWorkout from '../CreateWorkout/CreateWorkout';
import './CreateContent.css';

class CreateContent extends Component {
  render() {

    const { type } = this.props;

    return(
      <div className='create-content-page-wrapper'>
        <h2> Create {this.props.type}</h2>
        {
          type === 'Blog Post' ? <CreateBlogPost /> :
          type === 'Workout' ? <CreateWorkout /> :
          type === 'Recipe' ? <CreateRecipe /> :
          null
        }
      </div>
    );
  }
}

export default CreateContent;
