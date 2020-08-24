import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../Nav/Nav';
import Search from '../Search/Search';
import './Header.css';

class Header extends Component {

  render() {
    return (
      <header className='header'>
        <div className='header-wrapper'>
          <div className='logo-wrapper'>
            <Link className='logo-link' to='/'>
              <h1 className='logo'>CENTRY</h1>
            </Link>
          </div>
          <Nav />
  
        </div>
      </header>
    );
  }
}

export default Header;
