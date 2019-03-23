import React from "react"
import { Layout } from "antd"

export default class House extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    const { Content } = Layout
    return (
      <Content style={{ padding: "0 50px" }}>
        <Layout style={{ padding: "24px 0", background: "#fff" }}>
          <Content style={{ padding: "0 24px", minHeight: 280 }}>User</Content>
        </Layout>
      </Content>
    )
  }
}
