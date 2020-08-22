import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './BlogArticleList.css';

class BlogArticleList extends Component {
  render() {
    const { articles } = this.props;
    return(
      <div className='blog-article-list-wrapper'>
        {
          articles.map(article => (
            <Link to={`/blog/${article.name}`} key={article.id}>
              <article className='blog-article'>
                <div className='blog-article-image'>
                </div>
                <p>{article.category}</p>
                <h4>{article.name}</h4>
              </article>
            </Link>
          ))
        }
      </div>
    );
  }
}

export default BlogArticleList;
