动态展示列表数据
将一个数据的数组转化为一个标签的数组

<ul>
<li>{name}</li>
</ul>

![Xnip2020-02-05_22-40-27.png](http://ww1.sinaimg.cn/large/005NUwyggy1gblwl5qfr4j30js0mw0tw.jpg)

以一个页面的方式去使用时(仅在讲基础例子的时候使用，之后的项目用脚手架)
以文件的方式在页面中使用需要引入三个文件

1. react.js react 的核心语法
2. react-dom.js react 的虚拟 dom 文件
3. babel.js 解析浏览器不认识的 js 语法

4. react 中{}为分隔符，只有在这里面...p 才能展开对象，仅适用于标签属性传递时使用。

```
<Com {...person}/>
```
