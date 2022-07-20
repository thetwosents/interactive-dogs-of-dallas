import React, { useEffect } from 'react';
import { Form, Input, Button } from 'antd';
import Link from 'next/link';
import { auth } from '../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

const Login = () => {
  const [form] = Form.useForm();

  const onFinish = values => {
    signInWithEmailAndPassword(auth, values.email, values.password)
      .then(() => {
        console.log('Successfully signed in');
      }
      ).catch(error => {
        console.log('Error signing in: ', error);
      }
      );
  }

  useEffect(() => {
    if (auth) {
      auth.onAuthStateChanged(user => {
        if (user) {
          // Route to /parks
          window.location.href = '/parks';
        } else {
          console.log('User is signed out');
        }
      }
      );
    }
  }, [auth]);
  return (
    <>
      <h1>Login</h1>
      <Form form={form} onFinish={onFinish}>
        <Form.Item name="email" rules={[{ required: true, message: 'Please input your email!' }]}>
          <Input placeholder="Username" />
        </Form.Item>
        <Form.Item name="password" rules={[{ required: true, message: 'Please input your password!' }]}>
          <Input placeholder="Password" />
        </Form.Item>
        <Form.Item >
          <Button type="primary" htmlType="submit">
            Login
          </Button>
        </Form.Item>
      </Form>
      <p>Need an account? <Link href="/signup">Sign Up</Link></p>
    </>
  )
}

export default Login;