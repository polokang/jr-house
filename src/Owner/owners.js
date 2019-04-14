import React from "react"
import { Layout, Row, Col } from "antd"
import OwnerCard from "./OwnerCard"

export default class Owner extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      OwnerInfo: {
        imgSrc:
          "https://cdn6.ep.dynamics.net/s3/rw-media/memberphotos/2bcb527a-a824-4074-a000-60bddbf0402e.jpg?mode=pad&scale=both&maxwidth=285&quality=80&anchor=middleleft&format=png",
        avaSrc:
          "https://www.raywhite.com/wp-content/resources/uiframework/img/rw-logo-2017.svg",
        title: "Ela Milne",
        desc:
          "Senior Sales and Marketing Consultant, Ray White Eight Mile Plains."
      }
    }
  }
  render() {
    const { Content } = Layout
    const { OwnerInfo } = this.state
    return (
      <Content style={{ padding: "10px 10px" }}>
        <Row style={{ paddingTop: "10px" }}>
          <Col span={8}>
            <OwnerCard OwnerInfo={OwnerInfo} />
          </Col>
          <Col span={8}>
            <OwnerCard OwnerInfo={OwnerInfo} />
          </Col>
          <Col span={8}>
            <OwnerCard OwnerInfo={OwnerInfo} />
          </Col>
        </Row>
        <Row style={{ paddingTop: "10px" }}>
          <Col span={8}>
            <OwnerCard OwnerInfo={OwnerInfo} />
          </Col>
          <Col span={8}>
            <OwnerCard OwnerInfo={OwnerInfo} />
          </Col>
          <Col span={8}>
            <OwnerCard OwnerInfo={OwnerInfo} />
          </Col>
        </Row>
      </Content>
    )
  }
}
