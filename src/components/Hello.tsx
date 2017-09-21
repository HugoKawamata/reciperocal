import * as React from "react";

export interface HelloProps {
  greeting: String;
  language: String;
  onButtonClick: () => any;
}

const Hello: React.SFC<HelloProps> = (props) => {
  return (
    <div>
      <div>
        {props.greeting}, World!
      </div>
      <button onClick={props.onButtonClick}>
        Change To German
      </button>
      <div>
        This greeting brought to you by the {props.language} language.
      </div>
    </div>
  )
}

export default Hello;