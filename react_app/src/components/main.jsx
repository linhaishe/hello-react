import React, { Component } from "react";

export default class Main extends Component {
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

  render() {
    const { initView, loading, users, errorMsg } = this.state;

    if (initView) {
      return <h2>请输入关键字进行搜索</h2>;
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
            <div className="card">
              <a href={user.url} target="_blank">
                <img src={user.avatarUrl} style={{ width: 100 }} />
              </a>
              <p className="card-text">{user.name}</p>
            </div>
          ))}
        </div>
      );
    }
  }
}
