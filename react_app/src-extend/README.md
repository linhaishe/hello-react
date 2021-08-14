## 1. setState

### setState 更新状态的 2 种写法

(1). setState(stateChange, [callback])------**对象式的 setState**

1. stateChange 为状态改变对象(该对象可以体现出状态的更改)
2. callback 是可选的回调函数, 它在状态更新完毕、界面也更新后(render 调用后)才被调用

```js
this.setState({ count: count + 1 }, () => {
  console.log(this.state.count);
});
```

(2). setState(updater, [callback])------**函数式的 setState**

1. updater 为返回 stateChange 对象的函数。
2. updater 可以接收到 state 和 props。
3. callback 是可选的回调函数, 它在状态更新、界面也更新后(render 调用后)才被调用。
4. **对象式的 setState 是函数式的 setState 的简写方式(语法糖)**
5. 使用原则：

- (1).如果新状态不依赖于原状态 ===> 使用对象方式
- (2).如果新状态依赖于原状态 ===> 使用函数方式
- (3).如果需要在 setState()执行后获取最新的状态数据, 要在第二个 callback 函数中读取

```js
this.setState((state) => ({ count: state.count + 1 }));

//两次回调，第二次的方法是一个callback
this.setState(
  (state) => ({ count: state.count + 1 }),
  () => console.log(this.state.count)
);
```

```jsx
import React, { Component } from "react";

export default class Demo extends Component {
  state = { count: 0 };

  add = () => {
    //对象式的setState
    /* //1.获取原来的count值
		const {count} = this.state
		//2.更新状态
		this.setState({count:count+1},()=>{
			console.log(this.state.count);
		})
		//console.log('12行的输出',this.state.count); //0 */

    //函数式的setState
    this.setState(
      (state) => ({ count: state.count + 1 }),
      () => console.log(this.state.count)
    );
  };

  render() {
    return (
      <div>
        <h1>当前求和为：{this.state.count}</h1>
        <button onClick={this.add}>点我+1</button>
      </div>
    );
  }
}
```

---

## 2. lazyLoad

### 路由组件的 lazyLoad

作用：用的时候加载，不用的时候不加载。

1. 将所有懒加载的路由组件用`<Suspense>`包裹，并给一个 fallback，返回一个组件，因为懒加载时需要一个不是懒加载的组件，在懒加载组件之前去渲染未懒加载的组件。

```jsx
	//1.通过React的lazy函数配合import()函数动态加载路由组件 ===> 路由组件代码会被分开打包
	const Login = lazy(()=>import('@/pages/Login'))

	//2.通过<Suspense>指定在加载得到路由打包文件前显示一个自定义loading界面
	<Suspense fallback={<h1>loading.....</h1>}>
        <Switch>
            <Route path="/xxx" component={Xxxx}/>
            <Redirect to="/login"/>
        </Switch>
    </Suspense>
```

## 3. Hooks

#### 1. React Hook/Hooks 是什么?

- (1). Hook 是 React 16.8.0 版本增加的新特性/新语法
- (2). 可以让你在函数组件中使用 state 以及其他的 React 特性

#### 2. 三个常用的 Hook

- (1). State Hook: React.useState()
- (2). Effect Hook: React.useEffect()
- (3). Ref Hook: React.useRef()

#### 3. State Hook

`import React, { useState, useRef } from "react";`

- (1). State Hook 让函数组件也可以有 state 状态, 并进行状态数据的读写操作

- (2). 语法: const [xxx, setXxx] = useState(initValue)

- (3). useState()说明:

  - 参数: 第一次初始化指定的值在内部作缓存

  - 返回值: 包含 2 个元素的数组, 第 1 个为内部当前状态值, 第 2 个为更新状态值的函数

- (4). setXxx() 2 种写法:
  - setXxx(newValue): 参数为非函数值, 直接指定新的状态值, 内部用其覆盖原来的状态值
  - setXxx(value => newValue): 参数为函数, 接收原本的状态值, 返回新的状态值, 内部用其覆盖原来的状态值

#### 4. Effect Hook

1. Effect Hook 可以让你在函数组件中执行副作用操作(用于模拟类组件中的生命周期钩子)

