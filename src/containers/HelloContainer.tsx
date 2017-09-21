import { connect } from "react-redux";
import Hello from "../components/Hello";
import { State } from "../reducers/reducerTypes";
import { setGreeting, setLanguage } from "../actions/greetingActions";
//import { compose } from 'redux'
import {
  //firebaseConnect,
  //isLoaded,
  //isEmpty,
  dataToJS,
  pathToJS
} from "react-redux-firebase"

const mapStateToProps = (state: State) => {
  return {
    greeting: state.currentGreeting.greeting,
    language: state.currentGreeting.language,
    fibaGreetings: dataToJS(state.firebase, "fbGreetings"), // in v2 todos: state.firebase.data.todos
    auth: pathToJS(state.firebase, "auth") // in v2 todos: state.firebase.auth
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    onButtonClick: function () {
      dispatch(setGreeting("Gutentag"));
      dispatch(setLanguage("German"));
    }
  };
};

const HelloContainer = /*compose(
  firebaseConnect([
    'todos' // { path: 'todos' } // object notation
  ]),*/
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Hello)

export default HelloContainer;