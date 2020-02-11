import React, { Component } from "react";

// 下载prop-types包，这个包默认是没有下载的，需要下载后再引入

// react_app git:(master) ✗ npm install --save prop-types
import PropTypes from "prop-types";

import CommentItem from "../comment-item/comment-item";
import "./commentList.css";

export default class CommentList extends Component {
  //单单这样添加是给组件对象进行添加，区分组件类和组件对象，我们需要的是给组件类添加对象，而不是组件
  //propTypes = {
  //   comments: PropTypes.array.isRequired
  // };

  //用static 给组件类指定属性
  static propTypes = {
    comments: PropTypes.array.isRequired
  };

  render() {
    const { comments } = this.props;
    return (
      <div className="col-md-8">
        <h3 className="reply">评论回复：</h3>
        {/*注意style的写法,display: none,这样写的话，none就是变量，必须加引号。*/}
        <h2 style={{ display: "none" }}>暂无评论，点击左侧添加评论！！！</h2>
        <ul className="list-group">
          {comments.map((c, index) => (
            <CommentItem comment={c} key={index} />
          ))}
        </ul>
      </div>
    );
  }
}

// CommentList.propTypes = {
//   comments: PropTypes.array.isRequired
// };
//有另外更简单的方法,static 指定
