![react-redux模型图.png](http://ww1.sinaimg.cn/large/005NUwyggy1gt4z7z08hhj60vf0hnwjn02.jpg)
![react生命周期(旧).png](http://ww1.sinaimg.cn/large/005NUwyggy1gt4z7ywsecj60nd0imq6k02.jpg)
![react生命周期(新).png](http://ww1.sinaimg.cn/large/005NUwyggy1gt4z7yz5z4j60vh0lwgqt02.jpg)
![redux原理图.png](http://ww1.sinaimg.cn/large/005NUwyggy1gt4z7z98z3j60zk0k078s02.jpg)

### 第四张原理图

redux 原理图

### src-count1_react

此文件是使用原生的 react 写出的加减法运算 demo

### src-count2_redux

此文件是使用 redux 写出的加减法运算 demo

## 1.求和案例\_redux 精简版

1. 去除 Count 组件自身的状态
2. src 下建立:

```
- redux
    -store.js
    -count_reducer.js
```

3. .store.js：

   - 引入 redux 中的 createStore 函数，创建一个 store;因为我们通过 redux 存储状态，所以我们需要通过 redux 创建 store

   - createStore 调用时要传入一个为其服务的 reducer

   - 记得暴露 store 对象

4. count_reducer.js：

- reducer 的本质是一个函数，接收：preState,action，返回加工后的状态
- reducer 有两个作用：初始化状态，加工状态
- reducer 被第一次调用时，是 store 自动触发的，
  传递的 preState 是 undefined,
  传递的 action 是:{type:'@@REDUX/INIT_a.2.b.4}
- redux 只负责管理状态，不管理渲染，所以状态改变之后需要通过 store.subscribe(render);进行状态监听，实时状态更新渲染

5. 在 index.js 中监测 store 中状态的改变，一旦发生改变重新渲染<App/>
   备注：redux 只负责管理状态，至于状态的改变驱动着页面的展示，要靠我们自己写。

## 2.求和案例\_redux 完整版

新增文件：

1. count_action.js 专门用于创建 action 对象
2. constant.js 放置容易写错的 type 值

## 3.求和案例\_redux 异步 action 版

1. 明确：延迟的动作不想交给组件自身，想交给 action
2. 何时需要异步 action：想要对状态进行操作，但是具体的数据靠异步任务返回。
3. 具体编码：

- yarn add redux-thunk，并配置在 store 中
- 创建 action 的函数不再返回一般对象，而是一个函数，该函数中写异步任务。
- 异步任务有结果后，分发一个同步的 action 去真正操作数据。

4. 备注：异步 action 不是必须要写的，完全可以自己等待异步任务的结果了再去分发同步 action。

## 4.求和案例\_react-redux 基本使用

1. 明确两个概念：

- 1).UI 组件:不能使用任何 redux 的 api，只负责页面的呈现、交互等。放在 components 文件夹里
- 2).容器组件：负责和 redux 通信，将结果交给 UI 组件。放在 containers 文件夹里

2. 如何创建一个容器组件————靠 react-redux 的 connect 函数。
   容器组件不能自己 rcc 创建，靠 react-redux 的 connect 函数。
   connect(mapStateToProps,mapDispatchToProps)(UI 组件)

- mapStateToProps:映射状态，返回值是一个对象
- mapDispatchToProps:映射操作状态的方法，返回值是一个对象

3. 备注 1：容器组件中的 store 是靠 props 传进去的，而不是在容器组件中直接引入
4. 备注 2：mapDispatchToProps，也可以是一个对象

## 5.求和案例\_react-redux 优化

    		(1).容器组件和UI组件整合一个文件
    		(2).无需自己给容器组件传递store，给<App/>包裹一个<Provider store={store}>即可。
    		(3).使用了react-redux后也不用再自己检测redux中状态的改变了，容器组件可以自动完成这个工作。
    		(4).mapDispatchToProps也可以简单的写成一个对象
    		(5).一个组件要和redux“打交道”要经过哪几步？
    						(1).定义好UI组件---不暴露
    						(2).引入connect生成一个容器组件，并暴露，写法如下：
    								connect(
    									state => ({key:value}), //映射状态
    									{key:xxxxxAction} //映射操作状态的方法
    								)(UI组件)
    						(4).在UI组件中通过this.props.xxxxxxx读取和操作状态

## 6.求和案例\_react-redux 数据共享版

    		(1).定义一个Pserson组件，和Count组件通过redux共享数据。
    		(2).为Person组件编写：reducer、action，配置constant常量。
    		(3).重点：Person的reducer和Count的Reducer要使用combineReducers进行合并，
    				合并后的总状态是一个对象！！！
    		(4).交给store的是总reducer，最后注意在组件中取出状态的时候，记得“取到位”。

## 7.求和案例\_react-redux 开发者工具的使用

    		(1).yarn add redux-devtools-extension
    		(2).store中进行配置
    				import {composeWithDevTools} from 'redux-devtools-extension'
    				const store = createStore(allReducer,composeWithDevTools(applyMiddleware(thunk)))

## 8.求和案例\_react-redux 最终版

    		(1).所有变量名字要规范，尽量触发对象的简写形式。
    		(2).reducers文件夹中，编写index.js专门用于汇总并暴露所有的reducer