2. React 中的副作用操作:

   - 发 ajax 请求数据获取
   - 设置订阅 / 启动定时器
   - 手动更改真实 DOM

3. 语法和说明:

```jsx
useEffect(() => {
  // 在此可以执行任何带副作用操作，这一段相当于 挂载 和 更新 两个生命周期
  return () => {
    // 在组件卸载前执行
    // 在此做一些收尾工作, 比如清除定时器/取消订阅等
  };
}, [stateValue]); // 如果指定的是[],一个空数组, 回调函数只会在第一次render()后执行
// [stateValue]如果不写，则默认监听所有状态，如果写的话只表明监听写入的那个状态
```

```jsx
//1. 第二个参数为空数组，表明不检测任何数据。只表明调用componentDidMount()，当需要任务在挂载的时候执行，不需要其他生命周期的时候执行时可用这个方法，比如请求数据的时候。如果需要监听别的数据更新时有别的功能，那么就写多个useEffect实现不同状态时候的功能
useEffect(() => {
  console.log("挂载时和更新时候调用");
  return function () {
    console.log("组件销毁时调用");
  };
}, []);

//如果第二个参数写入空数组,[],则回调函数只会在第一次render后执行，即只会输出"挂载时和更新时候调用",不会输出"组件销毁时调用",console.log("组件销毁时调用")只会在销毁的时候执行！！！！！！！！

//注意这里有使用到销毁的时候可以执行的方法，用上面的例子可以使东西在销毁的时候才执行。记得加空数组。

//传入第二个参数为[]，空数组的时候只表明调用componentDidMount()

//2. 第二个参数不传入，表明检测所有数据componentDidMount()，componentDidUpdate()这个两个函数。
useEffect(() => {
  console.log("挂载时和更新时候调用");
});

//不传入第二个参数即[]的时候，相当于react自动监听所有的数据。如果传入一个空数组，则表明谁也不检测。
//不传入第二个参数的时候调用componentDidMount()，componentDidUpdate()这个两个函数。

//3. 第二个参数传入数组，并写入数据，表明检测写入的数据的更新
const [count, setCount] = React.useState(0);
React.useEffect(() => {
  console.log("@");
}, [count]);

//传入的第二个参数数组中，写入需要监听的对象时，表明调用componentDidMount()，componentDidUpdate()这个两个函数。并在count数据更新是，调用回调函数。

//
React.useEffect(() => {
  //组件挂载时，和数据更新时
  let timer = setInterval(() => {
    setCount((count) => count + 1);
  }, 1000);
  return () => {
    //组件卸载时，做数据收尾工作，清除定时器等
    clearInterval(timer);
  };
}, []); //写入空数组
```

4. 可以把 useEffect Hook 看做如下三个函数的组合

- 1. componentDidMount()
- 2. componentDidUpdate()
- 3. componentWillUnmount()

#### 5. Ref Hook

1. Ref Hook 可以在函数组件中存储/查找组件内的标签或任意其它数据
2. 语法: const refContainer = useRef()
3. 作用:保存标签对象,功能与 React.createRef()一样

## 4. Fragment

### 使用

```jsx
<Fragment><Fragment>
<></>
```

### 作用

> 可以不用必须有一个真实的 DOM 根标签了,用于规避 jsx 语法必须输入跟标签的作用。

<hr/>

## 5. Context

useContent hooks

### 理解

> 一种组件间通信方式, 常用于【祖组件】与【后代组件】间通信

### 使用

1. 创建 Context 容器对象：
   `const XxxContext = React.createContext() `
   XxxContext 中有有两个标签：Provider & Consumer,可以通过结构赋值获取

   `const {Provider,Consumer} = XxxContext`

