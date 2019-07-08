import React from 'react';
import {Icon} from "antd";

function Plugin(props) {
    return (
        <div style={{color: 'white', padding: '100px'}}>
            <h1>{props.plugin.title}</h1>
            {props.plugin.date ? <h2><Icon type="calendar" /> {props.plugin.date}</h2> : ''}
            <p>{props.plugin.desc}</p>
            <h3><Icon type="link" /> <a href={props.plugin.link}>{props.plugin.linkAs}</a></h3>
            {props.plugin.author ? <h3><Icon type="user" /> {props.plugin.author}</h3> : ''}

        </div>
    )
}

export default Plugin;
