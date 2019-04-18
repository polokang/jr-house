<<<<<<< HEAD
import React, { Component } from "react";
import "./App.css";
import "./style/login.css";
import Login from "./content/login";
import Loginchannel from "./content/Loginchannel";
import Register from "./content/register";
<<<<<<< HEAD
=======
import React, { Component } from "react"
import "./App.css"
import "./styles/main.css"
import { Layout, Affix } from "antd"
import Footer from "./UI/Footer"
import Routes from "./Routes"
import LeftMenu from "./UI/LeftMenu"
import TopMenu from "./UI/TopMenu"

>>>>>>> ad2de924823e6b3d4a06d5a7f1a234c36163029f
=======
import Routes from "./App/Routes";
>>>>>>> Tony
class App extends Component {
  state = {
    top: 0,
    bottom: 10
  }
  render() {
<<<<<<< HEAD
    // const { SubMenu } = Menu;
    // const { Header, Content, Footer, Sider } = Layout;
    return (
      <div className="container">
       {/* <Login/> */}
       {/* <Register/> */}
       <Routes/>
       {/* <Loginchannel/> */}
      </div>
    );
=======
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
>>>>>>> ad2de924823e6b3d4a06d5a7f1a234c36163029f
  }
}

export default App
