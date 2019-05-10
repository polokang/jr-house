import React from "react"
import { Card, Icon } from "antd"

const gridStyle = {
  width: "100%",
  textAlign: "left",
  padding: "15px 0px 15px 15px"
}

const pStyle = {
  margin: "0px",
  fontWeight: "bold"
}

export default function OwnerCard(props) {
  const { OwnerInfo } = props
  return (
    <Card
      style={{ width: 380, height: 420 }}
      cover={
        <img style={{ height: 250 }} alt="example" src={OwnerInfo.imgSrc} />
      }
      bordered
      hoverable
      actions={[
        <Icon type="twitter" />,
        <Icon type="edit" />,
        <Icon type="ellipsis" />
      ]}
    >
      <Card.Grid style={gridStyle}>
        <p style={pStyle}>
          <Icon type="smile" /> {OwnerInfo.fullName}
        </p>
        <p style={pStyle}>
          <Icon type="phone" /> {OwnerInfo.phone}
        </p>
        <p style={pStyle}>
          <Icon type="bank" /> {OwnerInfo.company}
        </p>
        {OwnerInfo.desc}
      </Card.Grid>
    </Card>
  )
}
