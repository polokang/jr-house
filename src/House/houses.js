import React from "react"
import { Layout, Row, Col } from "antd"
import HouseCard from "./HouseCard"

export default class House extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      HouseInfo: {
        imgSrc:
          "https://cdn6.ep.dynamics.net/s3/rw-propertyimages/6dbb-H2082518-hires.31491-74-Malbon-213.jpg.ashx?width=720&height=540&mode=crop&scale=both&anchor=middlecenter&quality=80",
        avaSrc:
          "https://cdn6.ep.dynamics.net/s3/rw-media/memberphotos/738f67e2-99db-4ab2-b49a-88d29ffd2b69.jpg?mode=pad&scale=both&maxwidth=285&quality=80&anchor=middleleft&format=png",
        title: "74 Malbon St,Sunny Bank",
        desc:
          "This home contains three bedrooms, two bathrooms, solid brick construction."
      }
    }
  }
  render() {
    const { Content } = Layout
    const { HouseInfo } = this.state
    return (
      <Content style={{ padding: "10px 10px" }}>
        <Row style={{ paddingTop: "10px" }}>
          <Col span={8}>
            <HouseCard HouseInfo={HouseInfo} />
          </Col>
          <Col span={8}>
            <HouseCard HouseInfo={HouseInfo} />
          </Col>
          <Col span={8}>
            <HouseCard HouseInfo={HouseInfo} />
          </Col>
        </Row>
        <Row style={{ paddingTop: "10px" }}>
          <Col span={8}>
            <HouseCard HouseInfo={HouseInfo} />
          </Col>
          <Col span={8}>
            <HouseCard HouseInfo={HouseInfo} />
          </Col>
          <Col span={8}>
            <HouseCard HouseInfo={HouseInfo} />
          </Col>
        </Row>
      </Content>
    )
  }
}
