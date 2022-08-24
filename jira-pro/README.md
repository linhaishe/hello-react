```
// 只转译url里的一部分
encodeURIComponent('element')
decodeURIComponent('element')
```

### 所有不是为了业务而修改源代码的行为都是不好的。

env 文件
npm start 在开发环境下，webpack 会读取.env.dev 文件下的变量
npm run build 在构建环境下，webpack 会读取.env 文件下的变量

### 异常处理

1. http 请求的异常处理。
   加载中和异常页面的处理，对 react 中的异步操作进行状态控制，使用简单的方式提高用户体验。

```typescript jsx
const [isLoading, setIsLoading] = useSate(false);
const [error, setError] = useState<null | Error>(null);

useEffect(() => {
  setIsLoading(true);
  client('projects', { data: 'blablaxx' })
    .then(setList)
    .catch((error) => {
      setList([]);
      setError(error);
    });
}, []);
```

2. 渲染阶段，或其他异步阶段抛出的异常处理。
   uncaught errors 会导致整个 rect 组件树被卸载。错误边界 error boundaries

### 修改浏览器标签标题

1. 方法 1: 找到 index.html,修改 title 标签的内容。导航跳到对应页面的时候通过 document.title 修改标签内容
2. 方法 2: 使用[react helmet](https://github.com/nfl/react-helmet#readme)
3. 方法 3: 使用自定义 hook

### react and closure

### react & react-dom/react-native/react-vr / react-router & react-router-dom

react 核心库，主要处理虚拟的核心的理论的库，组件中的 state 的状态怎么虚拟 dom 树，diff 算法处理主要都在 react 中处理的。
而得出的结果会被其他的库(react-dom/react-vr)进行消化。

### antd select

当 select 中 id 在搜索的时候，后台没有返回数据，antd 会把 id 显示在下拉框里

### useSate

惰性初始state
useSate传入函数的时候，会被直接执行，自动调用。惰性初始化，不能直接传入函数
使用useState保存函数方法
1. 函数回调函数
```typescript jsx
// click setCallback -> call callback -> output: updata callback
const [callback, setCallback] = React.useState(() => () => alert('init'));

<button onClick={() => setCallback(() => () => alert('updata callback'))}>setCallback</button>
<button onClick={callback}>call callback</button>
```

2. useRef 保存函数
会输出init，useRef定义的值不是组件的状态，只是一个普通的值，不会触发组件重新渲染。
```typescript jsx
// click setCallback -> call callback -> output: init
const callbackRef = React.useRef(() => alert('init'));
const callback = callbackRef.current;

<button onClick={() => (callbackRef.current = () => alert('update'))}>setCallback</button>
<button onClick={callback}>call callback</button>
```

```typescript jsx
// click setCallback -> call callback -> output: update
const callbackRef = React.useRef(() => alert('init'));
const callback = callbackRef.current;

<button onClick={() => (callbackRef.current = () => alert('update'))}>setCallback</button>
// 强制读取callbackRef.current 最新的值
<button onClick={() => callbackRef.current()}>call callback</button>
```

```typescript jsx
// click setCallback -> call callback -> output: init
const callbackRef = React.useRef(() => alert('init'));
const callback = callbackRef.current;

<button onClick={() => (callbackRef.current = () => alert('update'))}>setCallback</button>
// callbackRef.current 只会在第一次渲染的时候发生，其实已经被读取过了，读取的就是最初始的值
<button onClick={callbackRef.current}>call callback</button>
```
### 乐观更新

如何让多个组件共享一个状态，全局状态管理。
1. 状态提升，将状态放在父组件中
2. 全局状态管理
