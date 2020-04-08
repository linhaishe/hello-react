import React, { Component } from "react";
import CommentAdd from "../../../src/components/comment-add/comment-add";
import CommentList from "../../../src/components/comment-list/comment-list";

export default class App extends Component {
  state = {
    comments: [
      { username: "tom", content: "react is so hard!" },
      { username: "jack", content: "react is so easy!" },
    ],
  };

  addComment = (comment) => {
    const { comments } = this.state;
    comments.unshift(comment);
    this.setState({ comments });
  };

  deleteComment = (index) => {
    const { comments } = this.state;
    comments.splice(index, 1);
    this.setState({ comments });
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
          <CommentAdd addComment={this.addComment} />
          <CommentList comments={comments} deleteComment={this.deleteComment} />
        </div>
      </div>
    );
  }
}
