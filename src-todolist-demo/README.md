1. 文档主要内容 shangguigu todo list demo
2. webpack (样式) 热加载
3. 文档链接 ：https://webpack.docschina.org/guides/hot-module-replacement/
4. react hot loader (js 热加载)
5. refs : https://github.com/gaearon/react-hot-loader
6. refs: https://www.npmjs.com/package/react-hot-loader

## notes:

### src-todolist-demo

如果需要事件传参，那么 onClick 等方法里面需要用到高阶函数，不然就只是进行返回值的赋值，没有进行函数调用。
有两种方法结局 jsx 标签内函数调用和传参

1. 使用箭头函数

```
<button onClick={()=> this.handleDelete(id) } className="btn btn-danger" style={{display:mouse?'block':'none'}}>删除</button>
```

2. 使用高阶函数

```
<input type="checkbox" checked={done} onChange={this.handleCheck(id)}/>

	//勾选、取消勾选某一个todo的回调
	handleCheck = (id)=>{
		return (event)=>{
			this.props.updateTodo(id,event.target.checked)
		}
	}
```

## 一、todoList 案例相关知识点

    	1.拆分组件、实现静态组件，注意：className、style的写法
    	2.动态初始化列表，如何确定将数据放在哪个组件的state中？
    				——某个组件使用：放在其自身的state中
    				——某些组件使用：放在他们共同的父组件state中（官方称此操作为：状态提升）
    	3.关于父子之间通信：
    			1.【父组件】给【子组件】传递数据：通过props传递
    			2.【子组件】给【父组件】传递数据：通过props传递，要求父提前给子传递一个函数
    	4.注意defaultChecked 和 checked的区别，类似的还有：defaultValue 和 value
    	5.状态在哪里，操作状态的方法就在哪里
