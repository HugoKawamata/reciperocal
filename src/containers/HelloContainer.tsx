import { connect } from "react-redux";
import Hello from "../components/Hello";
import { State } from "../reducers/reducerTypes";
import { setGreeting, setLanguage, accessFirebaseError, accessFirebaseRequested, accessFirebaseSucceeded } from "../actions/greetingActions";
//import { compose } from 'redux'
import {
  //firebaseConnect,
  //isLoaded,
  //isEmpty,
  //dataToJS,
  //pathToJS
} from "react-redux-firebase"
import database from "../Global"

const accessFirebase = (dispatch: any) => {
  dispatch(accessFirebaseRequested());
  database.ref("/").once("value", name => {
    dispatch(accessFirebaseSucceeded(name.val()))
  })
  .catch((error) => {
    console.log(error);
    dispatch(accessFirebaseError());
  });
}

const mapStateToProps = (state: State) => {
  return {
    greeting: state.greeting.greeting,
    language: state.greeting.language,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    onButtonClick: function () {
      dispatch(setGreeting("Gutentag"));
      dispatch(setLanguage("German"));
    },
    accessFiba: () => accessFirebase(dispatch),
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