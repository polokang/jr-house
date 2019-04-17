import React from "react";
import {Link} from "react-router-dom";
import { Input, Icon, Button } from "antd";
export default class Login extends React.Component {
  // 整个位置想弄一个function onsubmit 调用 如果用户名 密码正确 就去一个页面  否则跳回 login 页面<login /> 这样子会把它放在类似weatherchannel.js中
  
  render() { 
    const {Email,password,Inputemail,Inputpassword,handleclick}=this.props;
    return (
      <div className="login_page">
        <h1>Login</h1>
        <form>
          <Input
            placeholder="Enter your Email"
            prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
            value={Email}
            onChange={Inputemail}
          />
          <Input.Password placeholder="input password" value={password} onChange={Inputpassword}/>
          <div className="button">
            <Button type="primary" 
            // htmlType="submit"
            className="login-button" 
            onClick={handleclick}
            >
              Log in
            </Button>
            <Link to="/register">
            <Button
              type="primary"
              className="register-button"
            >
              Register
            </Button>
            </Link>
          </div>
        </form>
      </div>
    );
  }
}
