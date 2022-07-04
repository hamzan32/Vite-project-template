import React from 'react';

import { Button, Checkbox, Form, Input } from 'antd';
import { Col, Row } from 'antd';
import { useRoutes } from 'react-router-dom';
function SignUp() {
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <>
      <h3>Sign Up</h3>
      <Form
        name="signin"
        initialValues={{
          remember: false,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          name="email"
          hasFeedback
          label="Email address"
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}
          rules={[
            {
              required: true,
              message: 'Please input your email.',
            },
            {
              type: 'email',
              message: 'Your email is invalid.',
            },
          ]}
        >
          <Input placeholder="Email" size="large" />
        </Form.Item>

        <Form.Item
          name="password"
          hasFeedback
          label="Password"
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}
          rules={[
            {
              required: true,
              message: 'Please input your password.',
            },
            { min: 6, message: 'Password must be minimum 6 characters.' },
          ]}
        >
          <Input.Password placeholder="Password" size="large" />
        </Form.Item>

        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <a className="login-form-forgot" href="#">
            Forgot password?
          </a>
        </Form.Item>
        <div className="signin-button">
          <Button type="primary" htmlType="submit" shape="round" size="large">
            Sign In
          </Button>
        </div>
      </Form>
    </>
  );
}

export default SignUp;
