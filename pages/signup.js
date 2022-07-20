import React from 'react';
import { Form, Input, Button } from 'antd';
import Link from 'next/link';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';

const SignUp = () => {
  const [form] = Form.useForm();

  const onFinish = values => {
    console.log('Received values of form: ', values);
    createUserWithEmailAndPassword(auth, values.email, values.password)
      .then(() => {
        console.log('Successfully signed in');
      })
      .catch(error => {
        console.log('Error signing in: ', error);
      })      
  }
  return (
    <>
      <h1>Sign Up</h1>
      <Form form={form} onFinish={onFinish}>
        <Form.Item name="email" rules={[{ required: true, message: 'Please input your email!' }]}>
          <Input placeholder="Username" />
        </Form.Item>
        <Form.Item name="password" rules={[{ required: true, message: 'Please input your password!' }]}>
          <Input placeholder="Password" />
        </Form.Item>
        <Form.Item >
          <Input placeholder="Confirm Password" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Sign Up
          </Button>
        </Form.Item>
      </Form>
      <p>Already have an account? <Link href="/login">Login</Link></p>
    </>
  )
}

export default SignUp;