import React, { Component } from 'react';
import './CreateRecipe.css';

class CreateRecipe extends Component {
  constructor(props) {
    super(props);
    this.state ={
      name: '',
      description: '',
      ingredients: [],
      directions: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.addRecipeName = this.addRecipeName.bind(this);
    this.addDescription = this.addDescription.bind(this);
    this.removeIngredient = this.removeIngredient.bind(this);
  }

  handleChange(e) {
    switch(e.target.name) {
      case 'recipe-name':
        this.addRecipeName(e.target.value);
      case 'description':
        this.addDescription(e.target.value);
    }
  }

  addRecipeName(name) {
    this.setState({
      name: name
    });
  }

  addDescription(description) {
    this.setState({
      description: description
    });
  }

  addIngredient(ingredient) {
    let tempIngredients = this.state.ingredients;
    tempIngredients.push(ingredient);
    this.setState({
      ingredients: tempIngredients
    });
    console.log(this.state.ingredients);
  }

  removeIngredient(index) {
    let tempIngredients = this.state.ingredients;
    tempIngredients.pop(index);
    this.setState({
      ingredients: tempIngredients
    });
    console.log(this.state.ingredients);
  }

  render() {

    let ingredientToAdd = {
      'name': '',
      'qty': 0,
      'measurement': ''
    }

    return(
      <div className='create-content-page-wrapper'>
        <form className='create-recipe-form'>
          <div className='create-recipe-name-wrapper'>
            <label htmlFor='recipe-name'>Recipe Name</label>
            <input type='text' name='recipe-name'
                   onChange={(e) => this.handleChange(e)}/>
          </div>
          <div className='create-recipe-description-wrapper'>
            <label htmlFor='description'>Description</label>
            <textarea name='description'
                      onChange={(e) => this.handleChange(e)}>
            </textarea>
          </div>
          <h3>Ingredients</h3>
          <div className='create-recipe-ingredient-wrapper'>
            <div className='qty-input-wrapper'>
              <label htmlFor='qty'>Qty</label>
              <input className='qty-input' type='number' name='qty'
                     onChange={(e) => ingredientToAdd.qty = e.target.value}/>
            </div>
            <div className='measurement-input-wrapper'>
              <label className='measurement-input'
                     htmlFor='measurement'>Measurement</label>
              <select name='measurement'
                      onChange={(e) => ingredientToAdd.measurement = e.target.value}>
                <option value=''></option>
                <option value='cups'>cups</option>
                <option value='grams'>grams</option>
                <option value='kg'>kg</option>
                <option value='lbs'>lbs</option>
                <option value='litre'>litres</option>
                <option value='oz.'>oz</option>
                <option value='tbsp'>tbsp</option>
                <option value='tsp'>tsp</option>
              </select>
            </div>
            <div className='ingredient-name-wrapper'>
              <label htmlFor='ingredient-name'>Ingredient Name</label>
              <input type='text' name='ingredient-name'
                     onChange={(e) => ingredientToAdd.name = e.target.value}/>
            </div>
            <div className='add-ingredient-btn-wrapper'>
              <button className='add-ingredient-btn'
                      onClick={(e) => {
                        e.preventDefault();
                        this.addIngredient(ingredientToAdd)
                      }}>
                Add
              </button>
            </div>
          </div>
          {
            this.state.ingredients.length > 0 ?
            <div >
              <ul className='added-ingredients-list'>
                {
                  this.state.ingredients.map((ingredient, ind) => (
                    <li className='added-ingredient-item' key={ind}>
                      <div className='added-ingredient-body'>
                        <p>{ingredient.qty}</p>
                        <p>{ingredient.measurement}</p>
                        <p>{ingredient.name}</p>
                        <button className='remove-ingredient-btn'
                                onClick={() => this.removeIngredient(ind)}>
                          Remove
                        </button>
                      </div>
                    </li>
                  ))
                }
              </ul>
            </div>
            :
            null
          }
          <div className='create-recipe-directions-wrapper'>
            <h3>Add Directions</h3>
            <div className='recipe-direction-wrapper'>
              <textarea className='direction-textarea'></textarea>
              <button className='add-direction-btn'>
                Add
              </button>
            </div>
          </div>
          <div className='create-recipe-btn-wrapper'>
            <button className='create-recipe-btn'>Create Recipe</button>
          </div>
        </form>
      </div>
    );
  }
}

export default CreateRecipe;
