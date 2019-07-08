import React from "react";
import {connect} from 'react-redux';

import moment from 'moment';

import {message, Table} from "antd";

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

class PluginsList extends React.Component {
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

        const columns = [{
            title: "Nom de l'outil",
            dataIndex: 'title',
            key: 'title',
            sorter: (a, b) => a.title.localeCompare(b.title),
            sortDirections: ['descend', 'ascend'],
        }, {
            title: 'Partagé le',
            dataIndex: 'date',
            key: 'date',
            defaultSortOrder: 'descend',
            sorter: (a, b) =>  a > b,
            sortDirections: ['descend', 'ascend'],
        }, {
            title: 'Description',
            dataIndex: 'desc',
            key: 'desc',
        }, {
            title: 'Lien',
            dataIndex: 'link',
            key: 'link',
            render: (text, plugin) => (
                <a href={plugin.link}>{plugin.link}</a>
            )
        }, {
            title: 'Auteur',
            dataIndex: 'author',
            key: 'author',
        }];

        const locale = {
            filterConfirm: 'Ok',
            filterReset: 'Réinitialiser',
        };

        return (
            <Table
                pagination={{ pageSize: 7, total: this.props.result.length, defaultCurrent: 1 }}
                columns={columns} dataSource={plugins} rowKey="uuid" locale={locale}/>);
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PluginsList);
