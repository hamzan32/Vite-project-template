import React from 'react';
import './SignIn.scss';
import { Button, Checkbox, Form, Input } from 'antd';
function SignIn() {
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <>
      <div className="signin-box">
        <div className="form-signin">
          <h3>LogIn HSI Talk</h3>
          <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <p>User Name</p>
            <Form.Item
              name="username"
              rules={[
                { required: true, message: 'Please input your username!' },
              ]}
            >
              <Input />
            </Form.Item>
            <p>Password</p>
            <Form.Item
              name="password"
              rules={[
                { required: true, message: 'Please input your password!' },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              name="remember"
              valuePropName="checked"
              wrapperCol={{ offset: 8, span: 16 }}
            >
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
        <div className="logo">
          <img
            src="https://lh3.googleusercontent.com/GENuEyVu2vuoXEZ7bKKaXYQYtKhlXYJ4pgcKjBVppSCpGuqvruIU-AJ8Gw6CF_iG6i6hWg=s170"
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default SignIn;
