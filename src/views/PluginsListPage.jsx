import React from 'react';
import {Icon, Layout} from 'antd';

import PluginsList from "../components/plugins/PluginsList";

const { Content, Footer } = Layout;

const HomePage = () => (
    <Layout className="layout" style={{minHeight: '100vh'}}>
        <Content style={{padding: 50}}>
            <PluginsList/>
        </Content>
        <Footer style={{ textAlign: 'center'}}>
            <p>PluginOTD - Build with <Icon type="heart" theme="filled" style={{color: 'red'}}/> by <a rel="noopener noreferrer" target="_blank" href="https://bfamchon.github.io/whoami/">bfamchon</a></p>
        </Footer>
    </Layout>
);
export default HomePage;
