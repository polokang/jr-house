import React from "react"
import { addOwner } from "../Api/owner"
import {
  Form,
  Input,
  Tooltip,
  Icon,
  Cascader,
  Select,
  Button,
  Upload
} from "antd"
const { Option } = Select

const company = [
  {
    value: "Queensland",
    label: "Queensland",
    children: [
      {
        value: "Brisbane",
        label: "Brisbane",
        children: [
          {
            value: "Ray White",
            label: "Ray White"
          }
        ]
      }
    ]
  },
  {
    value: "New South Wales",
    label: "New South Wales",
    children: [
      {
        value: "Sydney",
        label: "Sydney",
        children: [
          {
            value: "Real State",
            label: "Real State"
          }
        ]
      }
    ]
  }
]

class OwnerEditView extends React.Component {
  state = {
    confirmDirty: false,
    autoCompleteResult: [],
    myFile: null
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        values.fullName = values.firstName + " " + values.lastName
        let company = {}
        company.state = values.company[0]
        company.city = values.company[1]
        company.companyName = values.company[2]
        values.company = company
        addOwner(values, this.state.myFile)
        this.props.history.push("/owners")
      }
    })
  }

  normFile = e => {
    this.setState({ myFile: e.file.originFileObj })
    if (Array.isArray(e)) {
      return e
    }
    return e && e.fileList
  }

  render() {
    const { getFieldDecorator } = this.props.form
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 }
      }
    }
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0
        },
        sm: {
          span: 16,
          offset: 8
        }
      }
    }
    const prefixSelector = getFieldDecorator("prefix", {
      initialValue: "61"
    })(
      <Select style={{ width: 70 }}>
        <Option value="61">+61</Option>
        <Option value="86">+86</Option>
      </Select>
    )

    return (
      <div
        style={{
          width: "100%",
          paddingRight: "100px",
          backgroundColor: "white"
        }}
      >
        <Form {...formItemLayout} onSubmit={this.handleSubmit}>
          <Form.Item
            label={
              <span>
                First Name&nbsp;
                <Tooltip title="What do you want others to call you?">
                  <Icon type="question-circle-o" />
                </Tooltip>
              </span>
            }
          >
            {getFieldDecorator("firstName", {
              rules: [
                {
                  required: true,
                  message: "Please input your firstName!",
                  whitespace: true
                }
              ]
            })(<Input />)}
          </Form.Item>

          <Form.Item
            label={
              <span>
                Last Name&nbsp;
                <Tooltip title="What do you want others to call you?">
                  <Icon type="question-circle-o" />
                </Tooltip>
              </span>
            }
          >
            {getFieldDecorator("lastName", {
              rules: [
                {
                  required: true,
                  message: "Please input your lastName!",
                  whitespace: true
                }
              ]
            })(<Input />)}
          </Form.Item>

          <Form.Item label="Phone Number">
            {getFieldDecorator("phone", {
              rules: [
                { required: true, message: "Please input your phone number!" }
              ]
            })(
              <Input addonBefore={prefixSelector} style={{ width: "100%" }} />
            )}
          </Form.Item>
          <Form.Item label="E-mail">
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
            })(<Input />)}
          </Form.Item>

          <Form.Item label="Your Company">
            {getFieldDecorator("company", {
              initialValue: ["QLD", "Brisbane", "Ray White"],
              rules: [
                {
                  type: "array",
                  required: true,
                  message: "Please select your company!"
                }
              ]
            })(<Cascader options={company} />)}
          </Form.Item>

          <Form.Item label="Introduction">
            {getFieldDecorator("desc")(<Input.TextArea />)}
          </Form.Item>

          <Form.Item label="Upload" extra="Upload Avatar">
            {getFieldDecorator("upload", {
              valuePropName: "fileList",
              getValueFromEvent: this.normFile
            })(
              <Upload name="logo" listType="picture">
                <Button>
                  <Icon type="upload" /> Click to upload
                </Button>
              </Upload>
            )}
          </Form.Item>

          <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit">
              Register
            </Button>
          </Form.Item>
        </Form>
      </div>
    )
  }
}
const WrappedHorizontalLoginForm = Form.create()(OwnerEditView)
export default WrappedHorizontalLoginForm
