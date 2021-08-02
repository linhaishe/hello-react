## 二、github 搜索案例相关知识点

### src-githubusers

1. 设计状态时要考虑全面，例如带有网络请求的组件，要考虑请求失败怎么办。
2. ES6 小知识点：解构赋值+重命名

```
let obj = {a:{b:1}}
const {a} = obj; //传统解构赋值
const {a:{b}} = obj; //连续解构赋值
const {a:{b:value}} = obj; //连续解构赋值+重命名
```

3. 消息订阅与发布机制

- 先订阅，再发布（理解：有一种隔空对话的感觉）
- 适用于任意组件间通信
- 要在组件的 componentWillUnmount 中取消订阅

1. 工具库: PubSubJS
2. 下载: npm install pubsub-js --save
3. 使用:

- 1)`import PubSub from 'pubsub-js' //引入`
- 2)`PubSub.subscribe('delete', function(data){ }); //订阅`
- 3)`PubSub.publish('delete', data) //发布消息`

4. fetch 发送请求（关注分离的设计思想）
   refs:
1. https://github.github.io/fetch/
1. https://segmentfault.com/a/1190000003810652

```
try {
    const response= await fetch(`/api1/search/users2?q=${keyWord}`)
    const data = await response.json()
    console.log(data);
} catch (error) {
    console.log('请求出错',error);
}
```

```
//get
fetch(url).then(function(response) {
    return response.json()
  }).then(function(data) {
    console.log(data)
  }).catch(function(e) {
    console.log(e)
  });
```

```
//post
  fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
  }).then(function(data) {
    console.log(data)
  }).catch(function(e) {
    console.log(e)
  })

```

特点：

1. fetch: 原生函数，不再使用 XmlHttpRequest 对象提交 ajax 请求
2. 老版本浏览器可能不支持

### react_ajax

1. React 本身只关注于界面, 并不包含发送 ajax 请求的代码
2. 前端应用需要通过 ajax 请求与后台进行交互(json 数据)
3. react 应用中需要集成第三方 ajax 库(或自己封装)

#### 4.1.2. 常用的 ajax 请求库

1. jQuery: 比较重, 如果需要另外引入不建议使用
2. axios: 轻量级, 建议使用

- 1)封装 XmlHttpRequest 对象的 ajax
- 2. promise 风格
- 3)可以用在浏览器端和 node 服务器端
