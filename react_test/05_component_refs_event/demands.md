![2.gif](http://ww1.sinaimg.cn/large/005NUwyggy1gblx0bbntlg30fg09jjss.gif)

[refs](https://juejin.im/post/5c9d783cf265da60d0005390)

### 需求: 自定义组件, 功能说明如下:

1. 界面如页面所示
2. 点击按钮, 提示第一个输入框中的值
3. 当第 2 个输入框失去焦点时, 提示这个输入框中的值

###

1. 字符串形式的 ref

```
<input ref="input1"/>
```

2. 回调形式的 ref

```
<input ref={(c)=>{this.input1 = c}}/>
```

3. createRef 创建 ref 容器

```
myRef = React.createRef() 
<input ref={this.myRef}/>
```

### 事件处理

1. 通过 onXxx 属性指定事件处理函数(注意大小写)

- 1)React 使用的是自定义(合成)事件, 而不是使用的原生 DOM 事件
- 2)React 中的事件是通过事件委托方式处理的(委托给组件最外层的元素)

2. 通过 event.target 得到发生事件的 DOM 元素对象
