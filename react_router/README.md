## 第 5 章：React 路由

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

- 1. 后端路由：

1. 理解： value 是 function, 用来处理客户端提交的请求。
2. 注册路由： router.get(path, function(req, res))
3. 工作过程：当 node 接收到一个请求时, 根据请求路径找到匹配的路由, 调用路由中的函数来处理请求, 返回响应数据

- 2.前端路由：

1. 浏览器端路由，value 是 component，用于展示页面内容。
2. 注册路由: <Route path="/test" component={Test}> 3)工作过程：当浏览器的 path 变为/test 时, 当前路由组件就会变为 Test 组件

#### 5.1.3. react-router-dom 的理解

1. react 的一个插件库。
2. 专门用来实现一个 SPA 应用。
3. 基于 react 的项目基本都会用到此库。

#### 5.2. react-router-dom 相关 API

#### 5.2.1. 内置组件

1.<BrowserRouter> 2.<HashRouter> 3.<Route> 4.<Redirect> 5.<Link> 6.<NavLink> 7.<Switch>

#### 5.2.2. 其它

1. history 对象
2. match 对象
3. withRouter 函数
