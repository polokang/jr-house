import React, { Component } from "react";
import "./App.css";
import "./style/login.css";
import Login from "./content/login";
import Loginchannel from "./content/Loginchannel";
import Register from "./content/register";
class App extends Component {
  render() {
    // const { SubMenu } = Menu;
    // const { Header, Content, Footer, Sider } = Layout;
    return (
      <div className="container">
       {/* <Login/> */}
       {/* <Register/> */}
       <Loginchannel/>
      </div>
    );
  }
}

export default App;
