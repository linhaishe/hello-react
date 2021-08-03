import React from "react";
import qs from "querystring";

const messageDetails = [
  { id: 1, title: "Message001", content: "我爱你, 中国" },
  { id: 3, title: "Message003", content: "我爱你, 老婆" },
  { id: 6, title: "Message006", content: "我爱你, 孩子" },
];

export default function MessageDetail(props) {
  console.log("路由传递过来的参数", props);
  //接收params参数
  // const { id } = props.match.params
  //根据文档读取数据
  // const id = props.match.params.id;

  // 接收search参数
  const { search } = props.location;
  const { id, title } = qs.parse(search.slice(1));

  //debugger
  //字符串1和数字1类型不同，所欲id*1将字符串变为数字类型
  //得到对应的msg,find()方法
  const md = messageDetails.find((md) => md.id === id * 1) || {};
  //返回第一个结果为true的数组元素
  // const message = messageDetails.find(m => m.id === id);

  return (
    <ul>
      <li>ID: {md.id}</li>
      <li>TITLE: {title}</li>
      <li>CONTENT: {md.content}</li>
      {/* <li>ID: </li>
      <li>TITLE:</li>
      <li>CONTENT: </li> */}
    </ul>
  );
}
