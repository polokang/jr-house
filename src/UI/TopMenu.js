import React, { Component } from "react"
import { Layout, Row, Col } from "antd"
import { Link } from "react-router-dom"
const { Header } = Layout

export default class LeftMenu extends Component {
  state = {}

  render() {
    return (
      <Header style={{ background: "#fff", padding: 0 }}>
        <Row>
          <Col span={4}>
            <img
              style={{ height: "64px", width: "100px" }}
              src="https://www.raywhite.com/wp-content/resources/uiframework/img/rw-logo-2017.svg"
              alt=""
            />
          </Col>
          <Col span={2} style={{ float: "right" }}>
            <Link to={`/houses`}>Logout</Link>
          </Col>
          <Col span={2} style={{ float: "right" }}>
            <Link to={`/houses`}>Login</Link>
          </Col>
        </Row>

        <div className="logo" />
      </Header>
    )
  }
}
