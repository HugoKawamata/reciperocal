import { Action } from "./reducerTypes";
import { RecipeProps } from "../components/Recipe";

export default function myRecipeReducer(
    state: RecipeProps[] = [{recipeName: "", ingredients: [], steps: []}],
    action: Action) {
      switch (action.type) {
        case "UPDATE_MY_RECIPES": {
          state = action.payload;
        }
      }
      return state;
    }
