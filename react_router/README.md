## 第 5 章：React 路由

1. 下载 react-router-dom: npm install --save react-router-dom

### 5.1. 相关理解

#### 5.1.1. SPA 的理解

1. 单页 Web 应用（single page web application，SPA）。
2. 整个应用只有一个完整的页面。
3. 点击页面中的链接不会刷新页面，只会做页面的局部更新。
4. 数据都需要通过 ajax 请求获取, 并在前端异步展现。

#### 5.1.2. 路由的理解

##### 1.什么是路由?

1. 一个路由就是一个映射关系(key:value)

2. key 为路径, value 可能是 function 或 component

##### 2.路由分类

- 1.后端路由：

1. 理解： value 是 function, 用来处理客户端提交的请求。
2. 注册路由：` router.get(path, function(req, res))`
3. 工作过程：当 node 接收到一个请求时, 根据请求路径找到匹配的路由, 调用路由中的函数来处理请求, 返回响应数据

- 2.前端路由：

1. 浏览器端路由，value 是 component，用于展示页面内容。
2. 注册路由: `<Route path="/test" component={Test}> `
   3。 工作过程：当浏览器的 path 变为/test 时, 当前路由组件就会变为 Test 组件

#### 5.1.3. react-router-dom 的理解

1. react 的一个插件库。
2. 专门用来实现一个 SPA 应用。
3. 基于 react 的项目基本都会用到此库。

#### 5.2. react-router-dom 相关 API

#### 5.2.1. 内置组件

1. `<BrowserRouter>`
   所有的路由都由一个路由器控制，即整个 app 应用中，只需要一个路由器去控制即可。
   有两种路由，BrowserRouter，HashRouter，按情况使用其中一种路由即可。为了方便，将路由包裹在根组件入口文件的地方。
   ```
   ReactDOM.render(
   //一旦用了router,必须用路由组件包裹起来，用路由组件管理整个应用
   <BrowserRouter>
    <App />
   </BrowserRouter>,
   /*<HashRouter>
      <App />
    </HashRouter>*/
   document.getElementById("root")
   );
   ```

```
2. `<HashRouter>`
3. `<Route>`
4. `<Redirect>`
5. `<Link>`
6. `<NavLink>`
7. `<Switch>`
```

Link 按钮

to="/xxx" to={``} to={{}}

```
          to={{
                pathname: "/courses",
                search: "?sort=name",
                hash: "#the-hash",
                state: { fromDashboard: true }
          }}
```

### 5.2.2. 其它

1. history 对象
2. match 对象
3. withRouter 函数

### 三、路由的基本使用

1. 明确好界面中的导航区、展示区
2. 导航区的 a 标签改为 Link 标签
   `<Link to="/xxxxx">Demo</Link>`
3. 展示区写 Route 标签进行路径的匹配
   `<Route path='/xxxx' component={Demo}/>`
4. <App>的最外侧包裹了一个<BrowserRouter>或<HashRouter>

```
export default class App extends Component {
	render() {
		return (
			<div>
				<div className="row">
					<div className="col-xs-offset-2 col-xs-8">
						<div className="page-header"><h2>React Router Demo</h2></div>
					</div>
				</div>
				<div className="row">
					<div className="col-xs-2 col-xs-offset-2">
						<div className="list-group">

							{/* 原生html中，靠<a>跳转不同的页面 */}
							{/* <a className="list-group-item" href="./about.html">About</a>
							<a className="list-group-item active" href="./home.html">Home</a> */}

							{/* 在React中靠路由链接实现切换组件--编写路由链接 */}
							<Link className="list-group-item" to="/about">About</Link>
							<Link className="list-group-item" to="/home">Home</Link>
						</div>
					</div>
					<div className="col-xs-6">
						<div className="panel">
							<div className="panel-body">
								{/* 注册路由 */}
								<Route path="/about" component={About}/>
								<Route path="/home" component={Home}/>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

```

## 四、路由组件与一般组件

1. 写法不同：
   一般组件：`<Demo/>`
   路由组件：`<Route path="/demo" component={Demo}/>`
2. 存放位置不同：
   一般组件：components
   路由组件：pages/views
3. 接收到的 props 不同：
   一般组件：写组件标签时传递了什么，就能收到什么
   路由组件：接收到三个固定的属性

```
history:
   go: ƒ go(n)
   goBack: ƒ goBack()
   goForward: ƒ goForward()
   push: ƒ push(path, state)
   replace: ƒ replace(path, state)

location:
   pathname: "/about"
   search: ""
   state: undefined

match:
   params: {}
   path: "/about"
   url: "/about"
```

## 五、NavLink 与封装 NavLink

