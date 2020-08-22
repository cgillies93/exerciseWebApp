import React, { Component } from 'react';
import './BlogArticlePage.css';
import articles from '../../blogArticles.js';

class BlogArticlePage extends Component {
  render(){

    const { match } = this.props;
    const url = match.url;
    const articleName = url.split('/')[2];
    const article = articles.find(article => article.name === articleName);

    return(
      <div className='blog-page-wrapper'>
        <div className='article-image'>
        </div>
        <h2>{article.name}</h2>
        <section className='article-author-date'>
          <p>{article.date}</p>
          <p>by: {article.author}</p>
        </section>
        <div className='blog-body-seperator'></div>
        <section className='article-body'>
          {
            article.content.map((paragraph, ind) => (
              <p key={ind}>{paragraph}</p>
            ))
          }
        </section>
      </div>
    );
  }
}

export default BlogArticlePage;
