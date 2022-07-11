import React, { Component } from "react";

class TodoItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { content, index, handleDelete } = this.props;

    return (
      <div>
        <ul>
          <li onClick={() => handleDelete(index)}>{content}</li>
        </ul>
      </div>
    );
  }
}

export default TodoItem;
