import React, { Component } from 'react';
import { FaBookmark, FaUser, FaCommentAlt, FaShareAlt } from 'react-icons/fa';
import Dashboard from '../../components/Dashboard/Dashboard';
import './AccountPage.css';


class AccountPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sideNavIsVisible: false
    };
  }

  toggleSideNav() {
    this.setState({
      sideNavIsVisible: !this.state.sideNavIsVisible
    });
    console.log(this.state.sideNavIsVisible)
  }
  render() {

    return(
      <div className='account-page-wrapper'>
        <button className= 'open-side-nav-btn'
                onClick={() => this.toggleSideNav()}>
          Account Menu
        </button>
        <nav className={
              'account-side-nav ' +
              (this.state.sideNavIsVisible ? 'show-side-nav' : '')}>
          <div className='close-side-nav-wrapper'>
            <a className='close-side-nav' href='#'
               onClick={() => this.toggleSideNav()}>
               &times;
            </a>
          </div>
          <ul className='account-side-nav-list'>
            <a href="#">Dashboard</a>
            <a href="#">Content</a>
            <a href="#">Settings</a>
            <a href="#">Help</a>
          </ul>
        </nav>
        <Dashboard />
      </div>
    );
  }
}

export default AccountPage;
