## react v18
on master branch , all notes are taking from this course: 
[React零基础入门到实战，完成企业级项目简书网站开发](https://coding.imooc.com/learn/list/229.html)
The react version is 16 base on this tutorial. but I'll develop this project with v18.

## refs
1. [React Projects with tutorial videos](https://github.com/john-smilga/react-projects)
2. [reactjs](https://reactjs.org/docs/getting-started.html)
3. [A collection of awesome things regarding the React ecosystem](https://github.com/enaqx/awesome-react)
4. [ruanyifeng-react-demo](https://github.com/ruanyf/react-demos)
5. [React 18 New Features](https://www.freecodecamp.org/news/react-18-new-features/)

## project tree view
```
react_v18
├── README.md
├── package.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json // icon,浏览器右上角，或者桌面快捷键，此文件可以设置快捷键所跳转的路径。
│   └── robots.txt
├── src
│   ├── App.css
│   ├── App.js 定义组件的文件，App组件通过继承React.Component这个基类去实现定义的
│   ├── App.test.js // 自动化测试文件
│   ├── index.css
│   ├── index.js // entry file
│   ├── logo.svg
│   ├── reportWebVitals.js // Sending results to analytics
│   └── setupTests.js
└── yarn.lock
```

```js
import { Component } from 'react'
// equals to
import React from 'react';
const Component = React.Component
```

## v16 vs v18

1. v18 使用function方式去构造组件，v16用的class方式
2. 新增reportWebVitals.js文件
3. `ReactDOM.createRoot`
