import React, { Component } from "react";
import PropTypes from "prop-types";

export default class CommentAdd extends Component {
  static propTypes = {
    addComment: PropTypes.func.isRequired,
  };

  state = {
    username: "",
    content: "",
  };

  handleNameChange = (event) => {
    const username = event.target.value;
    this.setState({ username });
  };

  handleContentChange = (event) => {
    const content = event.target.value;
    this.setState({ content });
  };

  handleSubmit = () => {
    //comment 等于一个对象
    const comment = this.state;
    this.props.addComment(comment);
    this.setState({ username: "", content: "" });
  };

  render() {
    return (
      <div>
        <div className="col-md-4">
          <form className="form-horizontal">
            <div className="form-group">
              <label>用户名</label>
              <input
                type="text"
                className="form-control"
                placeholder="用户名"
                onChange={this.handleNameChange}
              />
            </div>
            <div className="form-group">
              <label>评论内容</label>
              <textarea
                className="form-control"
                rows="6"
                placeholder="评论内容"
                onChange={this.handleContentChange}
              ></textarea>
            </div>
            <div className="form-group">
              <div className="col-sm-offset-2 col-sm-10">
                <button
                  type="button"
                  className="btn btn-default pull-right"
                  onClick={this.handleSubmit}
                >
                  提交
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
