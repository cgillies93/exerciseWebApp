import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from '../Header/Header';
import FitnessPage from '../../pages/FitnessPage/FitnessPage';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <FitnessPage />
        </div>
      </Router>
    )
  }
}

export default App;
