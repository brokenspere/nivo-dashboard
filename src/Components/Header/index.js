import React from "react";
import { PageHeader, Tag, Button } from "antd";
import GraphDashboard from "../Grahps";

export default function index() {
  return (
    <PageHeader
      style={{ width: 1200, left: 300 }}
      title="Dashboard"
      tags={<Tag color="blue">Running</Tag>}
      subTitle="Project A"
      extra={[
        <Button key="3">Home</Button>,
        <Button key="2">Profile</Button>,
        <Button key="1" type="primary">
          Logout
        </Button>,
      ]}
    >
      <GraphDashboard />
    </PageHeader>
  );
}
