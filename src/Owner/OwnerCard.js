import React from "react"
import { Card, Icon, Avatar } from "antd"

export default function OwnerCard(props) {
  const { OwnerInfo } = props
  const { Meta } = Card
  return (
    <Card
      style={{ width: 380 }}
      cover={<img alt="example" src={OwnerInfo.imgSrc} />}
      bordered
      hoverable
      actions={[
        <Icon type="setting" />,
        <Icon type="edit" />,
        <Icon type="ellipsis" />
      ]}
    >
      <Meta
        avatar={<Avatar src={OwnerInfo.avaSrc} />}
        title={OwnerInfo.title}
        description={OwnerInfo.desc}
      />
    </Card>
  )
}
