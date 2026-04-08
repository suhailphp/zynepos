import React from 'react';
import { Layout, Typography } from 'antd';

const { Title } = Typography;

const UsersPage: React.FC = () => {
  return (
    <>
      <Title>User Management</Title>
      <p>
        This is where the user list, user creation, and user editing forms will
        go.
      </p>
    </>
  );
};

export default UsersPage;
