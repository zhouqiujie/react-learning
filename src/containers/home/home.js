import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import { Layout, Button } from 'antd';
import { HeaderComponent, FooterComponent } from 'components';
import { MenuComponent } from './menu/menu';
import './home.scss';
import Page1 from './page1/page1';
import Page2 from './page2/page2';
import { getUser } from 'auth/adalAuth';
import { connect } from 'react-redux';
import { enrollFetching, userRoleassignmentsFetching, subsFetching } from 'redux/actions/user';

const { Content, Sider } = Layout;

const mapStateToProps = state => ({
    userProps: state.user
})



class Home extends Component {
    constructor(props) {
        super(props);
        // console.log(this.props)
        this.state = { child: true }
        console.log(process.env, process.env.REACT_APP_API_URL)
    }
    componentDidUpdate() {
        console.log(this.props)
        console.log(this.state)
    }

    componentDidMount() {
        const userInfo = getUser();
        this.props.enrollFetching(userInfo.profile.oid)
        this.props.userRoleassignmentsFetching(userInfo.userName)
        this.props.subsFetching()

        console.log(this.state)
        console.log(this.props)
    }

    click = () => {
        console.log(this.state)
        alert(JSON.stringify(this.state, null, 2))
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
                    <div className="text-danger">NODE_ENV:{process.env.NODE_ENV}</div>
                    <div className="text-danger">API_URL:{process.env.REACT_APP_API_URL}</div>
                        {this.props.userProps.roleAssignments.map((e, i) => (
                            <span key={i}>
                                <Button onClick={this.click}></Button>
                            </span>

                        )
                        )}
                        <Switch>
                            <Route exact path={`/home/page1`} component={Page1} />
                            <Route exact path="/home/page2" component={Page2} />
                            <Route>
                                <Page2 />
                            </Route>
                        </Switch>

                    </Content>
                </Layout>
            </Layout>
        )
    }
}

// export default Home;


export default connect(mapStateToProps, { userRoleassignmentsFetching, enrollFetching, subsFetching })(Home)