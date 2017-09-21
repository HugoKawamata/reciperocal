// This function is going to be given to a reducer by redux, 
// which will change the state of `store` when it's called.
export function setGreeting(greeting: String) {
  return {
    type: "CHANGE_GREETING",
    payload: greeting
  };
}

export function setLanguage(language: String) {
  return {
    type: "CHANGE_LANGUAGE",
    payload: language
  };
}