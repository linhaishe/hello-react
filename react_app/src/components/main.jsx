import React, { Component } from "react";
import PropTypes from "prop-types";
import axios from "axios";
//下载axios
//npm install --save axios

export default class Main extends Component {
  static propTypes = {
    searchName: PropTypes.string.isRequired
  };

  // 整个页面会有4个状态，搜索前提示输入，搜索时loading,搜索结果呈现，搜索错误呈现
  state = {
    //判断显示初始页面
    initView: true,
    //点击搜索按钮式改为true，并显示loading...文本
    loading: false,
    //显示搜索结果用户列表，得到一个数组显示列表，开始时是没有值的
    users: null,
    //开始没有值，请求出错再赋值
    errorMsg: null
  };

  //当组件接收到新的属性时进行回调
  //生命周期的函数
  componentWillReceiveProps(newProps) {
    //指定了新的搜索关键字，需要请求
    const { searchName } = newProps;
    //更新状态(请求中)
    this.setState({
      initView: false,
      loading: true
    });
    //发送请求
    const url = `https://api.github.com/search/users?q=${searchName}`;
    axios
      .get(url)
      .then(response => {
        //得到响应数据
        const result = response.data;
        console.log(result);
        //更新状态(成功)
        //返回的数据冗杂，只想留下想要的信息(处理点)
        //main中取数据的时候不是用的api的属性名(处理点)
        const users = result.items.map(item => {
          return {
            name: item.login,
            url: item.html_url,
            avatarUrl: item.avatar_url
          };
        });
        //更新状态
        this.setState({ loading: false, users });
      })
      .catch(error => {
        //更新状态(失败/错误)
        this.setState({ loading: false, errorMsg: error.message });
      });
  }

  render() {
    const { initView, loading, users, errorMsg } = this.state;
    const { searchName } = this.props;
    console.log("render()", searchName);
    if (initView) {
      return <h2>请输入关键字进行搜索:{searchName}</h2>;
    } else if (loading) {
      // 如果lading为true则返回
      return <h2>正在请求中</h2>;
    } else if (errorMsg) {
      return <h2>{errorMsg}</h2>;
    } else {
      return (
        // style = {{ width: 100 }} 可以不用写标量，它会自动帮你加，整个row只需要留一个card就可以了，其他的都是动态生成的

        //这里返回的时需要遍历Users，应该生成一个数组
        <div className="row">
          {users.map((user, index) => (
            <div className="card" key={index}>
              <a href={user.url} target="_blank">
                <img src={user.avatarUrl} style={{ width: 100 }} />
              </a>
              <p className="card-text">{user.name}</p>
            </div>
          ))}
        </div>
      );
    }
    //考虑应该在哪个组件发请求，在那里写请求组件？
    //发请求的前后都要更新mian.state的状态,我们需要更新状态则在main组件里进行请求是最好的，方便更新状态，马上就可以setstate,如果在app父组件更新状态，需要发通知告诉子组件，父组件更新子组件状态需要调用更多函数。
    //一般发请求都会在componentdidmonut函数中编写
    //mian组件需要接收search组件内的搜索条件，兄弟组件中如何传递数据？
    //最好的方式是将数据传递给父组件，父组件再传递给另一个子组件  = =

    //如何确认mian组件中searchName是否进行改变，这个需要进行判断和确认
  }
}
