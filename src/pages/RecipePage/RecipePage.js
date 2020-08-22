import React, { Component } from 'react';
import { FaRegClock } from 'react-icons/fa';
import { MdPeople } from 'react-icons/md';
import './RecipePage.css';
import recipes from '../../recipes';

class RecipePage extends Component {
  render() {
    const { match } = this.props;
    const recipeName = match.url.split('/')[3];

    const recipe = recipes.find(recipe => recipe.name === recipeName);



    return(
      <div className='recipe-page-wrapper'>
        <div className='recipe-images'>
        </div>
        <h1>{recipe.name}</h1>
        <section className='workout-description-wrapper'>
          <p>{recipe.description}</p>
        </section>
        <section className='recipe-info-wrapper'>
          <div className='recipe-cook-time'>
            <FaRegClock/>
            <p>{recipe.time}</p>
          </div>
          <div className='recipe-servings'>
            <MdPeople/>
            <p>
            {recipe.servings}
            {
              recipe.servings > 1 ? ' servings' : ' serving'
            }
            </p>
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
              {
                recipe.ingredients.map((ingredient, ind) => (
                  <tr>
                    <td>{ingredient.quantity}</td>
                    <td>{ingredient.name}</td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </section>
        <div className='seperator'></div>
        <section className='recipe-directions-wrapper'>
          <h2>Directions</h2>
          <ol className='recipe-directions-list'>
            {
              recipe.directions.map((direction, ind) => (
                <li key={ind}>{direction}</li>
              ))
            }
          </ol>
        </section>
      </div>
    );
  }
}

export default RecipePage;
