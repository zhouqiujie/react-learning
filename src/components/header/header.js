import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import './header.css';

const { Header } = Layout;

export class HeaderComponent extends Component {
    render() {
        return (
            <Header className="d-flex justify-content-between">
                <div className="d-flex ">
                    <div className="logo text-white">I AM A LOGO</div>
                    <Menu
                        className=""
                        theme="dark"
                        mode="horizontal"
                        selectable="false"
                        style={{ lineHeight: '64px', marginLeft: '50px' }}
                    >
                        <Menu.Item key="1">
                            <Link to="/home">Home</Link>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Link to="/intro">Introduction</Link>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <Link to="/intro/intro1">Introduction1</Link>
                        </Menu.Item>
                        <Menu.Item key="4">
                            <Link to="/intro/intro2">Introduction2</Link>
                        </Menu.Item>
                    </Menu>
                </div>

            </Header>
        );
    }
}

export default HeaderComponent;
