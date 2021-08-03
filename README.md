## react_pracs

### 脚手架创建

1. 第一步，全局安装：npm i -g create-react-app
2. 第二步，切换到想创项目的目录，使用命令：create-react-app hello-react
3. 第三步，进入项目文件夹：cd hello-react
4. 第四步，启动项目：npm start

#### 脚手架安装报错

5. https://stackoverflow.com/questions/67399785/how-to-solve-npm-install-error-npm-err-code-1
6. 由于自己下载的是 node 最新版本 16.XX,导致安装失败，一直报错。
7. 使用 nvm 版本管理，下载了最新的稳定版本。并使用 nvm use 14.17.4,转换为稳定版本。nvm ls 查看通过 nvm 下载的 node 版本进行切换
8. 由于 node 删除失败，选择通过 nvm 进行版本转换。
9. nvm use 14.17.4,转换 node 版本
10. 使用以下命令可以改变默认的版本：nvm alias default v4.3.0 这样就不用每次都切换版本了
11. 相关资料：

- https://segmentfault.com/a/1190000039188394
- https://zhuanlan.zhihu.com/p/99841609
- https://segmentfault.com/a/1190000004330350
- https://zhuanlan.zhihu.com/p/89158928

react_pracs

![comment_component.gif](http://ww1.sinaimg.cn/large/005NUwyggy1gbr6jj0plcg30r70gagr9.gif)

### react_app

1. 写了一些 demo,留言板，github 用户搜素请求，todolist，留言板和 github 用户请求分 pubsub 写法和非 pubsub 写法。
2. 发现不足的地方是 app 组件应该放在根目录下方。但是不影响整体运行。
3. pubsub github user 讲解 react ajax(fetch)的使用

### react_test

此文件内容主要是 react 基础知识点的 demo

1. 原生渲染
2. 组件
3. state
4. props
5. refs
6. composing
7. form
8. 生命周期
9. ajax

### react_redux

### react_router

### notes

1. 文件内所有的根组件 App 都放在了 component 文件夹中，实际操作中应该放在最外层的文件中，和 index.js 文件同层级。由于过多文件如此，就不一一修改了。
2. less 安装
   npm i less
   npm less-loader@6.0
3. antUI
