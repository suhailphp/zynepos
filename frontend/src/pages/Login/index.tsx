import React from 'react';
import { Button, Form, Input, Layout, Typography, message } from 'antd';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const { Title } = Typography;
const { Content } = Layout;

export default function LoginPage() {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const { login } = useAuth();

  const onFinish = async (values: any) => {
    try {
      const apiUrl = process.env.REACT_APP_API_URL;
      const response = await axios.post(`${apiUrl}/auth/login`, {
        username: values.username,
        password: values.password,
      });
      message.success('Login successful!');
      login(response.data.access_token);
      navigate('/dashboard');
    } catch (error) {
      console.error('Failed:', error);
      message.error('Login failed. Please check your credentials.');
    }
  };

  return (
    <Layout style={{ minHeight: '100vh', display: 'grid', placeItems: 'center' }}>
      <Content style={{ padding: '50px', background: '#fff', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)' }}>
        <Title level={2} style={{ textAlign: 'center', marginBottom: '24px' }}>Zyne POS Login</Title>
        <Form
          form={form}
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          autoComplete="off"
          layout="vertical"
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
              Log In
            </Button>
          </Form.Item>
        </Form>
      </Content>
    </Layout>
  );
}
