import React, { Component } from 'react';
import { FaBookmark, FaUser, FaCommentAlt, FaShareAlt } from 'react-icons/fa';
import './DashboardGlance.css';

class DashboardGlance extends Component {
  render() {
    return (
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
    );
  }
}

export default DashboardGlance;
