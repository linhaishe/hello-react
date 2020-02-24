import React, { Component } from "react";

export default class App extends Component {
  state = {
    count: 0
  };

  increment = () => {
    //1.得到选择框里的增加数量
    const num = this.refs.numSelect.value * 1;
    //2.得到原本count状态
    const count = this.state.count + num;
    //3.更新状态
    this.setState({ count });
  };

  decrement = () => {
    const num = this.refs.numSelect.value * 1;
    const count = this.state.count - num;
    this.setState({ count });
  };

  incrementIfOdd = () => {
    let count = this.state.count;
    //判断，满足条件才更新状态
    if (count % 2 == 1) {
      const num = this.refs.numSelect.value * 1;
      count += num;
      this.setState({ count });
    }
  };

  incrementAsync = () => {
    setTimeout(() => {
      const num = this.refs.numSelect.value * 1;
      const count = this.state.count + num;
      //启动延时定时器
      this.setState({ count });
    }, 1000);
  };

  render() {
    const { count } = this.state;

    return (
      <div>
        <p>click {count} times </p>
        {/* 有两种处理方法，受控组件和非受控组件，此处用非受控组件处理 */}
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
