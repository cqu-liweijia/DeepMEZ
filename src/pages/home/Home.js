import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
// import {contentRoutes} from '../../routes/index'  //引入2级路由

import { Layout, Menu} from 'antd';
import './home.css'
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';

import HeadTabar from "../../components/HeadTabar";
import Footer from "../../components/Footer";

const {Content, Sider } = Layout;
// const routes = contentRoutes.filter( route => route.isShow);


class Home extends Component {
    go = ({item, key, keyPath, domEvent}) => {   //onClik那里虽然看不到传值,但是默认会传过来四个参数,详见官网
        this.props.history.push(key)   //编程式导航
    }
    render() {
        return (
            <div className="home-page">
                <HeadTabar/>
                <Layout className="home-main-content">
                    <Sider width={240} className="home-sider">
                        <Menu
                            theme="dark"
                            mode="inline"
                            defaultSelectedKeys={['0']}>
                            {/*{*/}
                            {/*    routes.map( route =>{*/}
                            {/*        return ( <Menu.Item*/}
                            {/*            icon={<UserOutlined />}*/}
                            {/*            className="home-menu-item"*/}
                            {/*            key={route.path}*/}
                            {/*            onClick={ p => this.props.history.push(p.key)}>*/}
                            {/*            {route.title}*/}
                            {/*        </Menu.Item>)*/}
                            {/*    })*/}
                            {/*}*/}
                            <Menu.Item  key="/home/content1"
                                        icon={<UserOutlined />}
                                        className="home-menu-item"
                                        onClick={this.go}
                            >
                                <span className="home-menu-item-span"> content1</span>
                            </Menu.Item>
                            <Menu.Item  key="/home/content2"
                                        icon={<VideoCameraOutlined />}
                                        className="home-menu-item"
                                        onClick={this.go}
                            >
                                <span className="home-menu-item-span"> content2</span>
                            </Menu.Item>
                            <Menu.Item  key="/home/content3"
                                        icon={<UploadOutlined />}
                                        className="home-menu-item"
                                        onClick={this.go}
                            >
                                <span className="home-menu-item-span"> content3</span>
                            </Menu.Item>
                            <Menu.Item  key="/home/content4"
                                        icon={<UserOutlined />}
                                        className="home-menu-item"
                                        onClick={this.go}
                            >
                                <span className="home-menu-item-span"> content4</span>
                            </Menu.Item>
                        </Menu>
                    </Sider>
                    <Layout style={{ padding: '0 ' }}>
                        <Content  className="site-layout-background" >
                            {this.props.children}
                            {/*这里接受·<Home>XXX</Home>传过来的XXX*/}
                        </Content>
                    </Layout>
                </Layout>
                <Footer/>
            </div>
            )
    }
}

export default withRouter(Home)

