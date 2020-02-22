import React, { Component } from "react";
import PropTypes from "prop-types";

import Search from "./search";
import Main from "./main";

export default class App extends Component {
  state = {
    //一旦点击搜索按钮，则会更新这个状态
    searchName: ""
  };

  setSearchName = searchName => {
    // this.searchName = searchName;
    this.setState({ searchName });
  };
  render() {
    return (
      <div className="container">
        <Search setSearchName={this.setSearchName} />
        {/* 状态更新后传给main */}
        <Main searchName={this.state.searchName} />
      </div>
    );
  }
}
