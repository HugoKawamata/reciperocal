import { connect } from "react-redux";
import MyRecipes from "../components/MyRecipes";
import { State } from "../reducers/reducerTypes";

const mapStateToProps = (state: State) => {
  return {
    recipeList: state.recipeList
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
  };
};

const MyRecipesContainer = 
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(MyRecipes)

export default MyRecipesContainer;
