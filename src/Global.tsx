import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDP0nHx94o2IgIyrPcNPJhMe1EK9DIa1PY",
  authDomain: "reciperocal.firebaseapp.com",
  databaseURL: "https://reciperocal.firebaseio.com",
  storageBucket: "reciperocal.appspot.com"
}

firebase.initializeApp(firebaseConfig);
const database = firebase.database();

export default database;