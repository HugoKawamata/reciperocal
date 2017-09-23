import { RecipeProps } from "../components/Recipe";

export function accessFirebaseSucceeded(name: String) {
  return {
    type: "FIREBASE_SUCCEEDED",
    payload: name
  }
}

export function accessFirebaseRequested() {
  return {
    type: "FIREBASE_REQUESTED",
    payload: ""
  }
}

export function accessFirebaseError() {
  return {
    type: "FIREBASE_ERROR",
    payload: ""
  }
}

export function updateMyRecipes(recipes: RecipeProps[]) {
  return {
    type: "UPDATE_MY_RECIPES",
    payload: recipes
  }
}