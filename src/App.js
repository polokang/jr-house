import React, { Component } from "react";
import "./App.css";
import "./style/login.css";
import Login from "./login/login";
class App extends Component {
  render() {
    // const { SubMenu } = Menu;
    // const { Header, Content, Footer, Sider } = Layout;
    return (
      <div className="container">
       <Login/>
      </div>
    );
  }
}

export default App;
