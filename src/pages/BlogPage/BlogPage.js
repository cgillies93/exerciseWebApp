import React, { Component } from 'react';
import BlogArticleList from '../../components/BlogArticleList/BlogArticleList';
import './BlogPage.css';

class BlogPage extends Component {
  render() {
    return(
      <div className='blog-page-wrapper'>
      <a href='#'>
        <article className='featured-article'>
          <p>Featured Article</p>
          <h1>Featured Article Name</h1>
        </article>
      </a>
        <div className='articles-menu-wrapper'>
          <ul className='articles-menu-list'>
            <li className='articles-menu-list-item article-active'>
              Recent
            </li>
            <li className='articles-menu-list-item'>
              Popular
            </li>
            <li className='articles-menu-list-item'>
              Fitness
            </li>
            <li className='articles-menu-list-item'>
              Nutrition
            </li>
          </ul>
        </div>
        <BlogArticleList />
      </div>
    );
  }
}

export default BlogPage;
