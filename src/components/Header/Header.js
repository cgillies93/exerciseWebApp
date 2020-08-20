import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import Search from '../Search/Search';
import './Header.css';

class Header extends Component {

  render() {
    return (
      <header className='header'>
        <Nav />
        <Search />
      </header>
    );
  }
}

export default Header;
