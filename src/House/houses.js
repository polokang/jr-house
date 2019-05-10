import React from "react"
import { Layout, Row, Col, Button, Icon } from "antd"
import { Link } from "react-router-dom"
import HouseCard from "./HouseCard"
import { fetchAllHouse } from "../Api/house"

export default class House extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      HouseList: [],
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

  componentDidMount() {
    fetchAllHouse().then(data => {
      this.setState({
        HouseList: data,
        HouseInfo: data[0]
      })
    })
  }
  render() {
    const { Content } = Layout
    const items = []
    for (const [key, value] of this.state.HouseList.entries()) {
      items.push(
        <Col span={8} style={{ paddingTop: 20 }} key={key}>
          <HouseCard HouseInfo={value} />
        </Col>
      )
    }
    return (
      <React.Fragment>
        <Content style={{ padding: "10px 10px" }}>
          <Link to={`/houses/edit/NEW`}>
            <Button type="primary" onClick={this.showDrawer}>
              <Icon type="plus" /> New House
            </Button>
          </Link>
          <Row type="flex" justify="start" gutter={12}>
            {items}
          </Row>
        </Content>
      </React.Fragment>
    )
  }
}
