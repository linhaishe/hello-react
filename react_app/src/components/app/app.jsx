import React, { Component } from "react";
import CommentAdd from "../comment-add/comment-add";
import CommentList from "../comment-list/comment-list";

export default class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     comments: [
  //       { username: "tom", content: "react is good!" },
  //       { username: "jack", content: "react is so hard!" }
  //     ]
  //   };
  // }
  //给组件对象添加state属性，默认的原始值是null,组件对象是this.state中的this
  state = {
    comments: [
      { username: "tom", content: "react is good!" },
      { username: "jack", content: "react is so hard!" }
    ]
  };
  render() {
    const { comments } = this.state;
    return (
      <div>
        <header className="site-header jumbotron">
          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                <h1>请发表对React的评论</h1>
              </div>
            </div>
          </div>
        </header>
        <div className="container">
          <CommentAdd />
          <CommentList comments={comments} />
        </div>
      </div>
    );
  }
}
