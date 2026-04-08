import React from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import {
  Layout,
  Menu,
  theme,
  Avatar,
  Dropdown,
  MenuProps,
  Space,
  Typography,
  Input,
} from 'antd';
import {
  DashboardOutlined,
  UserOutlined,
  LogoutOutlined,
  HddOutlined, // Placeholder for logo
  SearchOutlined,
  BellOutlined,
} from '@ant-design/icons';
import { useAuth } from '../context/AuthContext';

const { Header, Content, Footer, Sider } = Layout;
const { Title } = Typography;

const MainLayout: React.FC = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const items: MenuProps['items'] = [
    {
      key: '1',
      label: 'View Profile',
    },
    {
      key: '2',
      label: 'Change Password',
    },
    {
      key: '3',
      danger: true,
      label: 'Logout',
      onClick: handleLogout,
      icon: <LogoutOutlined />,
    },
  ];

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider breakpoint="lg" collapsedWidth="0">
        <div style={{ height: '32px', margin: '16px', background: 'rgba(255, 255, 255, 0.2)', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
          <HddOutlined style={{ fontSize: '20px'}} />
          <span style={{ marginLeft: '8px', fontSize: '16px', fontWeight: 'bold'}}>Zyne POS</span>
        </div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['dashboard']}>
          <Menu.Item key="dashboard" icon={<DashboardOutlined />}>
            <Link to="/dashboard">Dashboard</Link>
          </Menu.Item>
          <Menu.Item key="users" icon={<UserOutlined />}>
            <Link to="/users">Users</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header style={{ padding: '0 24px', background: colorBgContainer, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          {/* Left side of header can have breadcrumbs or other nav later */}
          <div></div>
          
          {/* Right side of header */}
          <Space size="middle">
            <Input
              prefix={<SearchOutlined />}
              placeholder="Search..."
              style={{ width: 200 }}
            />
            <BellOutlined style={{ fontSize: '18px' }} />
            <Dropdown menu={{ items }} trigger={['click']}>
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  <Avatar icon={<UserOutlined />} />
                  <span>Current User</span>
                </Space>
              </a>
            </Dropdown>
          </Space>
        </Header>
        <Content style={{ margin: '24px 16px 0' }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Outlet /> {/* Child pages will be rendered here */}
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Zyne POS ©{new Date().getFullYear()}
        </Footer>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
