import React from 'react';
import { Layout, Typography } from 'antd';

const { Title } = Typography;
const { Content } = Layout;

export default function DashboardPage() {
  return (
    <Layout>
      <Content style={{ padding: '50px' }}>
        <Title>Dashboard</Title>
        <p>Welcome to the Zyne POS Dashboard.</p>
      </Content>
    </Layout>
  );
}
