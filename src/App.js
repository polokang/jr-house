import React, { Component } from "react"
import "./App.css"
import "./styles/main.css"
import { Layout, Menu } from "antd"
import Footer from "./UI/Footer"
import Routes from "./Routes"
import { Link } from "react-router-dom"

class App extends Component {
  render() {
    const { Header } = Layout

    return (
      <div>
        <Layout>
          <Header className="header">
            <div className="logo" />
            <Menu
              theme="light"
              mode="horizontal"
              defaultSelectedKeys={["2"]}
              style={{ lineHeight: "64px" }}
            >
              <Menu.Item key="1">
                <Link to={`/houses`}>House 1</Link>
              </Menu.Item>

              <Menu.Item key="2">
                <Link to={`/users`}>User</Link>
              </Menu.Item>
              <Menu.Item key="3">Admin</Menu.Item>
            </Menu>
          </Header>

          <Routes />

          <Footer />
        </Layout>
      </div>
    )
  }
}

export default App
