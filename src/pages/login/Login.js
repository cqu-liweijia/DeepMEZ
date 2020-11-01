import React from "react"
import {Link} from "react-router-dom"
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './login.css'
import logo from '../../img/logo.png'
import HeadTabar from "../../components/HeadTabar";
import Footer from "../../components/Footer";

const Login = () => {
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };

    return (
        <div>
            <HeadTabar/>
            <div className="login-page">
            <Form
                name="normal_login"
                className="login-form"
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
            >
                <div className="login-logo">
                    <img className="login-img" src={logo}/>
                </div>
                <Form.Item
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Email!',
                        },
                    ]}
                >
                    <Input className="login-email" prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" />
                </Form.Item>
                <Form.Item
                    className="login-password"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Password!',
                        },
                    ]}
                >
                    <Input
                        className="password"
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="Password"
                    />
                </Form.Item>
                <Form.Item className="remember">
                    <Form.Item   name="remember" valuePropName="checked" noStyle>
                        <Checkbox className="remember-me">Remember me</Checkbox>
                    </Form.Item>
                    <a className="forget-password" href=""> Forgot password</a>
                </Form.Item>

                <Form.Item className="log-register">
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Log in
                    </Button>
                    <span className="to-register">Or <Link to="/register">register now!</Link></span>
                </Form.Item>
            </Form>
        </div>
            <Footer/>
        </div>
    );
};

export default Login;
