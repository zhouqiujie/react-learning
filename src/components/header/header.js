import React, { Component } from 'react';
import { Layout, Menu, Button, Icon } from 'antd';
import { Link } from 'react-router-dom';
import './header.css';
import { connect } from 'react-redux';
import { userLogin, userLogout } from 'redux/actions/user';

import { authContext, adalConfig } from 'auth/adalConfig';


const { Header } = Layout;

const mapStateToProps = state => {
    // console.log(state)
    return { userProps: state.user }
};

/* const mapDispatchToProps = dispatch => {
    return {
        login: () => dispatch({ type: 'USER_LOGIN' })
    }
} */

export class HeaderComponent extends Component {

    constructor(props) {
        super(props);
        const userInfo = authContext.getCachedUser() || { profile: {} };
        const id_token = authContext.getCachedToken(adalConfig.clientId)
        this.state = {
            userInfo, id_token
        }
        if (id_token) {
            this.props.userLogin({
                email: userInfo.userName,
                profile: userInfo.profile,
                name: userInfo.profile.name
            })
        } else {
            this.props.userLogout();
        }

    }


    componentDidMount() {

        // authContext.handleWindowCallback();
        console.log(this.props)
        // console.log(authContext.getCachedUser())
        // console.log(authContext.getCachedToken(adalConfig.clientId))

    }

    logIn = () => {
        authContext.login()

    }

    logOut = () => {
        authContext.logOut();
    }


    render() {
        return (
            <Header className="d-flex justify-content-between">
                <div className="d-flex ">
                    <a href="/" className="text-white flex-center">
                        <img src="/images/heart.png" width="40" height="40" alt="" />
                        <span className="ml-2">I AM A LOGO</span>
                    </a>
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

                <div>
                    {this.props.userProps.loggedIn ? (
                        <div className="text-white" title={this.props.userProps.email} style={{ 'cursor': 'pointer' }}>
                            <Icon type="smile" className="align-baseline" style={{ 'fontSize': '20px' }} />
                            <span className="ml-1">{this.props.userProps.name}</span>
                            <Button className="ml-2" type="link" onClick={this.logOut}>Logout</Button>
                        </div>
                    ) : (
                            <Button type="link" onClick={this.logIn}>Login</Button>
                        )}
                    {/* <Link to="/login"></Link> */}
                </div>
            </Header>
        );
    }
}

// export default HeaderComponent;

export default connect(mapStateToProps, { userLogin, userLogout })(HeaderComponent)