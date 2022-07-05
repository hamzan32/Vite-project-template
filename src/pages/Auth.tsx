import { Button, Col, Row } from 'antd';
import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import './Auth.scss';
function Auth() {
  const location = useLocation();
  return (
    <>
      <Row>
        <Col className="login-side" span={12}>
          <Outlet />
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
            {location.pathname.indexOf('sign-up') == -1 ? (
              <Button className="signup" type="text">
                <Link to="sign-up">Sign-Up</Link>
              </Button>
            ) : (
              <Button className="signup" type="text">
                <Link to="sign-in">Sign-In</Link>
              </Button>
            )}
          </div>
        </Col>
      </Row>
    </>
  );
}

export default Auth;
