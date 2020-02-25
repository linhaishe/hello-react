/*
应用组件
 */
import React, { Component } from "react";
import PropTypes from "prop-types";
//引入这个模块里面的所有子模块
//分别暴露
// import {increment, decrement} from '../redux/actions'

import * as actions from "../redux/actions";



export default class App extends Component {

  //状态交给redux管理了
// state = {
//   count:0
// }

  static propTypes = {
    store: PropTypes.object.isRequired
  };

  increment = () => {
    const number = this.refs.numSelect.value * 1;
    //调用store的方法更新状态，因为状态的方法在Reducer里
    // this.props.store.dispatch({type:increment,data:number})
    this.props.store.dispatch(actions.increment(number));
  };

  decrement = () => {
    const number = this.refs.numSelect.value * 1;
    // this.props.store.dispatch({type:decrement,data:number})
    this.props.store.dispatch(actions.decrement(number));
  };

  incrementIfOdd = () => {
    const number = this.refs.numSelect.value * 1;
    //得到count getstate的方法
    let count = this.props.store.getState();
    if (count % 2 === 1) {
      // this.props.store.dispatch({type:increment,data:number})

      this.props.store.dispatch(actions.increment(number));
    }
  };

  incrementAsync = () => {
    const number = this.refs.numSelect.value * 1;
    setTimeout(() => {
      // this.props.store.dispatch({type:increment,data:number})

      this.props.store.dispatch(actions.increment(number));
    }, 1000);
  };

  render() {
    // 取值失败
    // const {count} = this.props.store.getState()
    // 取值成功
    const count = this.props.store.getState()

    return (
      <div>
        <p>click {count} times </p>
        {/* 不会DEBUGGER */}
        {/* debugger */}
        {/* <p>click {this.props.store.getState()} times </p> */}
        <select ref="numSelect">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>{" "}
        <button onClick={this.increment}>+</button>{" "}
        <button onClick={this.decrement}>-</button>{" "}
        <button onClick={this.incrementIfOdd}>increment if odd</button>{" "}
        <button onClick={this.incrementAsync}>increment async</button>
      </div>
    );
  }
}
