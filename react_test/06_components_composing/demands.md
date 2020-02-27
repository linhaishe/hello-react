![Xnip2020-02-05_22-32-18.png](http://ww1.sinaimg.cn/large/005NUwyggy1gblwibqzgxj30oy0meakp.jpg)
![Xnip2020-02-05_22-32-58.png](http://ww1.sinaimg.cn/large/005NUwyggy1gblwibrkw4j30ts0n8k56.jpg)

功能: 组件化实现此功能

    1. 显示所有todo列表
    2. 输入文本, 点击按钮显示到列表的首位, 并清除输入的文本

    q1:处理动态数据时，数据保存在哪个组件内
    1.名称，类型要确定好
    2.判断某个组件需要还是某些组件需要
    3.某个需要则放在需要数据的组件内
    4.某些组件需要则放在共同的父组件内

    q2:需要在子组件中改变父组件的状态
    子组件不能直接改变父组件的状态
    状态在哪个组件，更新状态的行为就应该定义在哪个组件
    解决方案 ：父组件定义函数，传递给子组件，子组件调用

![3.gif](http://ww1.sinaimg.cn/large/005NUwyggy1gblx5infxzg30bj07ojs2.gif)

## 笔记

1. 分解整个组件的功能，先把 html 的框架搭出来。
2. todolist 的组件分三部分，父组件 app + content(add) + list
3. list 组件接收 todos 参数，且遍历 todos 数组并产生 dom 元素
4. content 组件

   - 接收表单参数，即接收输入框输入的内容，ref 非受控组件操作，也可用受控组件操作

   - 点击交互，提交输入内容 add Function

5. 父 App 组件，addTodo Function，因为表单数据两个子组件都需要，则写在父组件中，再传递给子组件
6. 使用 PropTypes 进行类型检查，组件中只要传参，则需要进行类型检查。

P.S.

1. ref,为非受控组件，作用为收集用户传递的数据。
2. props 属性，某值作为参数在组件中进行传递时，会存储在 props 属性中，可以通过 this.props.值，进行获取。

```jsx
this.state = {
  todos: ["cleaning", "sleeping", "running"]
};

<List todos={this.state.todos} />;

const { todos } = this.props;
```
