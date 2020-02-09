![Xnip2020-02-05_22-32-18.png](http://ww1.sinaimg.cn/large/005NUwyggy1gblwibqzgxj30oy0meakp.jpg)
![Xnip2020-02-05_22-32-58.png](http://ww1.sinaimg.cn/large/005NUwyggy1gblwibrkw4j30ts0n8k56.jpg)

功能: 组件化实现此功能

    1. 显示所有todo列表
    2. 输入文本, 点击按钮显示到列表的首位, 并清除输入的文本

    q1:处理动态数据时，数据保存在哪个组件内
    1.名称，类型要确定好
    2.判断某个组件需要还是某些组件需要
    3.某个需要则放在需要数据的组件内
    4.某些组件需要则放在共同的父组件内

    q2:需要在子组件中改变父组件的状态
    子组件不能直接改变父组件的状态
    状态在哪个组件，更新状态的行为就应该定义在哪个组件
    解决方案 ：父组件定义函数，传递给子组件，子组件调用

![3.gif](http://ww1.sinaimg.cn/large/005NUwyggy1gblx5infxzg30bj07ojs2.gif)
