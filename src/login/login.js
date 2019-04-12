import React from "react";
import { Input, Icon, Button } from "antd";
export default class Login extends React.Component {
  // 整个位置想弄一个function onsubmit 调用 如果用户名 密码正确 就去一个页面  否则跳回 login 页面<login /> 这样子会把它放在类似weatherchannel.js中
  render() {
    return (
      <div className="login_page">
        <h1>Login</h1>
        <form>
          <Input
            placeholder="Enter your Email"
            prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
          />
          <Input.Password placeholder="input password" />
          <div className="button">
            <Button type="primary" htmlType="submit" className="login-button">
              Log in
            </Button>
            <Button
              type="primary"
              htmlType="submit"
              className="register-button"
            >
              Register
            </Button>
          </div>
        </form>
      </div>
    );
  }
}