2. 渲染子组时，外面包裹 xxxContext.Provider, 通过 value 属性给后代组件传递数据：

   ```jsx
   <xxxContext.Provider value={数据}>子组件</xxxContext.Provider>;

   //如果通过结构赋值获取 provider 和 consumer就可以不用上面的写法
   const { Provider, Consumer } = XxxContext;
   //最大的组件里写上Provider，它里面包裹的都是它的子组件
   <Provider value={数据}>子组件</Provider>;

   //------------------------------------------------------------------

   //创建Context对象
   const MyContext = React.createContext();
   const { Provider, Consumer } = MyContext;
   export default class A extends Component {
     state = { username: "tom", age: 18 };

     render() {
       const { username, age } = this.state;
       return (
         <div className="parent">
           <h3>我是A组件</h3>
           <h4>我的用户名是:{username}</h4>
           <Provider value={{ username, age }}>
             <B />
           </Provider>
         </div>
       );
     }
   }
   ```

3. 后代组件读取数据：

```jsx
//第一种方式:仅适用于类组件
  static contextType = xxxContext  // 声明接收context
  this.context // 读取context中的value数据

//第二种方式: 函数组件与类组件都可以
  <xxxContext.Consumer>
    {
      value => ( // value就是context中的value数据
   							 //可以返回模版字符串，也可以返回标签
    							//{value => `${value.username},年龄是${value.age}`}
        要显示的内容
      )
    }
  </xxxContext.Consumer>

//如果开头解构之后可以这么写
//const {Provider,Consumer} = MyContext
<Consumer>
    {
      value => ( // value就是context中的value数据
   							 //可以返回模版字符串，也可以返回标签
    						 //{value => `${value.username},年龄是${value.age}`}
        要显示的内容
      )
    }
</Consumer>
```

```jsx
//类式组件需要声明接收context
class C extends Component {
  //声明接收context
  static contextType = MyContext;
  render() {
    const { username, age } = this.context;
    return (
      <div className="grand">
        <h3>我是C组件</h3>
        <h4>
          我从A组件接收到的用户名:{username},年龄是{age}
        </h4>
      </div>
    );
  }
}

//函数组件不需要声明，只需要通过Consumer组件容器接收参数即可
function C() {
  return (
    <div className="grand">
      <h3>我是C组件</h3>
      <h4>
        我从A组件接收到的用户名:
        <Consumer>{(value) => `${value.username},年龄是${value.age}`}</Consumer>
      </h4>
    </div>
  );
}
```

3. 函数组件使用 useContext

```jsx
import { createContext, useState, useContext } from "react";
const ContextAPI = createContext();
let Demo2 = () => {
  const context = useContext(ContextAPI);
  return (
    <div>
      我是demo2-{context.state.a}
      <button
        onClick={() => {
          context.setA(5);
        }}
      >
        改变
      </button>
    </div>
  );
};
let Demo1 = () => {
  const context = useContext(ContextAPI);
  return (
    <div>
      我是demo1-{context.state.b}---{context.state.a}
      <Demo2 />
    </div>
  );
};
function Context() {
  const [a, setA] = useState(1);
  const b = 2;

  return (
    <ContextAPI.Provider value={{ state: { a, b }, setA }}>
      <div>
        <h1>函数式组件</h1>
        <Demo1></Demo1>
      </div>
    </ContextAPI.Provider>
  );
}
export default Context;
```

### 注意

    在应用开发中一般不用context, 一般都用它的封装react插件

### 封装

跨页面跨组件使用，上面的方法只适用于一个文件内的不同组件数据传递。我们需要把 contextProvider 进行封装，使得别的组件都可以使用。需要传的 store 状体的管理

```jsx
//store.js
//创建store文件夹，写入一个store.js 文件

import React, { Component, createContext } from "react";

//创建上下文文本库，用于控制store
const Context = createContext();

export default class ProviderComponent extends Component {
  constructor() {
    super();
    this.state = {
      a: 1,
      b: 2,
    };
  }

  changeA = (a) => {
    this.setState({ a });
  };

  changeB = (b) => {
    this.setState({ b });
  };

  render() {
    return (
      <Context.Provider
        value={{
          state: this.state,
          changeA: this.changeA,
          changeB: this.changeB,
        }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

export { ProviderComponent, Context };
```

```jsx
//app.js
import React from "react";
import { ProviderComponent } from "../../store";
import Login from "../login/Login";

export default function App() {
  return (
    <ProviderComponent>
      <Login />
    </ProviderComponent>
  );
}
```

