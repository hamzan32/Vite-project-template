import React from 'react';
import './SignIn.scss';
import { Button, Checkbox, Form, Input } from 'antd';
import { Col, Row } from 'antd';
function SignIn() {
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <>
      <Row>
        <Col className="login-side" span={12}>
          <h3>Sign in</h3>
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
              <Button
                type="primary"
                htmlType="submit"
                shape="round"
                size="large"
              >
                Sign In
              </Button>
            </div>
          </Form>
        </Col>
        <Col className="right-side" span={12}>
          <div className="content">
            <h2>HSI_TALK</h2>
            <h3>IMAGINE A PLACE...</h3>
            <p>
              where you can belong to a school club, a gaming group, or a
              worldwide art community. Where just you and a handful of friends
              can spend time together. A place that makes it easy to talk every
              day and hang out more often.
            </p>
            <Button className="signup" type="text">
              Sign Up
            </Button>
          </div>
        </Col>
      </Row>
    </>
  );
}

export default SignIn;
