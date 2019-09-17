import React, { Component } from "react";
import Firebase from "./Firebase.js";

class FirebaseForm extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: ""
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  displayForm = () => {
    return (
      <div>
        <div className="container">
          <div className="row">
            <input
              className="input-field col s12 m12"
              type="text"
              placeholder="email"
              name="email"
              onChange={this.handleChange}
            />
          </div>
          <div className="container">
            <div className="row">
              <input
                className="input-field col s12 m12"
                type="password"
                placeholder="password"
                name="password"
                onChange={this.handleChange}
              />
            </div>
          </div>
        </div>
      </div>
    );
  };

  render() {
    console.log(this.state, "the current state");
    return (
      <div>
        the form
        {this.displayForm()}
      </div>
    );
  }
}

export default FirebaseForm;