```jsx
//login.jsx
import React, { useContext } from "react";
import { Context } from "../../store";

export default function Login() {
  const context = useContext(Context);
  return (
    <div>
      login page
      <span>data from providecomponent:{context.state.a}</span>
      <button
        onClick={() => {
          context.changeA(10);
        }}
      ></button>
    </div>
  );
}
```

<hr/>

## 6. 组件优化

### Component 的 2 个问题

> 1. 只要执行 setState(),即使不改变状态数据, 组件也会重新 render() ==> 效率低
>
> 2. 只当前组件重新 render(), 就会自动重新 render 子组件，纵使子组件没有用到父组件的任何数据 ==> 效率低

### 效率高的做法

> 只有当组件的 state 或 props 数据发生改变时才重新 render()

### 原因

> Component 中的 shouldComponentUpdate()总是返回 true

### 解决

1. 办法 1:
   - 重写 shouldComponentUpdate()方法
   - 比较新旧 state 或 props 数据, 如果有变化才返回 true, 如果没有返回 false
2. 办法 2:
   - 使用 PureComponent
     PureComponent 重写了 shouldComponentUpdate(), 只有 state 或 props 数据有变化才返回 true
   - 注意:
     只是进行 state 和 props 数据的浅比较, 如果只是数据对象内部数据变了, 返回 false
     不要直接修改 state 数据, 而是要产生新数据
     项目中一般使用 PureComponent 来优化

<hr/>

## 7. render props

### 如何向组件内部动态传入带内容的结构(标签)?

1. Vue 中:
   - 使用 slot 技术, 也就是通过组件标签体传入结构 <A><B/></A>
2. React 中:
   - 使用 children props: 通过组件标签体传入结构
   - 使用 render props: 通过组件标签属性传入结构,而且可以携带数据，一般用 render 函数属性

### children props

```jsx
let A = () => {
  return (
    <div>
      这是A组件
      {/*写入 {this.props.children}才能获取hello内容，因为hello属于标签属性，会通过children进行传递*/}
      {this.props.children}
    </div>
  );
};

//父组件 App

export default function test() {
  return (
    <div>
      <A>hello</A>
    </div>
  );
}

//问题: 如果B组件需要A组件内的数据, ==> 做不到
```

### render props

```jsx
<A render={(data) => <C data={data}></C>}></A>
//A组件: {this.props.render(内部state数据)}
//C组件: 读取A组件传入的数据显示 {this.props.data}
```

```jsx
import React, { Component } from "react";
import "./index.css";
import C from "../1_setState";

export default class Parent extends Component {
  render() {
    return (
      <div className="parent">
        <h3>我是Parent组件</h3>
        {/*在组件A中写入一个回调函数，返回一个组件，并给组件传值，类似一个插槽的形式，形成父子关系组件*/}
        <A render={(name) => <B name={name} />} />
      </div>
    );
  }
}

class A extends Component {
  state = { name: "tom" };
  render() {
    console.log(this.props);
    const { name } = this.state;
    return (
      <div className="a">
        <h3>我是A组件</h3>
        {/*通过获取render函数，并给子组件传值*/}
        {this.props.render(name)}
      </div>
    );
  }
}

class B extends Component {
  render() {
    console.log("B--render");
    return (
      <div className="b">
        <h3>我是B组件,{this.props.name}</h3>
      </div>
    );
  }
}
```

<hr/>

## 8. 错误边界

#### 理解：

错误边界(Error boundary)：用来捕获后代组件错误，渲染出备用页面，目的是不让子组件的错误影响父组件的呈现。

只会在生产环境中起作用，开发环境只能出现一下，并随后消失。

错误边界始终去找出错误的父组件去处理的。

#### 特点：

只能捕获**后代组件 ** **生命周期**产生的错误，不能捕获自己组件产生的错误和其他组件在合成事件、定时器中产生的错误

##### 使用方式：

getDerivedStateFromError 配合 componentDidCatch

```js
// 生命周期函数，一旦后台组件报错，就会触发
static getDerivedStateFromError(error) {
    console.log(error);
    // 在render之前触发
    // 返回新的state
    return {
        hasError: true,
    };
}

componentDidCatch(error, info) {
    // 一般统计页面的错误次数。发送请求发送到后台去，反馈给后台服务器，进行bug解决
    console.log(error, info);
}
```

