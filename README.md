## react v18
on master branch , all notes are taking from this course: 
[React零基础入门到实战，完成企业级项目简书网站开发](https://coding.imooc.com/learn/list/229.html)
The react version is 16 base on this tutorial. but I'll develop this project with v18.

## refs

### react

1. [React Projects with tutorial videos](https://github.com/john-smilga/react-projects)
2. [reactjs](https://reactjs.org/docs/getting-started.html)
3. [A collection of awesome things regarding the React ecosystem](https://github.com/enaqx/awesome-react)
4. [ruanyifeng-react-demo](https://github.com/ruanyf/react-demos)
5. [React 18 New Features](https://www.freecodecamp.org/news/react-18-new-features/)

### redux

https://www.taniarascia.com/redux-react-guide/

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
│   ├── App.tsx 定义组件的文件，App组件通过继承React.Component这个基类去实现定义的
│   ├── App.test.js // 自动化测试文件
│   ├── index.css
│   ├── index.ts // entry file
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

## react 优点

1. 声明式开发：减少大量Dom操作，减少代码量
2. 可以与其他框架并存,(redux,mobx,etc.)
3. 组件化：
4. 单项数据流：父组件可以往子组件传数据，但是子组件绝对不能改变父组件的数据
5. 视图层框架：在处理大型项目的时候，光用它不够用，只能做搭建视图使用，需要搭配redux等处理组件之间传值的问题。
6. 函数是编程：更容易实现前端自动化测试

## props states render
当组件的state或者props发生改变的时候，render函数会重新执行
父组件的render函数被运行时，它的自组件的render都将被重新运行

## 虚拟DOM
本质上是一个js对象，在更新时，是对对象进行比对，性能消耗小。

## diff算法
1. setState是一个异步的操作，多个state同时改变时，会把多次setState结合成一个setState,减少虚拟DOM的比对次数。
2. diff会进行同层比对，如果第一层比对失败后，同层之后的节点不会进行比对都会被删除。用新的节点替换就的节点。优化性能。
3. 引入key值，用index不稳定。

## ref
ref 和 setstate 同时使用时，由于setstate是异步操作，ref更新会不及时。this.setstate中有第二个参数值使用，可以在setstate之后即使操作ref

## lifeCycle
[lifecycle diagram](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)

<mark>需看新的视频了解新的更新内容</mark>

## 性能优化的点

1. this作用域的绑定在constructor中只需要作用一次，不会再做无谓的渲染。
2. this.setSate，异步函数，多次的数据更新合并成一次来做，降低虚拟dom的比对频率
3. react 虚拟dom，和同层比对key值的使用，提升虚拟dom的比对速度。
4. shouldComponentUpdate , 避免无谓组件函数的运行。子组件会根据父组件数据更新时，重新渲染。在shouldComponentUpdate中做更新判断，提升性能。

## reduce
reducer	是一个纯函数，给固定的输入，就一定会有固定输出，而且不会有任何副作用。函数中不能有时间的操作，或者异步操作。

## UI组件和容器组件

## 无状态组件
无状态组件，性能较高，它只是一个函数，状态组件是class里的一个类，类生成的对象还要执行生命周期等函数。远比函数组件要执行的东西要多得多。
ui组件一般通过无状态组件实现，但也要根据业务来。

## redux-thunk
处理异步请求，放在action中进行处理

## reset css
https://meyerweb.com/eric/tools/css/reset/
不同浏览器的内核对html body等标签的默认样式是不同的。为了让所有代码在所有的浏览器上表现形式是一致的，就需要把所有浏览器上默认值进行格式化。

