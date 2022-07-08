import React, { Component } from "react";
import PropTypes from "prop-types";
import PubSub from "pubsub-js";
//引入文件和第三方引入空格区分

import "./commentItem.css";

export default class CommentItem extends Component {
  static propTypes = {
    comment: PropTypes.object.isRequired,
    // deleteComment: PropTypes.array.isRequired,
    index: PropTypes.number.isRequired
  };

  handleClick = () => {
    // deleteComment
    const { comment, index } = this.props;
    //提示
    if (window.confirm(`确定删除${comment.username}的评论吗`)) {
      //确定后删除
      // deleteComment(index);
      //发布消息，发生事件的地方才需要发布消息
      //如果要传送多个数据，则封装成对象
      PubSub.publish("deleteComment", index);
    }
  };
  render() {
    const { comment } = this.props;
    return (
      <li className="list-group-item">
        <div className="handle">
          <a href="javascript:;" onClick={this.handleClick}>
            删除
          </a>
        </div>
        <p className="user">
          <span>{comment.username}</span>
          <span>说:</span>
        </p>
        <p className="centence">{comment.content}</p>
      </li>
    );
  }
}
