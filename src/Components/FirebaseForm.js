import React, { Component } from "react";
import Firebase from "./Firebase.js";

class FirebaseForm extends Component {
  // constructor{
  //   super()
  // }

  displayForm = () => {
    return (
      <div>
        <div className="container">
          <div className="row">
            <input
              className="input-field col s12 m12"
              type="text"
              placeholder="email"
            />
          </div>
          <div className="container">
            <div className="row">
              <input
                className="input-field col s12 m12"
                type="password"
                placeholder="email"
              />
            </div>
          </div>
        </div>
      </div>
    );
  };

  render() {
    console.log(Firebase, "the firebase");
    return (
      <div>
        the form
        {this.displayForm()}
      </div>
    );
  }
}

export default FirebaseForm;
