import React from "react";
import {connect} from 'react-redux';

import moment from 'moment';

import {Carousel, message} from "antd";
import Plugin from "./Plugin";

import { fetchAllPluginsList } from "../../actions/plugins";

const mapStateToProps = state => {
    const {
        result,
        error
    } = state.plugins.list;
    return {
        result,
        error,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchPluginsList: () => dispatch(fetchAllPluginsList()),
    };
};

class Plugins extends React.Component {
    componentDidMount() {
        this.props.fetchPluginsList();
    }

    componentDidUpdate = () => {
        const {error} = this.props;
        if (error) {
            message.error('Impossible de récupérer les plugins.');
        }
    };
    render () {
        const plugins = this.props.result.map(p => {
            return {...p, date: moment(p.date).format("DD-MM-YYYY")};
        });

        plugins.push({"title": "And for more awesome tools...", "link": "/plugins/more", "linkAs": "Click me !"});

        return (
            <Carousel style={{minHeight: '90vh'}} >
                {plugins.map(p => <Plugin key={p.title} plugin={p}/>)}
        </Carousel>);
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Plugins);
