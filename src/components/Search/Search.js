import React, { Component } from 'react';
import './Search.css';

class Search extends Component {

  render() {
    return (
      <div className='header-search-wrapper'>
        <form className='header-search-form'>
          <input className='header-search-input'
                 type='text' name='search'
                 placeholder='Search'/>
        </form>
      </div>
    );
  }
}

export default Search;
