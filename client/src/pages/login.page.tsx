import React from 'react';
import { RouteComponentProps } from 'react-router';
import { Form, Input, Button, Checkbox, Row, Col } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

import '../styles/login.page.scss';

const LoginPage: React.FC<RouteComponentProps> = (props) => {
  const onFinish = (values: any) => {
    console.log('HERE VALUES: ', values);
    
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
            <Button type="primary" htmlType="submit" className="login-form-button">
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
