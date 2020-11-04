import React from 'react';
import './register.css'
import logo from '../../img/logo.png'
import HeadTabar from "../../components/HeadTabar";
import {
    Form,
    Input,
    Row,
    Col,
    Button,
} from 'antd';
import {LockOutlined, UserOutlined} from '@ant-design/icons';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import {Link} from "react-router-dom";
import Footer from "../../components/Footer";

const formItemLayout = {
    labelCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 8,
        },
    },
    wrapperCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 16,
        },
    },
};
const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 16,
            offset: 8,
        },
    },
};


const Register = () =>{
    const [form] = Form.useForm();

    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };


    return (
        <div>
            <HeadTabar/>
             <div className="register-page">
        <Form
            {...formItemLayout}
            form={form}
            className="register-form"
            name="register"
            onFinish={onFinish}
            scrollToFirstError
        >
            <div className="login-logo">
                <img className="login-img" src={logo}/>
            </div>
            <Form.Item
                name="email"
                rules={[
                    {
                        type: 'email',
                        message: 'The input is not valid E-mail!',
                    },
                    {
                        required: true,
                        message: 'Please input your E-mail!',
                    },
                ]}
            >
                <Input className="register-email" prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" />
            </Form.Item>

            <Form.Item
                name="password"
                rules={[
                    {
                        required: true,
                        message: 'Please input your password!',
                    },
                ]}
                hasFeedback
            >
                <Input.Password
                       prefix={<LockOutlined className="site-form-item-icon"/>}
                       placeholder="password"
                       iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                />
            </Form.Item>
            <Form.Item
                name="confirm"
                dependencies={['password']}
                hasFeedback
                rules={[
                    {
                        required: true,
                        message: 'Please confirm your password!',
                    },
                    ({ getFieldValue }) => ({
                        validator(rule, value) {
                            if (!value || getFieldValue('password') === value) {
                                return Promise.resolve();
                            }

                            return Promise.reject('The two passwords that you entered do not match!');
                        },
                    }),
                ]}
            >
                <Input.Password
                       prefix={<LockOutlined className="site-form-item-icon"/>}
                       placeholder="Confirm Password"
                       iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                />
            </Form.Item>

            <Form.Item className="form-ver">
                <Row gutter={8} className="form-ver">
                    <Col span={12}>
                        <Form.Item
                            name="请输入验证码"
                            noStyle
                            rules={[
                                {
                                    required: true,
                                    message: '请输入您获得的验证码！!',
                                },
                            ]}
                        >
                            <Input className="input-ver"/>
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Button className="ver-btn">获取验证码</Button>
                    </Col>
                </Row>
            </Form.Item>

            <Form.Item {...tailFormItemLayout} className="register-log">
                <Button className="register-btn" type="primary" htmlType="submit">
                    Register
                </Button>
                <span className="to-login">Or <Link to="/login">login now!</Link></span>
            </Form.Item>
        </Form>
        </div>
            <Footer/>
        </div>
    );
}
export default Register;






