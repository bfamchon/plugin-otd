import React from 'react';
import {Icon, Layout} from 'antd';

import Home from '../components/home/Home';

const { Content, Footer } = Layout;

const HomePage = () => (
    <Layout className="layout" style={{minHeight: '100vh', backgroundColor: '#364d79'}}>
        <Content >
            <Home/>
        </Content>
        <Footer style={{ textAlign: 'center', backgroundColor: '#364d79', color: "white"}}>
            <p>PluginOTD - Build with <Icon type="heart" theme="filled" style={{color: 'red'}}/> by <a rel="noopener noreferrer" target="_blank" href="https://bfamchon.github.io/whoami/">bfamchon</a></p>
        </Footer>
    </Layout>
);
export default HomePage;
