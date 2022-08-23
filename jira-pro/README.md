```
// 只转译url里的一部分
encodeURIComponent('element')
decodeURIComponent('element')
```
### 所有不是为了业务而修改源代码的行为都是不好的。
env 文件
npm start 在开发环境下，webpack会读取.env.dev文件下的变量
npm run build 在构建环境下，webpack会读取.env文件下的变量

### 异常处理
1. http请求的异常处理。
加载中和异常页面的处理，对react中的异步操作进行状态控制，使用简单的方式提高用户体验。
```typescript jsx
const [isLoading, setIsLoading] = useSate(false);
const [error, setError] = useState<null | Error>(null);

useEffect(()=>{
  setIsLoading(true);
  client('projects', {data: 'blablaxx'})
    .then(setList)
    .catch(error => {
      setList([]);
      setError(error)
  })
}, [])
```

2. 渲染阶段，或其他异步阶段抛出的异常处理。
uncaught errors 会导致整个rect组件树被卸载。错误边界error boundaries

### 修改浏览器标签标题
1. 方法1: 找到index.html,修改title标签的内容。导航跳到对应页面的时候通过document.title修改标签内容
2. 方法2: 使用[react helmet](https://github.com/nfl/react-helmet#readme)
3. 方法3: 使用自定义hook
