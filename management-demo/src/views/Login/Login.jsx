import React, { Component } from "react";

import { Form, Input, Button, Checkbox } from "antd";
import "./Login.scss";

export default class Login extends Component {
  render() {
    const onFinish = (values) => {
      console.log("Success:", values);
    };

    const onFinishFailed = (errorInfo) => {
      console.log("Failed:", errorInfo);
    };

    let goHomePage = () => {
      this.props.history.push("/home");
    };
    return (
      <div id="login_page">
        <div className="login_container">
          <div className="form">
            <Form
              name="basic"
              labelCol={{
                span: 8,
              }}
              wrapperCol={{
                span: 16,
              }}
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
            >
              <Form.Item
                label="Username"
                name="username"
                rules={[
                  {
                    required: true,
                    message: "Please input your username!",
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please input your password!",
                  },
                ]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item
                name="remember"
                valuePropName="checked"
                wrapperCol={{
                  offset: 8,
                  span: 16,
                }}
              >
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <Form.Item
                wrapperCol={{
                  offset: 8,
                  span: 16,
                }}
              >
                <Button type="primary" htmlType="submit" onClick={goHomePage}>
                  Submit
                </Button>
              </Form.Item>
            </Form>
            {/* <div className="logo">
              <img src="" alt="" />
              <span className="logoName">ANTD ADMIN</span>
            </div>
            <div className="username">
              <Button type="primary">Button</Button>
            </div>
            <div className="pwd"></div>
            <div className="loginBtn"></div>*/}
            <div className="notes">Username:guest Passwoprd: guest</div>
          </div>
        </div>
      </div>
    );
  }
}