1. NavLink 可以实现路由链接的高亮，通过 activeClassName 指定样式名
2. 标签体内容是一个特殊的标签属性
3. 通过 this.props.children 可以获取标签体内容
   `<MyNavLink className="list-group-item" to="/home">Home</MyNavLink>`
   即 Home 可以通过 children 内置的已有的属性进行自动传递，可以不通过属性传递。

```
export default class App extends Component {
	render() {
		return (
			<div>
				<div className="row">
					<div className="col-xs-offset-2 col-xs-8">
						<Header/>
					</div>
				</div>
				<div className="row">
					<div className="col-xs-2 col-xs-offset-2">
						<div className="list-group">

							{/* 原生html中，靠<a>跳转不同的页面 */}
							{/* <a className="list-group-item" href="./about.html">About</a>
							<a className="list-group-item active" href="./home.html">Home</a> */}

							{/* 在React中靠路由链接实现切换组件--编写路由链接 */}
							<NavLink activeClassName="atguigu" className="list-group-item" to="/about">About</NavLink>
							<NavLink activeClassName="atguigu" className="list-group-item" to="/home">Home</NavLink>
						</div>
					</div>
					<div className="col-xs-6">
						<div className="panel">
							<div className="panel-body">
								{/* 注册路由 */}
								<Route path="/about" component={About}/>
								<Route path="/home" component={Home}/>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

```

```
//nav-link的封装，用于统一样式，方便使用

import React from "react";
import { NavLink } from "react-router-dom";

//用组件包装nav-link，nav-link的二次封装

export default function MyNavLink(props) {
  // 将外部传入的所有属性传递给navlink，不用在定义prop-types
  return <NavLink {...props} activeClassName="activeClass" />;
}

```

## 六、Switch 的使用

1. 通常情况下，path 和 component 是一一对应的关系。
2. Switch 可以提高路由匹配效率(单一匹配)。
3. 作用：让路径之匹配上一个组件之后就不再进行匹配了。即/home 路由匹配上 Home 组件之后，就不再匹配 Test 组件了。如果不写 Switch 则会两个组件都显示

```
{/*可切换的路由组件*/}
{/* 用switch组件将路由组件进行控制，所以才需要将内容放进switch中
只能显示其中一个，需要用switch包装起来进行调用转换 */}

//作用：让路径之匹配上一个组件之后就不再进行匹配了。即/home路由匹配上Home组件之后，就不再匹配Test组件了。如果不写Switch则会两个组件都显示

<Switch>
   <Route path="/about" component={About} />
   <Route path="/home" component={Home} />
   <Route path="/home" component={Test} />
</Switch>

```

## 七、解决多级路径刷新页面样式丢失的问题

1. public/index.html 中 引入样式时不写 ./ 写 / （常用）
2. public/index.html 中 引入样式时不写 ./ 写 %PUBLIC_URL% （常用）
3. 使用 HashRouter 较少用
   public 里面的 index.html 文件 css 样式路径修改
   `<link rel="stylesheet" href="%PUBLIC_URL%/css/bootstrap.css" />`
   以下刷新后会找不到，路由为多级路由时候刷新页面，样式会丢失。
   `<link rel="stylesheet" href="./css/bootstrap.css" />`

## 八、路由的严格匹配与模糊匹配

1. 默认使用的是模糊匹配（简单记：【输入的路径】必须包含要【匹配的路径】，且顺序要一致）

- 即 `<MyNavLink to="/home/a/b">Home</MyNavLink>` `<Route path="/home" component={Home}/>`即使 route 路径中写的/home,则还是会进行路由跳转
- `<Route path="/a/home" component={Home}/>` 顺序不一致，则也不会跳转

2. 开启严格匹配：`<Route exact={true} path="/about" component={About}/>`,那么上面的例子，路由就不能跳转
3. 严格匹配不要随便开启，需要再开，有些时候开启会导致无法继续匹配二级路由

```
export default class App extends Component {
	render() {
		return (
			<div>
				<div className="row">
					<div className="col-xs-offset-2 col-xs-8">
						<Header/>
					</div>
				</div>
				<div className="row">
					<div className="col-xs-2 col-xs-offset-2">
						<div className="list-group">
							<MyNavLink to="/about">About</MyNavLink>
							<MyNavLink to="/home/a/b">Home</MyNavLink>
						</div>
					</div>
					<div className="col-xs-6">
						<div className="panel">
							<div className="panel-body">
								{/* 注册路由 */}
								<Switch>
									<Route exact path="/about" component={About}/>
									<Route exact path="/home" component={Home}/>
								</Switch>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
```

## 九、Redirect 的使用

