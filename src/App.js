import React, { Component } from "react"
import "./App.css"
import "./styles/main.css"
import { Layout, Affix } from "antd"
import Footer from "./UI/Footer"
import Routes from "./Routes"
import LeftMenu from "./UI/LeftMenu"
import TopMenu from "./UI/TopMenu"
import LoginForm from "./UI/Login"
import { isLoggedIn } from "./Api/auth"

class App extends Component {
  state = {
    top: 0,
    bottom: 10
  }
  render() {
    if (isLoggedIn()) {
      return (
        <Layout>
          <Affix offsetTop={this.state.top}>
            <TopMenu />
          </Affix>

          <Layout>
            <Layout>
              <LeftMenu />
              <Routes />
            </Layout>
          </Layout>

          <Footer />
        </Layout>
      )
    } else {
      return (
        <Layout>
          <Affix offsetTop={this.state.top}>
            <TopMenu />
          </Affix>

          <Layout style={{ alignItems: "center" }}>
            <div className="antd-pro-pages-user-login-main">
              <LoginForm />
            </div>
          </Layout>

          <Footer />
        </Layout>
      )
    }
  }
}

export default App
