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

### useCallback

The 'fetchPeojects' function makes the dependencies of useEffect Hook (at line 14) change on every render.
只有在依赖列表改变的时候，整个函数才会被重新定义。这样当函数放在useEffect依赖项中不会造成内存泄漏。
在useCallback 或 依赖中 用到state，又把state加入到依赖中，会造成无限循环。
在回调函数中不要直接用到State
```typescript
  const run = useCallback(
        (promise: Promise<D>, runConfig?: { retry: () => Promise<D> }) => {
           if (!promise || !promise.then) {
              throw new Error('请传入 Promise 类型数据');
           }

           setRetry(() => () => {
              //  run(promise) 中这里只拿到了callback的实例，没有拿到callback的数据
              if (runConfig?.retry) {
                 run(runConfig?.retry(), runConfig);
              }
           });

           setState({ ...state, stat: 'loading' });
           return promise
                   .then((data) => {
                      if (mountedRef.current) setData(data);
                      return data;
                   })
                   .catch((error) => {
                      // catch 会消化异常，如果不主动抛出异常，外面是不会接收到异常的
                      setError(error);
                      if (config.throwOnError) {
                         return Promise.reject(error);
                      }
                      return error;
                   });
        },
        [config.throwOnError, mountedRef, setData, state, setError],
);
```
**setState的函数用法**
```typescript
  const run = useCallback(
        (promise: Promise<D>, runConfig?: { retry: () => Promise<D> }) => {
           if (!promise || !promise.then) {
              throw new Error('请传入 Promise 类型数据');
           }

           setRetry(() => () => {
              //  run(promise) 中这里只拿到了callback的实例，没有拿到callback的数据
              if (runConfig?.retry) {
                 run(runConfig?.retry(), runConfig);
              }
           });

           setState((prevState) => ({ ...prevState, stat: 'loading' }));
           return promise
                   .then((data) => {
                      if (mountedRef.current) setData(data);
                      return data;
                   })
                   .catch((error) => {
                      // catch 会消化异常，如果不主动抛出异常，外面是不会接收到异常的
                      setError(error);
                      if (config.throwOnError) {
                         return Promise.reject(error);
                      }
                      return error;
                   });
        },
        [config.throwOnError, mountedRef, setData, setError],
);
```

### 不可以在已卸载或未挂载的组件上进行状态管理

users and projectlist 在请求未有响应的时候，被用户登出操作所打断，会造成报错。
组件被卸载的时候，设置state的状态，会报错。
不可以在已卸载或未挂载的组件上进行状态管理。

useMemo 和 useCallback 都是为了依赖而存在的。
非基本类型的依赖，如果我们定义了非基本类型想要做依赖的时候，就需要使用memoand callback进行处理
不要再每次页面渲染的时候进行重建。

custom hook的时候，在里面要return出函数的时候，基本都需要用到useCallback进行处理

### 状态提升

1. 把要共享状态的组件找到共同的最近的父组件，把要共享的状态放在这个父组件里。通过props进行数据传递

出现的问题：
- prop drilling
- 耦合性高


2. component composition
   子组件只需要负责渲染，不需要知道传入的props的实现方法，减少传入的props数量。但会使得高层组件变得复杂。

- [控制反转](https://www.jianshu.com/p/07af9dbbbc4b)

### use-undo那节听的有点晕
useState and useReducer 在功能上两个是可以互换的
useReducer适合定义一群会互相影响的状态
useState 适合定义一个状态

### react / react-redux

1. react-redux
   作为一个桥梁，b把store中的状态state和react component 链接在一起。
   把state变成组件的状态
```typescript
function render() {
   valueEl.innnerHTML = store.getState().toString()
};

render();
store.subscribe(render);
```
2. 容器组件与展示组件分离 separation of container presidential
```typescript
// higher order component
export default connect(
        mapStateToPtops,
        mapDispatchToProps
)(Link)
```
3. reducer 一定必须是同步函数，保持可预测性。异步请求具有不可预测性，相同请求可能会有不同的结果。

4. redux-thunk
```typescript
// 不同之处在于 action，普通的 action 大多长这样

export function toggleTodo(index) {
   return { type: TOGGLE_TODO, index }
}


// 而 redux-thunk 的 action 可以是一 异步的 higher order function 高阶函数

export const fetchData = args => async (dispatch, getState) => {
   const state = getState();
   const url = 'https://jsonplaceholder.typicode.com/users/' + args;

   try {
      const response = await fetch(url)
              .then(resp => {
                 return resp;
              })
              .then(resp => resp.json());

      dispatch({
         type: REMOTE_DATA_RECEIVED,
         data: response
      });
   } catch (error) {
      console.log(error);
   }
};
```
redux 和 context 等其他管理方案是成竞争关系的。
jira-redux-toolkit 这条分支使用redux实现异步管理。
master 分支使用 context进行数据管理

refs: https://ithelp.ithome.com.tw/articles/10246939
```typescript
 const mounted=useRef(false);
    useEffect(()=>{
      if(mounted.current===false){
        mounted.current=true;
        /* 下面是 第一次渲染後 */
    
    
        /* 上面是 第一次渲染後 */      
      }
      else{
        /* 下面是元件更新後 */
    
    
        /* 上面是元件更新後 */

      }
      
      return (()=>{
           /* 下面是元件移除前 */
      
      
          /* 上面是元件移除前 */
      })
    },[dependencies參數]);
```
react-query

1. 两秒内如果有相同的query key 发出请求的话，会catch住其他的，合并起来只发送一个请求。
2. 