## 9. 组件通信方式总结

#### 组件间的关系：

- 父子组件
- 兄弟组件（非嵌套组件）
- 祖孙组件（跨级组件）

#### 几种通信方式：

    	1.props：
    		(1).children props
    		(2).render props
    	2.消息订阅-发布：
    		pubs-sub、event等等
    	3.集中式管理：
    		redux、dva等等
    	4.conText:
    		生产者-消费者模式

#### 比较好的搭配方式：

    	父子组件：props
    	兄弟组件：消息订阅-发布、集中式管理
    	祖孙组件(跨级组件)：消息订阅-发布、集中式管理、conText(开发用的少，封装插件用的多)

## 10. 路由

根据 hash 值进行组件切换

1. hash #xxx onhashchange 当 hash 发生改变的时候
2. history /xxx/xxx onpopstate 当浏览器记录发生改变的时候

```
import {useEffect,useState} from 'react';

let Home=()=><div>首页</div>;
let List=()=><div>列表</div>;
let My=()=><div>我的</div>;

function MyRouter() {
    let RouterView;
    let [hashState,setHashState]=useState('#/home');

    useEffect(()=>{
        window.addEventListener('hashchange',()=>{
            console.log(window.location.hash)
            setHashState(window.location.hash);

        },false)
    },[])

    switch(hashState){
        case '#/home':
            RouterView=<Home/>;
            break;
        case '#/list':
            RouterView=<List/>;
            break;
        case '#/my':
            RouterView=<My/>;
            break;
    }
    return (
        <div>
            <h1>我的路由</h1>
            <ul>
                <li><a href="#/home">首页</a></li>
                <li><a href="#/list">列表</a></li>
                <li><a href="#/my">我的</a></li>
            </ul>
            {RouterView}
        </div>
    )
}

export default MyRouter
```

#### useParams

获取路由参数

动态路由

```jsx
import { HashRouter, Link, Route, Switch, useParams } from "react-router-dom";
import "./router.css";
let Router = () => {
  let { id, order } = useParams();
  console.log(id, order);
  return (
    <div>
      我是要展示的内容---{id}---{order}
    </div>
  );
};

function ReactRouter() {
  return (
    <div>
      <HashRouter>
        <h1>reactRouter</h1>
        <ul>
          <li>
            <Link to="/home/1">home</Link>
          </li>
          <li>
            <Link to="/list/2">list</Link>
          </li>
          <li>
            <Link to="/my/3">my</Link>
          </li>
        </ul>
        <Switch>
          <Route exact path="/:id/:order">
            <Router />
          </Route>
        </Switch>
      </HashRouter>
    </div>
  );
}

export default ReactRouter;
```

#### useRouteMatch

嵌套路由,匹配路径

```jsx
import {
  HashRouter,
  Link,
  Route,
  Switch,
  useParams,
  useRouteMatch,
  Redirect,
} from "react-router-dom";
import "./router.css";
let Order = () => <div>我的订单</div>;
let History = () => <div>我的足迹</div>;
let Collect = () => <div>我的收藏</div>;

let Home = () => <div>首页</div>;
let List = () => <div>列表</div>;

let My = () => {
  let { path, url } = useRouteMatch();
  console.log(path, url);
  return (
    <div>
      <h1>我的页面</h1>
      <ol>
        <li>
          <Link to={`${url}/order`}>我的订单</Link>
        </li>
        <li>
          <Link to="/my/history">我的足迹</Link>
        </li>
        <li>
          <Link to="/my/collect">我的收藏</Link>
        </li>
      </ol>
      <Switch>
        <Route path={`${path}/order`}>
          <Order />
        </Route>
        <Route path="/my/history">
          <History />
        </Route>
        <Route path="/my/collect">
          <Collect />
        </Route>
      </Switch>
    </div>
  );
};

function ReactRouter() {
  return (
    <div>
      <HashRouter>
        <h1>reactRouter</h1>
        <ul>
          <li>
            <Link to="/home">home</Link>
          </li>
          <li>
            <Link to="/list">list</Link>
          </li>
          <li>
            <Link to="/my">my</Link>
          </li>
        </ul>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/list">
            <List />
          </Route>
          <Route path="/my">
            <My />
          </Route>
        </Switch>
      </HashRouter>
    </div>
  );
}

export default ReactRouter;
```

