import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

class Nav extends Component {

  render() {

    return (
      <nav className='nav'>
        <ul className='nav-list'>
          <li className='nav-item'>
            <Link to='/' className='nav-link'>Fitness</Link>
          </li>
          <li className='nav-item'>
            <Link to='/nutrition' className='nav-link'>Nutrition</Link>
          </li>
          <li className='nav-item'>
            <Link to='/' className='nav-link'>Blog</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Nav;
