import React, { Component } from "react";
import { Layout } from "antd";

const { Sider } = Layout;

export default class NewSider extends Component {
  state = {
    collapsed: false
  };
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };


  
}
