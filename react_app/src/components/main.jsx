import React, { Component } from "react";

export default class Main extends Component {
  render() {
    return (
      // style = {{ width: 100 }} 可以不用写标量，它会自动帮你加，整个row只需要留一个card就可以了，其他的都是动态生成的

      <div className="row">
        <div className="card">
          <a href="https://github.com/reactjs" target="_blank">
            <img
              src="https://avatars.githubusercontent.com/u/6412038?v=3"
              style={{ width: 100 }}
            />
          </a>
          <p className="card-text">reactjs</p>
        </div>
      </div>
    );
  }
}
