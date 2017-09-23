import { RecipeProps } from "../components/Recipe";
export type Greeting = {
  readonly greeting: String;
  readonly language: String;
}

export type State = {
  readonly firebase: any;
  readonly recipeList: RecipeProps[]
};

export type Action = {
  type: String;
  // tslint:disable-next-line:no-any
  payload: any;
};
