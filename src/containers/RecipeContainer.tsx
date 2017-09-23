import { connect } from "react-redux";
import { Recipe, RecipeProps, Ingredient } from "../components/Recipe";
import { State } from "../reducers/reducerTypes";
import { setGreeting, setLanguage, accessFirebaseError, accessFirebaseRequested, accessFirebaseSucceeded } from "../actions/greetingActions";
import database from "../Global"

const getRecipe = (dispatch: any, key: String) => {
  dispatch(accessFirebaseRequested());
  database.ref("/").once("value", name => {
    dispatch(accessFirebaseSucceeded(name.val()))
  })
  .catch((error) => {
    console.log(error);
    dispatch(accessFirebaseError());
  });
};

const mapStateToProps = (state: State) => {
  return {
    recipeName: state.activeRecipe.recipeName,
    ingredients: state.activeRecipe.ingredients,
    steps: state.activeRecipe.steps,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    onButtonClick: function () {
      dispatch(setGreeting("Gutentag"));
      dispatch(setLanguage("German"));
    },
    getRecipe: (key: String) => getRecipe(dispatch, key),
  };
};

const RecipeContainer = /*compose(
  firebaseConnect([
    'todos' // { path: 'todos' } // object notation
  ]),*/
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Recipe)

export default RecipeContainer;
