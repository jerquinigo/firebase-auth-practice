import app from "firebase/app";

var firebaseConfig = {
  apiKey: 
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
  }
}

export default Firebase;
