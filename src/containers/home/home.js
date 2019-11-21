import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import { Layout } from 'antd';
import { HeaderComponent, FooterComponent } from './../../components';
import { MenuComponent } from './menu/menu';
import './home.css';
import Page1 from './page1/page1';
import Page2 from './page2/page2';

const { Content, Sider } = Layout;

class Home extends Component {
    constructor(props){
        super(props);
        console.log(this.props)
        this.state = {...props}
    }
    render() {
        return (
            <Layout className="Home">
                <HeaderComponent />
                <Layout className="Main">
                    <Sider>
                        <MenuComponent />
                    </Sider>

                    <Content>

                        <Switch>
                            <Route exact path={`/home/page1`} component={Page1} />
                            <Route exact path="/home/page2" component={Page2} />
                            <Route>
                                <Page1 />
                            </Route>
                        </Switch>

                    </Content>
                </Layout>
            </Layout>
        )
    }
}

export default Home;