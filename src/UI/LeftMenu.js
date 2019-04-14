import React, { Component } from "react"
import { Layout, Menu, Icon, Input } from "antd"
import { Link } from "react-router-dom"

const { Sider } = Layout
const { Search } = Input

export default class LeftMenu extends Component {
  state = {
    collapsed: false
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    })
  }

  render() {
    return (
      <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
        <Search
          placeholder="input search text"
          onSearch={value => console.log(value)}
        />
        <Menu theme="light" mode="inline" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1">
            <Link to={`/houses`}>
              <Icon type="home" />
              <span>House</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to={`/owners`}>
              <Icon type="user" />
              <span>Owner</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to={`/users`}>
              <Icon type="setting" />
              <span>Setting</span>
            </Link>
          </Menu.Item>
        </Menu>
      </Sider>
    )
  }
}
