import React, { Component } from "react";
import PropTypes from "prop-types";

class TodoItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { content, index, handleDelete, test } = this.props;

    return (
      <div>
        <ul>
          <li onClick={() => handleDelete(index)}>
            {test} - {content}
          </li>
        </ul>
      </div>
    );
  }
}

TodoItem.propTypes = {
  test: PropTypes.string.isRequired,
  content: PropTypes.string,
  index: PropTypes.number,
  handleDelete: PropTypes.func,
};

TodoItem.defaultProps = {
  test: "hello-world",
};

export default TodoItem;
