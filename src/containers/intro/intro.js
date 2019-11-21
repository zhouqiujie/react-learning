import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { Layout } from 'antd';
import { HeaderComponent, FooterComponent } from './../../components';
import './intro.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import Intro1 from './intro1/intro1';
import Intro2 from './intro2/intro2';

const { Header, Footer, Content } = Layout;

class Intro extends Component {
    render() {
        return (
            <Layout>
                <HeaderComponent></HeaderComponent>
                <Content className="site-main">
                    首页
                  <Switch>
                        <Route path="/intro/intro1" exact component={Intro1}></Route>
                        <Route path="/intro/intro2" exact component={Intro2}></Route>
                        <Route>
                            <Intro1 />
                        </Route>
                    </Switch>
                </Content>
                <FooterComponent></FooterComponent>
            </Layout>
        )
    }
}

export default Intro;