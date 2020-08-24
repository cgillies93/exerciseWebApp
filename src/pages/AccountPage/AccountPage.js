import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Dashboard from '../../components/Dashboard/Dashboard';
import CreateContent from '../../components/CreateContent/CreateContent';
import './AccountPage.css';


class AccountPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sideNavIsVisible: false,
      showComponent: 'Dashboard',
      showModal: false,
      create: ''
    };

    this.toggleSideNav = this.toggleSideNav.bind(this);
    this.toggleComponents = this.toggleComponents.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.createContent = this.createContent.bind(this);
  }

  toggleSideNav() {
    this.setState({
      sideNavIsVisible: !this.state.sideNavIsVisible
    });
  }

  toggleComponents(component) {
    this.setState({
      showComponent: component
    });
  }

  toggleModal() {
    this.setState({
      showModal: !this.state.showModal
    });
  }

  createContent(type) {
    this.setState({
      create: type
    });
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
            <button href="#"
                    onClick={() => this.toggleComponents('Dashboard')}>
              Dashboard
            </button>
            <button href="#"
                    onClick={() => this.toggleComponents('Content')}>
              Content
            </button>
            <button href="#">Settings</button>
            <button href="#">Help</button>
          </ul>
        </nav>
        {
          this.state.showComponent === 'Dashboard' ? <Dashboard /> :
          this.state.showComponent === 'Content' ?
          <div className='content-component-wrapper'>
            <h2>Content</h2>
              <button className='create-new-content-btn'
                      onClick={() => this.toggleModal()}>
                Create New Content
              </button>
              <section className='content-fitness'>

              </section>
              <section className='content-nutrtition'>

              </section>
              <section className='content-blog-posts'>

              </section>
              <div className={
                    'create-content-modal ' +
                    (this.state.showModal === true ? 'show-modal' : '')}>
                <div className='modal-content'>
                  <div className='close-modal-btn-wrapper'>
                    <button className='close-modal'
                            onClick={() => this.toggleModal()}>
                      &times;
                    </button>
                  </div>
                  <p>What would you like to create?</p>
                  <div className='what-to-create-wrapper'>
                    <button className='create-item'
                            onClick={() => {
                              this.createContent('Workout');
                              this.toggleModal();
                              this.toggleComponents('Create Content');
                            }}>
                      <p>Create Workout</p>
                    </button>
                    <button className='create-item'
                            onClick={() => {
                              this.createContent('Recipe');
                              this.toggleModal();
                              this.toggleComponents('Create Content');
                            }}>
                      <p>Create Recipe</p>
                    </button>
                    <button className='create-item'
                            onClick={() => {
                              this.createContent('Blog Post');
                              this.toggleModal();
                              this.toggleComponents('Create Content');
                            }}>
                      <p>Create Blog Post</p>
                    </button>
                  </div>
                </div>
              </div>
          </div>
          :
          this.state.showComponent === 'Create Content' ? <CreateContent type={this.state.create}/>
          :
          null
        }
      </div>
    );
  }
}

export default AccountPage;
