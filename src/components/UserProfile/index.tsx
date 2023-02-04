import React from 'react';
import { Button, Dropdown, Menu } from 'antd';
import { Link } from 'dva/router';
import type { UserProps } from '@/models/types';
import './index.less';

type IProps = {
  user: UserProps;
}
const UserProfile: React.FC<IProps> = (props) => {
  const { user } = props;
  const login = () => {
    console.log('login');
  };
  const logout = () => {
    console.log('logout');
  };
  return (
    <>
      {user.isLogin ? (
        <div>
          <Dropdown
            className="user-profile-component"
            dropdownRender={() => (
              <Menu className="user-profile-dropdown">
                <Menu.Item key="0" onClick={logout}>登出</Menu.Item>
              </Menu>
            )}
          >
            <Link to="/setting">{user.userName}</Link>
          </Dropdown>
        </div>
      ) : (
        <Button
          type="primary"
          className="user-profile-component"
          onClick={login}
        >
          登录
        </Button>
      )}
    </>
  );
};

export default UserProfile;