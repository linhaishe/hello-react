脚手架 baisc 文件，在此基础上复制粘贴即可，不需要再 create react app 了

## 3.1.1. react 脚手架

1. xxx 脚手架: 用来帮助程序员快速创建一个基于 xxx 库的模板项目

- 包含了所有需要的配置（语法检查、jsx 编译、devServer…）
- 下载好了所有相关的依赖
- 可以直接运行一个简单效果

2. react 提供了一个用于创建 react 项目的脚手架库: create-react-app
3. 项目的整体技术架构为: react + webpack + es6 + eslint
4. 使用脚手架开发的项目的特点: 模块化, 组件化, 工程化

## 3.1.2. 创建项目并启动

1. 建议去官网按照官网的流程走
2. 第一步，全局安装：npm i -g create-react-app
3. 第二步，切换到想创项目的目录，使用命令：create-react-app hello-react
4. 第三步，进入项目文件夹：cd hello-react
5. 第四步，启动项目：npm start

```
public ---- 静态资源文件夹
		favicon.icon ------ 网站页签图标
		index.html -------- 主页面
		logo192.png ------- logo图
		logo512.png ------- logo图
		manifest.json ----- 应用加壳的配置文件
		robots.txt -------- 爬虫协议文件
src ---- 源码文件夹
		App.css -------- App组件的样式
		App.js --------- App组件
		App.test.js ---- 用于给App做测试
		index.css ------ 样式
		index.js ------- 入口文件
		logo.svg ------- logo图
		reportWebVitals.js
			--- 页面性能分析文件(需要web-vitals库的支持)
		setupTests.js
			---- 组件单元测试的文件(需要jest-dom库的支持)
```
