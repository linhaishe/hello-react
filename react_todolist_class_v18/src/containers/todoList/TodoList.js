import { useState } from "react";
import "./TodoList.css";
import TodoItem from "../../components/todoItem/TodoItem";

import React, { Component } from "react";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      todoList: [],
    };
    this.handleDelete = this.handleDelete.bind(this);
    this.handlerInput = this.handlerInput.bind(this);
    this.submitTodos = this.submitTodos.bind(this);
  }
  render() {
    const { inputValue } = this.state;

    return (
      <div className="container">
        <input value={inputValue} onChange={this.handlerInput} />
        <button onClick={this.submitTodos}>submit</button>
        {this.getTodoItem()}
      </div>
    );
  }

  handlerInput(e) {
    console.log("target", e.target.value);
    const inputValue = e.target.value;
    // 用箭头函数更新数据，提升性能
    this.setState(() => inputValue);
  }

  getTodoItem() {
    const { todoList } = this.state;

    return todoList.map((item, index) => {
      return (
        <div key={index}>
          <TodoItem
            content={item}
            index={index}
            handleDelete={this.handleDelete}
          />
        </div>
      );
    });
  }

  submitTodos() {
    const { inputValue, todoList } = this.state;
    let todos = [...todoList, inputValue];
    this.setState({
      todoList: todos,
      inputValue: "",
    });
  }

  handleDelete(index) {
    const { todoList } = this.state;
    const list = [...todoList];
    list.splice(index, 1);
    this.setState({
      todoList: list,
    });
  }
}

export default TodoList;