1. 一般写在所有路由注册的最下方，当所有路由都无法匹配时，跳转到 Redirect 指定的路由
2. 具体写法

```
<Switch>
   <Route path="/about" component={About}/>
   <Route path="/home" component={Home}/>
   <Redirect to="/about"/>
</Switch>
```

## 十、嵌套路由

1. 注册子路由时要写上父路由的 path 值； /home/news
2. 路由的匹配是按照注册路由的顺序进行的

- app.jsx 里的路由是先匹配的，所以回先匹配/home 路由。之后再在/home 路由里匹配/home/news 的路由

## 十一、向路由组件传递参数

1. params 参数

- 路由链接(携带参数)：`<Link to='/demo/test/tom/18'}>详情</Link>`
- 注册路由(声明接收)：`<Route path="/demo/test/:name/:age" component={Test}/>`
- 接收参数：this.props.match.params

2. search 参数（ajax 中的 query 参数传递）

- 路由链接(携带参数)：`<Link to='/demo/test?name=tom&age=18'}>详情</Link>`
- 注册路由(无需声明，正常注册即可)：`<Route path="/demo/test" component={Test}/>`
- 接收参数：this.props.location.search
- 备注：获取到的 search 是 urlencoded 编码字符串，需要借助 querystring 解析
- 所有需要引入 `import qs from "querystring";`
- `const {name,age} = qs.parse(search.slice(1))`

3. state 参数

- 路由链接(携带参数)：`<Link to={{pathname:'/demo/test',state:{name:'tom',age:18}}}>详情</Link>`
- 注册路由(无需声明，正常注册即可)：`<Route path="/demo/test" component={Test}/>`
- 接收参数：this.props.location.state
- 备注：刷新也可以保留住参数；路由组件身上独有的一个参数，不会将参数显示在地址栏中，会把数据进行隐藏

## 十二、编程式路由导航

1. 借助 this.prosp.history 对象上的 API 对操作路由跳转、前进、后退

- this.prosp.history.push()
- this.prosp.history.replace()
- this.prosp.history.goBack()
- this.prosp.history.goForward()
- this.prosp.history.go()

## 十三、withRouter

1. 将组件形成高阶组件

```
import React, { Component } from 'react'

import {withRouter} from 'react-router-dom'

class Header extends Component {

    back = ()=>{
    	this.props.history.goBack()
    }

    forward = ()=>{
    	this.props.history.goForward()
    }

    go = ()=>{
    	this.props.history.go(-2)
    }

    render() {
    	console.log('Header组件收到的props是',this.props);
    	return (
    		<div className="page-header">
    			<h2>React Router Demo</h2>
    			<button onClick={this.back}>回退</button>&nbsp;
    			<button onClick={this.forward}>前进</button>&nbsp;
    			<button onClick={this.go}>go</button>
    		</div>
    	)
    }

}

export default withRouter(Header)

//withRouter 可以加工一般组件，让一般组件具备路由组件所特有的 API
//withRouter 的返回值是一个新组件


```

## 十四、BrowserRouter 与 HashRouter 的区别

1. 底层原理不一样：

- BrowserRouter 使用的是 H5 的 history API，不兼容 IE9 及以下版本。
- HashRouter 使用的是 URL 的哈希值。
- react 中的 history 的方法都是对原生的方法的二次封装

2. path 表现形式不一样

- BrowserRouter 的路径中没有#,例如：localhost:3000/demo/test
- HashRouter 的路径包含#,例如：localhost:3000/#/demo/test

3. 刷新后对路由 state 参数的影响

- (1).BrowserRouter 没有任何影响，因为 state 保存在 history 对象中。
- (2).HashRouter 刷新后会导致路由 state 参数的丢失！！！，因为没有 history 这个对象存储 state 数据

4. 备注：HashRouter 可以用于解决一些路径错误相关的问题。

## 十五、antd 的按需引入+自定主题

1. 安装依赖：yarn add react-app-rewired customize-cra babel-plugin-import less less-loader
2. 修改 package.json

```

"scripts": {
"start": "react-app-rewired start",
"build": "react-app-rewired build",
"test": "react-app-rewired test",
"eject": "react-scripts eject"
},

```

3. 根目录下创建 config-overrides.js

```

//配置具体的修改规则
const {
override,
fixBabelImports,
addLessLoader,
} = require("customize-cra");
module.exports = override(
fixBabelImports("import", {
libraryName: "antd",
libraryDirectory: "es",
style: true,
}),
addLessLoader({
lessOptions: {
javascriptEnabled: true,
modifyVars: { "@primary-color": "green" },
},
})
);

```

4. 备注：不用在组件里亲自引入样式了，即：import 'antd/dist/antd.css'应该删掉

```

```
