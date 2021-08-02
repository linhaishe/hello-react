动态展示列表数据
将一个数据的数组转化为一个标签的数组

<ul>
<li>{name}</li>
</ul>

![Xnip2020-02-05_22-40-27.png](http://ww1.sinaimg.cn/large/005NUwyggy1gblwl5qfr4j30js0mw0tw.jpg)

以一个页面的方式去使用时(仅在讲基础例子的时候使用，之后的项目用脚手架)
以文件的方式在页面中使用需要引入三个文件

### 1.2.2.相关 js 库

1. react.js：React 核心库。
2. react-dom.js：提供操作 DOM 的 react 扩展库。
3. babel.min.js：解析 JSX 语法代码转为 JS 代码的库。

### 介绍描述

1. 用于动态构建用户界面的 JavaScript 库(只关注于视图)
2. 由 Facebook 开源

### React 的特点

1. 声明式编码
2. 组件化编码
3. React Native 编写原生应用
4. 高效（优秀的 Diffing 算法）

### React 高效的原因

1. 使用虚拟(virtual)DOM, 不总是直接操作页面真实 DOM。
   2 .DOM Diffing 算法, 最小化页面重绘。

2. react 中{}为分隔符，只有在这里面...p 才能展开对象，仅适用于标签属性传递时使用。

```
<Com {...person}/>
```
