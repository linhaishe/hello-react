import React from "react";
import { useHistory } from "react-router-dom";

export default function About(props) {
  let history = useHistory();
  console.log("这是about组件收到的props", props);
  let goHome = () => {
    history.push("/home");
  };
  return (
    <div>
      About组件内容 &nbsp;
      <button onClick={goHome}>回Home主页</button>
    </div>
  );
}
