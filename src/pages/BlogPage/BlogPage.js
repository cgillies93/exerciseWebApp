import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BlogArticleList from '../../components/BlogArticleList/BlogArticleList';
import './BlogPage.css';
import articles from '../../blogArticles.js';

class BlogPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      postsShowing: 'Recent',
      articles: articles
    }

    this.changePostsShowing = this.changePostsShowing.bind(this);
  }

  changePostsShowing(filter) {
    this.setState({
      postsShowing: filter
    });
  }


  render() {

    let filterArticles = this.state.articles;

    if (this.state.postsShowing === 'Recent') {
      console.log('Recent')
    }
    else if (this.state.postsShowing === 'Popular') {
      filterArticles = filterArticles.sort((a, b) => b.shares - a.shares)
    }
    else if (this.state.postsShowing === 'Fitness') {
      filterArticles = filterArticles.filter(article => article.category === 'Fitness');
    }
    else if (this.state.postsShowing === 'Nutrition') {
      filterArticles = filterArticles.filter(article => article.category === 'Nutrition');
    }


    return(
      <div className='blog-page-wrapper'>
      <Link to={`/blog/featuredArticle`}>
        <article className='featured-article'>
          <p>Featured Article</p>
          <h1>Featured Article Name</h1>
        </article>
      </Link>
        <div className='articles-menu-wrapper'>
          <ul className='articles-menu-list'>
            <li className={
                  'articles-menu-list-item ' +
                  (this.state.postsShowing === 'Recent' ? 'article-active' : '')}
                onClick={() => this.changePostsShowing('Recent')}>
              Recent
            </li>
            <li className={
                  'articles-menu-list-item ' +
                  (this.state.postsShowing === 'Popular' ? 'article-active' : '')}
                onClick={() => this.changePostsShowing('Popular')}>
              Popular
            </li>
            <li className={
                  'articles-menu-list-item ' +
                  (this.state.postsShowing === 'Fitness' ? 'article-active' : '')}
                onClick={() => this.changePostsShowing('Fitness')}>
              Fitness Posts
            </li>
            <li className={
                  'articles-menu-list-item ' +
                  (this.state.postsShowing === 'Nutrition' ? 'article-active' : '')}
                onClick={() => this.changePostsShowing('Nutrition')}>
              Nutrition Posts
            </li>
          </ul>
        </div>
        <BlogArticleList articles={filterArticles}/>
      </div>
    );
  }
}

export default BlogPage;
