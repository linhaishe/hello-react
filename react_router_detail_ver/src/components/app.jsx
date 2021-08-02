import React, { Component } from "react";
import logo from "../logo.svg";

export default class App extends Component {
  render() {
    return (
      <div>
        <img className="logo" src={logo} alt="logo" />
        <p className="title">react app </p>
      </div>
    );
  }
}

{
  /*
class app extends Component {
    render() {
        return (
            <div>

            </div>
        )
    }
}

export default App;*/
}
