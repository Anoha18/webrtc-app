import React, { useEffect } from 'react';
import { RouteComponentProps } from 'react-router';
import { Form, Input, Button, Checkbox, Row, Col } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import '../styles/login.page.scss';
import { login } from '../store/user/user.actions';
import { AppState } from '../store/types';

const LoginPage: React.FC<RouteComponentProps> = ({ history, location }) => {
  const dispatch = useDispatch();
  const loginLoading = useSelector((state: AppState) => state.user.login.loading);
  const user = useSelector((state: AppState) => state.user.user);

  useEffect(() => {
    if (user) {
      const locationState = location.state as any;
      const from = ((locationState || {}).from || {}).pathname;
      history.replace(from || '/');
    }
  }, [user])

  const onFinish = (values: any) => {
    dispatch(login({
      login: values.login,
      password: values.password,
    }));
  }

  return (
    <Row justify="center" align="middle" style={{ height: '100%' }}>
      <Col span={5}>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Form.Item
            name="login"
            rules={[{ required: true, message: 'Пожалуйста, введите имя пользователя!' }]}
          >
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Имя пользователя" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Пожалуйста, введите пароль!' }]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Пароль"
            />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button" loading={loginLoading}>
              Войти
            </Button>
            или <Link to="/register">зарегистрироваться!</Link>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
};

export default LoginPage;
