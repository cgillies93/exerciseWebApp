import React, { Component } from 'react';
import './DashboardListItem.css';

class DashboardListItem extends Component {
  render() {
    return (
      <>
      <li className='dashboard-popular-list-item'>
        <div className='dashboard-list-item-name'>
          Post One
        </div>
        <div className='dashboard-list-item-stat-wrapper'>
          <div className='dashboard-list-item-comments'>
            <p>Comments</p>
            <p className='dashboard-list-item-number-one'>{'100'}</p>
          </div>
          <div className='dashboard-list-item-shares'>
            <p>Shares</p>
            <p className='dashboard-list-item-number-one'>{'43'}</p>
          </div>
        </div>
      </li>
      <li className='dashboard-popular-list-item'>
        <div className='dashboard-list-item-name'>
          Post Two
        </div>
        <div className='dashboard-list-item-stat-wrapper'>
          <div className='dashboard-list-item-comments'>
            <p>Comments</p>
            <p className='dashboard-list-item-number'>{'100'}</p>
          </div>
          <div className='dashboard-list-item-shares'>
            <p>Shares</p>
            <p className='dashboard-list-item-number'>{'43'}</p>
          </div>
        </div>
      </li>
      <li className='dashboard-popular-list-item'>
        <div className='dashboard-list-item-name'>
          Post Three
        </div>
        <div className='dashboard-list-item-stat-wrapper'>
          <div className='dashboard-list-item-comments'>
            <p>Comments</p>
            <p className='dashboard-list-item-number'>{'100'}</p>
          </div>
          <div className='dashboard-list-item-shares'>
            <p>Shares</p>
            <p className='dashboard-list-item-number'>{'43'}</p>
          </div>
        </div>
      </li>
      <li className='dashboard-popular-list-item'>
        <div className='dashboard-list-item-name'>
          Post Four
        </div>
        <div className='dashboard-list-item-stat-wrapper'>
          <div className='dashboard-list-item-comments'>
            <p>Comments</p>
            <p className='dashboard-list-item-number'>{'100'}</p>
          </div>
          <div className='dashboard-list-item-shares'>
            <p>Shares</p>
            <p className='dashboard-list-item-number'>{'43'}</p>
          </div>
        </div>
      </li>
      <li className='dashboard-popular-list-item'>
        <div className='dashboard-list-item-name'>
          Post Five
        </div>
        <div className='dashboard-list-item-stat-wrapper'>
          <div className='dashboard-list-item-comments'>
            <p>Comments</p>
            <p className='dashboard-list-item-number'>{'100'}</p>
          </div>
          <div className='dashboard-list-item-shares'>
            <p>Shares</p>
            <p className='dashboard-list-item-number'>{'43'}</p>
          </div>
        </div>
      </li>
      </>
    );
  }
}

export default DashboardListItem;
