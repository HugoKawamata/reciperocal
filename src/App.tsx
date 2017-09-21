import * as React from "react";
import "./App.css";
import { Provider } from "react-redux";
import HelloContainer from "./containers/HelloContainer";
import { reactReduxFirebase, firebaseStateReducer } from "react-redux-firebase";
import { createStore, compose, combineReducers } from "redux";
import reducers from "./reducers";


const firebaseConfig = {
  apiKey: "AIzaSyDP0nHx94o2IgIyrPcNPJhMe1EK9DIa1PY",
  authDomain: "reciperocal.firebaseapp.com",
  databaseURL: "https://reciperocal.firebaseio.com",
  storageBucket: "reciperocal.appspot.com"
}

const reduxFirebaseConfig = {
  userProfile: "users"
}

// Add redux Firebase to compose
const createStoreWithFirebase = compose(
  reactReduxFirebase(firebaseConfig, reduxFirebaseConfig),
)(createStore)

// Add Firebase to reducers
const rootReducer = combineReducers({
  firebase: firebaseStateReducer,
  reducers: reducers
})

// Create store with reducers and initial state
const initialState = {};
const store = createStoreWithFirebase(rootReducer, initialState);


const logo = require("./logo.svg");

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to React</h2>
          </div>
          <p className="App-intro">
            <HelloContainer />
          </p>
        </div>
      </Provider>
    );
  }
}

export default App;
