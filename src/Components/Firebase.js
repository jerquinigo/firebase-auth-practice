import app from "firebase/app";
import "firebase/auth";

var firebaseConfig = {
  apiKey: ,
  authDomain: "fir-react-auth-practice.firebaseapp.com",
  databaseURL: "https://fir-react-auth-practice.firebaseio.com",
  projectId: "fir-react-auth-practice",
  storageBucket: "",
  messagingSenderId: "989955017719",
  appId: "1:989955017719:web:bf1db1402efec5fdb8fcf2"

  // Initialize Firebase
};

class Firebase {
  constructor() {
    app.initializeApp(firebaseConfig);
    this.auth = app.auth();
  }

  doCreateUserWithEmailAndPassword(email, password) {
    this.auth.createUserWithEmailAndPassword(email, password);
  }

  doSignInWithEmailAndPassword(email, password) {
    this.auth.signInWithEmailAndPassword(email, password);
  }

  doSignOut() {
    this.auth.signOut();
  }
}

export default Firebase;
