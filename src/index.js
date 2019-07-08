import React from 'react';
import 'antd/dist/antd.css';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import {Route, Switch} from 'react-router';
import store from './store';
import HomePage from './views/HomePage';
import PluginsListPage from './views/PluginsListPage';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import './index.css';

render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={HomePage}/>
                <Route exact path="/plugins/more" component={PluginsListPage}/>
            </Switch>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
