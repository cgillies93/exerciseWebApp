import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from '../Header/Header';
import FitnessPage from '../../pages/FitnessPage/FitnessPage';
import CategoryPage from '../../pages/CategoryPage/CategoryPage';
import WorkoutPage from '../../pages/WorkoutPage/WorkoutPage';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path='/' component={FitnessPage}/>
            <Route exact path='/:category' component={CategoryPage}/>
            <Route path='/:category/:workout' component={WorkoutPage}/>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
