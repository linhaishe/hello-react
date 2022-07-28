import "./TodoList.css";
import React, { Component } from "react";
import { Input, Button, List } from "antd";
import store from "../../store";
import { CHANGE_INPUT_VALUE, SUBMIT } from "../../store/actionTypes";
import {
  getAddItemAction,
  getInputChangeAction,
} from "../../store/actionCreators";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleStoreChange = this.handleStoreChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    //订阅store， 如果store数据修改则会出发函数
    store.subscribe(this.handleStoreChange);
  }

  render() {
    return (
      <div className="container">
        <div>
          <Input
            placeholder="Basic usage"
            style={{ width: "300px", marginRight: "30px" }}
            value={this.state.todolistReducer.inputValue}
            onChange={this.handleInputChange}
          />
          <Button type="primary" onClick={this.handleClick}>
            Submit
          </Button>
        </div>
        <List
          className="list"
          bordered
          dataSource={this.state.todolistReducer.data}
          renderItem={(item) => <List.Item>{item}</List.Item>}
        />
      </div>
    );
  }

  handleInputChange(e) {
    const action = getInputChangeAction(e.target.value);
    store.dispatch(action);
  }

  handleStoreChange() {
    this.setState(store.getState());
  }

  handleClick() {
    store.dispatch(getAddItemAction());
  }
}

export default TodoList;
