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
        this.state = { userProps: props.userProps || {} }
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
                        {this.props.userProps.roleAssignments.map((e, i) => (
                            <div key={i}>
                                <Button onClick={this.click}></Button>
                            </div>

                        )
                        )}
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

// export default Home;


export default connect(mapStateToProps, { userRoleassignmentsFetching, enrollFetching, subsFetching })(Home)