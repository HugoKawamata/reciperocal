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

export function accessFirebaseSucceeded(name: String) {
  return {
    type: "FIREBASE_SUCCEEDED",
    payload: name
  }
}

export function accessFirebaseRequested() {
  return {
    type: "FIREBASE_REQUESTED",
    payload: ""
  }
}

export function accessFirebaseError() {
  return {
    type: "FIREBASE_ERROR",
    payload: ""
  }
}