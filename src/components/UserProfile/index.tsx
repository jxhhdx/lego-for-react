import React from 'react';
import { Button, Dropdown, Menu, message } from 'antd';
import { Link } from 'react-router-dom';
import { connect } from 'dva';
import { BaseProps, mapStateToProps } from '@/views/typing';
import './index.less';

const UserProfile: React.FC<BaseProps> = (props) => {
  const { user, dispatch, history } = props;
  const login = () => {
    dispatch({ type: 'login' });
    message.success('登录成功', 2);
  };
  const logout = () => {
    dispatch({ type: 'logout' });
    message.success('退出登录成功，2秒后跳转到首页', 2)
    setTimeout(() => {
      history.push('/');
    }, 2000)
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

export default connect(mapStateToProps)(UserProfile);