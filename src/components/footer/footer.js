import React, { Component } from 'react';
import { Layout } from 'antd';

const { Footer } = Layout;

export class FooterComponent extends Component {
    render() {
        return (
            <Footer>
                copyright,license
            </Footer>
        );
    }
}

export default FooterComponent;
