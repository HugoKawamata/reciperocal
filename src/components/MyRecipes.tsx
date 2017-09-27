import * as React from "react";
import { RecipeProps } from "./Recipe"

export interface MyRecipesProps {
  recipeList: RecipeProps[]
};

const MyRecipesItem: React.SFC<RecipeProps> = (props) => {
  return (
    <div>
      {props.recipeName}
    </div>
  )
}

const MyRecipes: React.SFC<MyRecipesProps> = (props) => {
  console.log("rendering myrecipes")
  let recipeItems = [];

  console.log(props.recipeList)
  for (let i = 0; i < (props.recipeList ? props.recipeList.length : 0); i++) {
    recipeItems.push(MyRecipesItem(props.recipeList[i]));
  };
  console.log(recipeItems);
  return (
    <div>
      {recipeItems}
    </div>
  )
}

export default MyRecipes;
