import * as React from "react";
import "./App.css";
import { Provider } from "react-redux";
import MyRecipesContainer from "./containers/MyRecipesContainer";
import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import reducers from "./reducers";
import { updateMyRecipes } from "./actions/myRecipesActions";
import database from "./Global";
// tslint:disable-next-line
import { Router, Route, browserHistory } from "react-router";

const middleware = applyMiddleware(logger);
const store = createStore(reducers, middleware);

database.ref("recipes").on("value", recipes => {
  if (recipes) {
    store.dispatch(updateMyRecipes(recipes.val()));
  }
})

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={browserHistory}>
          <Route path="/" component={MyRecipesContainer} />
        </Router>
      </Provider>
    );
  }
}

export default App;
