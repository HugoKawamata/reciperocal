import * as React from "react";

export interface Ingredient {
  // Examples: 1 egg, 200g milk, a pinch of salt
  ingName: String;
  quantity: Number | String; 
  unit?: String;
}
export interface RecipeProps {
  recipeName: String;
  ingredients: Ingredient[];
  steps: String[];
};

const Ingredient: React.SFC<Ingredient> = (props) => {
  return (
    <div className="ingredient">
     {props.ingName}: {props.quantity} {props.unit}
    </div>
  )
};

const Ingredients: React.SFC<Ingredient[]> = (props) => {
  let ingredientsList = [];
  for (let i = 0; i < props.length; i++) {
    ingredientsList.push(Ingredient(props[i]));
  }
  return (
    <div className="ingredients">
      {ingredientsList}
    </div>
  )
};

export const Recipe: React.SFC<RecipeProps> = (props) => {
  return (
    <div>
      <h1>{props.recipeName}</h1>
      {Ingredients(props.ingredients)}
    </div>
  )
}

export default Recipe;