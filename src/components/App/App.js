import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from '../Header/Header';
import FitnessPage from '../../pages/FitnessPage/FitnessPage';
import WorkoutCategoryPage from '../../pages/WorkoutCategoryPage/WorkoutCategoryPage';
import WorkoutPage from '../../pages/WorkoutPage/WorkoutPage';
import NutritionPage from '../../pages/NutritionPage/NutritionPage';
import NutritionCategoryPage from '../../pages/NutritionCategoryPage/NutritionCategoryPage';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path='/nutrition' component={NutritionPage}/>
            <Route exact path='/nutrition/:category' component={NutritionCategoryPage}/>
            <Route exact path='/' component={FitnessPage}/>
            <Route exact path='/:category' component={WorkoutCategoryPage}/>
            <Route exact path='/:category/:workout' component={WorkoutPage}/>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
