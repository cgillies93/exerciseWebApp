import React, { Component } from 'react';
import { FaBookmark, FaUser, FaCommentAlt, FaShareAlt } from 'react-icons/fa';
import './Dashboard.css';


class Dashboard extends Component {
  render() {

    return(
      <div className='dashboard-wrapper'>
        <h1>Dashboard</h1>
        <section className='dashboard-at-a-glance'>
          <div className='posts-at-a-glance'>
            <div className='at-a-glance-item-body'>
            <FaBookmark />
            <p>{'273'} Posts</p>
            </div>
          </div>
          <div className='users-at-a-glance'>
            <div className='at-a-glance-item-body'>
              <FaUser/>
              <p>{'500'} Users</p>
            </div>
          </div>
          <div className='comments-at-a-glance'>
            <div className='at-a-glance-item-body'>
              <FaCommentAlt/>
              <p>{'724'} Comments</p>
            </div>
          </div>
          <div className='shares-at-a-glance'>
            <div className='at-a-glance-item-body'>
              <FaShareAlt/>
              <p>{'246'} Shares</p>
            </div>
          </div>
        </section>
        <section className='dashboard-popular-posts-wrapper'>
          <h2>Most Popular Posts</h2>
          <ul className='dashboard-popular-posts-list'>
            <li className='dashboard-popular-posts-list-item'>
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
            <li className='dashboard-popular-posts-list-item'>
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
            <li className='dashboard-popular-posts-list-item'>
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
            <li className='dashboard-popular-posts-list-item'>
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
            <li className='dashboard-popular-posts-list-item'>
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
          </ul>
          <a href='#'>View All</a>
        </section>
        <section className='active-users-graph'>
          <h2>Active Users</h2>
          <div className='graph'>
          </div>
        </section>
      </div>
    );
  }
}

export default Dashboard;