#### useHistory

```jsx
import React from "react";
import { useHistory } from "react-router-dom";

export default function About(props) {
  let history = useHistory();
  console.log("这是about组件收到的props", props);
  let goHome = () => {
    history.push("/home");
  };
  return (
    <div>
      About组件内容 &nbsp;
      <button onClick={goHome}>回Home主页</button>
    </div>
  );
}
```

#### useLocation

```jsx
import {
  HashRouter,
  Link,
  Route,
  Switch,
  useParams,
  useRouteMatch,
  BrowserRouter,
  NavLink,
  Redirect,
  useHistory,
  useLocation,
} from "react-router-dom";

let Home = () => {
  let history = useHistory();
  let location = useLocation();
  console.log(url2json(location.search).a);
  let goList = () => {
    history.push({ pathname: "/list" });
  };
  let goMy = () => {
    history.goBack();
  };

  return (
    <div>
      <h1>首页</h1>
      <button onClick={goList}>去列表页</button>
      <button onClick={goMy}>返回</button>
    </div>
  );
};

function ReactRouter() {
  return (
    <div>
      <BrowserRouter>
        <h1>reactRouter</h1>
        <ul>
          <li>
            <Link to="/home?a=1">home</Link>
          </li>
          <li>
            <Link to={{ pathname: "/list", search: "?b=2" }}>list</Link>
          </li>
          <li>
            <Link to="/my">my</Link>
          </li>
        </ul>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/list">
            <List />
          </Route>
          <Route path="/my">
            <My />
          </Route>
          <Route path="*">
            <Error />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default ReactRouter;
```

## 11. Mobx

状态管理，有其他的状态管理，如 redux

和原生的 react 内容中的 context 的区别在于，多了一些计算属性的动能

Links: https://mobx.js.org/observable-state.html

```
npm i mobx
npm i mobx-react
(maybe)
```

```js
import { makeAutoObservable } from "mobx"; //管理数据state
import { observer } from "mobx-react"; //促使页面更新,动态的改变页面的状态
```

```jsx
//for stroe index.js
//class 类的用法
import { makeObservable, observable, computed, action, flow } from "mobx";

class Doubler {
  value;

  constructor(value) {
    makeObservable(this, {
      value: observable,
      double: computed,
      increment: action,
      fetch: flow,
    });
    //传入this，用于改变this的指向
    this.value = value;
  }

  a = 1;
  b = 2;

  addA() {
    this.a++;
  }

  changeB(b) {
    this.b = b;
  }
  // computed 计算属性，需要在前面加一个get属性
  get sum() {
    return this.a + this.b;
  }
  get double() {
    return this.value * 2;
  }

  increment() {
    this.value++;
  }

  *fetch() {
    //用于异步
    const response = yield fetch("/api/value");
    this.value = response.json();
  }
}

const store = new Doubler();
export default store;
//数据到处给app用
```

```jsx
//app index.jsx
import React from "react";
import store from "../../store";
import Login from "../login/Login";

const context = createContext();
function App() {
  return (
    <context.Provider value={store}>
      <Login />
    </context.Provider>
  );
}

export default App;
export { Context };
```

```jsx
//login.jsx
import React, { useContext } from "react";
import { Context } from "../app/App";
import { Observer } from "mobx-react";
//如果数据需要动态渲染，那么需要动态渲染的数据就需要用Observer包裹起来

export default function Login() {
  const context = useContext(Context);
  console.log(context);
  return (
    <Observer>
      {() => (
        <div>
          login page
          <span>data from store:{context.a}</span>
          <span>data from store:{context.b}</span>
          <span>data from store:{context.sum}</span>
          <button
            onClick={() => {
              context.addA(10);
            }}
          ></button>
        </div>
      )}
    </Observer>
  );
}
```
