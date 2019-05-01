import React, { Component } from "react";
import "./App.css";
import "./styles/login.css";
import Login from "./content/login";
import Loginchannel from "./content/Loginchannel";
import Register from "./content/register";
import Routes from "./App/Routes";
class App extends Component {
  render() {
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
  }
}

export default App;
