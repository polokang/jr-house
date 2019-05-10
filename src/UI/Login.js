import React from "react"
import { Form, Icon, Input, Button, Tabs, Row, Col, Alert } from "antd"
import { Link } from "react-router-dom"
import { logIn } from "../Api/auth"
import PropTypes from "prop-types"

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field])
}

class HorizontalLoginForm extends React.Component {
  constructor(props) {
    super()
  }
  state = {
    curTab: "1",
    bottom: 10,
    isLoggedError: false
  }
  handleSubmit = e => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        if (this.state.curTab === "1") {
          logIn(values.email, values.password).then(res => {
            this.context.router.history.push("/")
            if (res.status === 200) {
              this.setState({
                isLoggedError: false
              })
              console.log("login ok")
            } else {
              this.setState({
                isLoggedError: true
              })
            }
          })
        } else {
          console.log("Waiting....", this.state.curTab)
        }
      }
    })
  }

  callback = key => {
    this.setState({
      curTab: key,
      isLoggedError: false
    })
  }

  render() {
    const {
      getFieldDecorator,
      getFieldsError,
      getFieldError,
      isFieldTouched
    } = this.props.form

    // Only show error after a field is touched.
    const emailError = isFieldTouched("email") && getFieldError("email")
    const passwordError =
      isFieldTouched("password") && getFieldError("password")

    const { TabPane } = Tabs
    const isLoggedError = this.state.isLoggedError
    return (
      <Form layout="vertical" onSubmit={this.handleSubmit}>
        <Tabs
          style={{ textAlign: "center" }}
          defaultActiveKey="1"
          size="large"
          onChange={this.callback}
        >
          <TabPane tab="E-Mail" key="1">
            <div>
              {isLoggedError ? (
                <Alert
                  message="The email or password is not valid."
                  type="error"
                />
              ) : (
                <p />
              )}
            </div>

            <Form.Item
              validateStatus={emailError ? "error" : ""}
              help={emailError || ""}
            >
              {getFieldDecorator("email", {
                rules: [
                  {
                    type: "email",
                    message: "The input is not valid E-mail!"
                  },
                  {
                    required: true,
                    message: "Please input your E-mail!"
                  }
                ]
              })(
                <Input
                  allowClear
                  prefix={
                    <Icon type="mail" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  placeholder="mail:admin@admin.com"
                />
              )}
            </Form.Item>
            <Form.Item
              validateStatus={passwordError ? "error" : ""}
              help={passwordError || ""}
            >
              {getFieldDecorator("password", {
                rules: [
                  { required: true, message: "Please input your Password!" }
                ]
              })(
                <Input
                  allowClear
                  prefix={
                    <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  type="password"
                  placeholder="password:admin"
                />
              )}
            </Form.Item>
          </TabPane>
          <TabPane tab="Phone Number" key="2">
            <Form.Item>
              {getFieldDecorator("phone")(
                <Input
                  prefix={
                    <Icon type="mobile" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  style={{ width: "100%" }}
                />
              )}
            </Form.Item>
            <Form.Item>
              <Row gutter={2}>
                <Col span={12}>
                  {getFieldDecorator("captcha")(
                    <Input
                      prefix={
                        <Icon
                          type="mail"
                          style={{ color: "rgba(0,0,0,.25)" }}
                        />
                      }
                    />
                  )}
                </Col>
                <Col offset={2} span={10}>
                  <Button block>Get captcha</Button>
                </Col>
              </Row>
            </Form.Item>
          </TabPane>
        </Tabs>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            block
            disabled={hasErrors(getFieldsError())}
          >
            Log in
          </Button>
          <Row gutter={0} style={{ paddingTop: "28px" }}>
            <Col span={12}>
              <Link to={`/houses`}>New account</Link>
            </Col>
            <Col span={12}>
              <Link to={`/houses`} style={{ float: "right" }}>
                Forget password
              </Link>
            </Col>
          </Row>
        </Form.Item>
      </Form>
    )
  }
}

HorizontalLoginForm.contextTypes = {
  router: PropTypes.object.isRequired
}
const LoginForm = Form.create({ name: "login" })(HorizontalLoginForm)
export default LoginForm
