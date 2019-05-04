import React from "react"
import { Layout, Row, Col, Button, Icon } from "antd"
import { Link } from "react-router-dom"
import OwnerCard from "./OwnerCard"
import { getAllOwners } from "../Api/owner"

export default class Owner extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      OwnerList: []
    }
  }

  componentDidMount() {
    getAllOwners().then(data => {
      this.setState({
        OwnerList: data,
        OwnerInfo: data[0]
      })
    })
  }

  render() {
    const { Content } = Layout
    const items = []
    for (const [, value] of this.state.OwnerList.entries()) {
      items.push(
        <Col span={8} style={{ paddingTop: 20 }}>
          <OwnerCard OwnerInfo={value} />
        </Col>
      )
    }
    return (
      <React.Fragment>
        <Content style={{ padding: "10px 10px" }}>
          <Link to={`/owners/edit/NEW`} getFieldDecorator="">
            <Button type="primary" onClick={this.showDrawer}>
              <Icon type="plus" /> New Owner
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
