import React, { Component } from 'react';
import { FaRegClock } from 'react-icons/fa';
import { MdPeople } from 'react-icons/md';
import './RecipePage.css';

class RecipePage extends Component {
  render() {

    return(
      <div className='recipe-page-wrapper'>
        <div className='recipe-images'>
        </div>
        <h1>Recipe Name</h1>
        <section className='workout-description-wrapper'>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget ornare dolor. Etiam quis blandit nisl. Cras faucibus iaculis pulvinar. Integer mauris lorem, molestie id lectus in, vulputate aliquet magna. Nunc vitae mauris semper arcu commodo molestie. Vestibulum vestibulum, tortor et molestie aliquam, erat sem porta nunc, et congue arcu dolor eu leo. Donec tempor felis tellus, at vulputate sem ultrices porttitor.</p>
        </section>
        <section className='recipe-info-wrapper'>
          <div className='recipe-cook-time'>
            <FaRegClock/>
            <p>{'30'} minutes</p>
          </div>
          <div className='recipe-servings'>
            <MdPeople/>
            <p>{'6'} servings</p>
          </div>
        </section>
        <section className='recipe-ingredients-wrapper'>
          <h2>Ingredients</h2>
          <table className='recipe-ingredients-table'>
            <tbody>
              <tr className='recipe-ingredients-header-row'>
                <th>Qty</th>
                <th>Ingredient</th>
              </tr>
              <tr>
                <td>1 cup</td>
                <td>Flour</td>
              </tr>
              <tr>
                <td>1/2 cup</td>
                <td>Water</td>
              </tr>
              <tr>
                <td>1 tbsp</td>
                <td>Olive Oil</td>
              </tr>
              <tr>
                <td>1</td>
                <td>Egg Yolk</td>
              </tr>
            </tbody>
          </table>
        </section>
        <section className='recipe-steps-wrapper'>
          <h2>Directions</h2>
          <ol className='recipe-steps-list'>
            <li>Slowly add water to the flour</li>
            <li>Add olive oil and egg yolk</li>
            <li>Mix until dough forms</li>
          </ol>
        </section>
      </div>
    );
  }
}

export default RecipePage;
