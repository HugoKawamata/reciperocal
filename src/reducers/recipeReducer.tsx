import { Action } from "./reducerTypes";
import { RecipeProps } from "../components/Recipe";

export default function greetingReducer(
    state: RecipeProps = {recipeName: "", ingredients: [], steps: []},
    action: Action) {
      return state;
    }