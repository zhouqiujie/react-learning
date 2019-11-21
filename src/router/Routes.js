import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import App from './../App';
import { Home } from './../containers/home/index';
import { Intro } from './../containers/intro';

const Root = () => (
    <div className="Root">
        <Switch>
            <Route
                path="/"
                render={() => (
                    <App>
                        <Switch>
                            {/* <Route path="" exact component={Home} /> */}
                            <Route path="/home" component={Home} />
                            <Route path="/intro" component={Intro} />
                            <Route render={() => <Redirect to="/home"></Redirect>} />
                        </Switch>
                    </App>
                )}
            />
        </Switch>
    </div>
);

export default Root;