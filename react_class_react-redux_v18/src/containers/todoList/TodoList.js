import "./TodoList.css";
import TodoItem from "../../components/todoItem/TodoItem";
import React, { Component } from "react";
import { connect } from "react-redux";
import {
  CHANGE_INPUT_VALUE,
  LIST_DELETE,
  SUBMIT,
} from "../../store/actionTypes";

class TodoList extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    const { inputValue, handlerInput, submitTodos } = this.props;

    return (
      <div className="container">
        <input value={inputValue} onChange={handlerInput} />
        <button onClick={submitTodos}>submit</button>
        {this.getTodoItem()}
      </div>
    );
  }

  getTodoItem() {
    const { todoList, handleDelete } = this.props;

    return todoList.map((item, index) => {
      return (
        <div key={index}>
          <TodoItem content={item} index={index} handleDelete={handleDelete} />
        </div>
      );
    });
  }
}

const mapStateToProps = (state) => state.todolistReducer;

const mapDispatchToProps = (dispatch) => {
  return {
    handlerInput(e) {
      const action = {
        type: CHANGE_INPUT_VALUE,
        value: e.target.value,
      };
      dispatch(action);
    },
    submitTodos() {
      const action = {
        type: SUBMIT,
      };
      dispatch(action);
    },
    handleDelete(index) {
      console.log(index);
      const action = {
        type: LIST_DELETE,
        value: index,
      };
      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
