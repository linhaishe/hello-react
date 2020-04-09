import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Search extends Component {
  static propTypes = {
    setSearchName: PropTypes.func.isRequired,
  };

  //接收input内的输入数据
  search = () => {
    //得到输入关键字
    const searchName = this.input.value.trim();
    //const searchName = this.refs.content.trim();

    if (searchName) {
      //search
      this.props.setSearchName(searchName);
    }
  };
  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">Search Github Users</h3>
        <div>
          <input
            type="text"
            placeholder="enter the name you search"
            ref={(myinput) => (this.input = myinput)}
          />
          <button onClick={this.search}>Search</button>
        </div>
      </section>
    );
  }
}
