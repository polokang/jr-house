import React from "react";
import {
  Form,
  Input,
  Tooltip,
  Icon,
  Cascader,
  Select,
  Row,
  Col,
  Checkbox,
  Button,
  AutoComplete
} from "antd";
export default class Register extends React.Component {
  render() {
    const {
      First_name,
      Last_name,
      Full_name,
      phone,
      Email,
      password,
      set_FirstName,
      set_LastName,
      set_Full_name,
      set_Email,
      set_phone,
      set_password,
      handleclick
    } = this.props;
    return (
      <div className="register-page">
        <h1>Register</h1>
        <form>
          <Form.Item label="First-Name">
            <Input
              placeholder="Enter your first name"
              prefix={
                <Icon type="solution" style={{ color: "rgba(0,0,0,.25)" }} />
              }
              value={First_name}
              onChange={set_FirstName}
            />
          </Form.Item>
          <Form.Item label="last-Name">
            <Input
              placeholder="Enter your last name"
              prefix={
                <Icon type="solution" style={{ color: "rgba(0,0,0,.25)" }} />
              }
              value={Last_name}
              onChange={set_LastName}
            />
          </Form.Item>
          <Form.Item label="Full-Name">
            <Input
              placeholder="Enter your full name"
              prefix={
                <Icon type="solution" style={{ color: "rgba(0,0,0,.25)" }} />
              }
              value={Full_name}
              onChange={set_Full_name}
            />
          </Form.Item>
          <Form.Item label="email">
            <Input
              placeholder="Enter your email"
              prefix={<Icon type="mail" style={{ color: "rgba(0,0,0,.25)" }} />}
              value={Email}
              onChange={set_Email}
            />
          </Form.Item>
          <Form.Item label="phone">
            <Input
              placeholder="Enter your phone number"
              prefix={
                <Icon type="phone" style={{ color: "rgba(0,0,0,.25)" }} />
              }
              value={phone}
              onChange={set_phone}
            />
          </Form.Item>
          <Form.Item label="Password">
            <Input.Password
              placeholder="Enter your password"
              prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
              value={password}
              onChange={set_password}
            />
          </Form.Item>
          <Button type="primary" htmlType="submit" onClick={ handleclick}>
            Register
          </Button>
        </form>
      </div>
    );
  }
}
