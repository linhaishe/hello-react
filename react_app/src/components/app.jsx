import React, { Component } from "react";
import PropTypes from "prop-types";

import Search from "./search";
import Main from "./main";

export default class App extends Component {
  // state = {
  //   //一旦点击搜索按钮，则会更新这个状态
  //   searchName: ""
  // };
  //以上这部分由于应用pubsub-js功能而删除

  // setSearchName = searchName => {
  //   // this.searchName = searchName;
  //   this.setState({ searchName });
  // };
  //以上这部分由于应用pubsub-js功能而删除

  render() {
    return (
      <div className="container">
        {/* <Search setSearchName={this.setSearchName} />
        <Main searchName={this.state.searchName} /> */}
        {/* 以上这部分由于应用pubsub-js功能而删除 */}

        <Search />
        {/* 状态更新后传给main */}
        <Main />
      </div>
    );
  }
}
