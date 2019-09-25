// import app from "firebase/app";
import firebase from "firebase";
import "firebase/auth";
import "firebase/database";

const config = {
  apiKey: "AIzaSyD8Qrs2vAVXNdHuG6k1fpcVB4gYik9qXlI",
  authDomain: "fir-react-auth-practice.firebaseapp.com",
  databaseURL: "https://fir-react-auth-practice.firebaseio.com",
  projectId: "fir-react-auth-practice",
  storageBucket: "",
  messagingSenderId: "989955017719",
  appId: "1:989955017719:web:bf1db1402efec5fdb8fcf2"

  // Initialize Firebase
};

firebase.initializeApp(config);

export default firebase;

// class FirebaseClass {
//   constructor() {
//     app.initializeApp(firebaseConfig);
//     this.auth = app.auth();
//   }
//
//   doCreateUserWithEmailAndPassword(email, password) {
//     this.auth.createUserWithEmailAndPassword(email, password);
//   }
//
//   doSignInWithEmailAndPassword(email, password) {
//     this.auth.signInWithEmailAndPassword(email, password);
//   }
//
//   doSignOut() {
//     this.auth.signOut();
//   }
// }
//
// export default FirebaseClass;
