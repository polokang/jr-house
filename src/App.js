
import React, { Component } from "react";
import "./styles/login.css";
import "./App.css"
import "./styles/main.css"
import { Layout, Affix } from "antd"
import Footer from "./UI/Footer"
import Routes from "./Routes"
import LeftMenu from "./UI/LeftMenu"
import TopMenu from "./UI/TopMenu"
import Login from "./content/login";
import Loginchannel from "./content/Loginchannel";
import Register from "./content/register";
import Routes from "./App/Routes";
class App extends Component {
  state = {
    top: 0,
    bottom: 10
  }
  render() {
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

  }
}

export default App
