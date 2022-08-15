```
// 只转译url里的一部分
encodeURIComponent('element')
decodeURIComponent('element')
```
所有不是为了业务而修改源代码的行为都是不好的。
env 文件
npm start 在开发环境下，webpack会读取.env.dev文件下的变量
npm run build 在构建环境下，webpack会读取.env文件下的变量
