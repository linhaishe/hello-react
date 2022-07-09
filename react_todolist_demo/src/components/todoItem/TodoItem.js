import React from "react";

const TodoItem = (props) => {
  const { content, index, handleDelete } = props;

  return (
    <div>
      <ul>
        <li onClick={() => handleDelete(index)}>{content}</li>
      </ul>
    </div>
  );
};

export default TodoItem;
