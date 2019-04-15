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
            />
          </Form.Item>
          <Form.Item label="last-Name">
            <Input
              placeholder="Enter your last name"
              prefix={
                <Icon type="solution" style={{ color: "rgba(0,0,0,.25)" }} />
              }
            />
          </Form.Item>
          <Form.Item label="Full-Name">
            <Input
              placeholder="Enter your full name"
              prefix={
                <Icon type="solution" style={{ color: "rgba(0,0,0,.25)" }} />
              }
            />
          </Form.Item>
          <Form.Item label="email">
            <Input
              placeholder="Enter your email"
              prefix={
                <Icon type="mail" style={{ color: "rgba(0,0,0,.25)" }} />
              }
            />
          </Form.Item>
          <Form.Item label="phone">
            <Input
              placeholder="Enter your phone number"
              prefix={
                <Icon type="phone" style={{ color: "rgba(0,0,0,.25)" }} />
              }
            />
          </Form.Item>
          <Form.Item label="Password">
            <Input.Password
              placeholder="Enter your password"
              prefix={
                <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
              }
            />
          </Form.Item>
          <Button
              type="primary"
              htmlType="submit"
            >
              Register
            </Button>
        </form>
      </div>
    );
  }
}
