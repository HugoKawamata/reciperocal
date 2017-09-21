import { connect } from "react-redux";
import Hello from "../components/Hello";
import { State } from "../reducers/reducerTypes";
import { setGreeting, setLanguage } from "../actions/greetingActions";

const mapStateToProps = (state: State) => {
  return {
    greeting: state.greeting.greeting,
    language: state.greeting.language
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

const HelloContainer = connect(
  mapStateToProps,
  mapDispatchToProps
) (Hello);

export default HelloContainer;