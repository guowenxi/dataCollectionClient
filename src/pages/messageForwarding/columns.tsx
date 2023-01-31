import React from "react";

import {Badge, Switch, Tag} from "antd";

const columns = {
    "url": "/fyHome/dws-ppl-particular-baseinfo/selectDwsPplParticularBaseinfoPage",
    "params": {},
    "checkBox": true,
    "operation": [
        {"name": "踢除", "type": "disabled", "drawerWidth": "50"},
    ],
    "searchListType": "multipleQuery",
    "searchList": [
        {"title": "关键字", "type": "input", "key": "name", "placeholder": "请输入"},
    ],

    "tableColumns": [
        {
            title: 'IP地址',
            key: 'ipPort',
            dataIndex: 'ipPort',
            width: "10%",
            align: 'center',
        },
        {
            title: '状态',
            key: 'status',
            dataIndex: 'status',
            width: "10%",
            align: 'center',
            render: (text: any) => {
                if (text) {
                    return <Badge status="processing" text="已连接"/>
                } else {
                    return <Badge status="processing" text="未连接"/>
                }
            },
        },
        {
            title: '心跳(s)',
            key: 'heartbeat',
            dataIndex: 'heartbeat',
            width: "10%",
            align: 'center',
        },
        {
            title: '连接时间',
            key: 'connectionTime',
            dataIndex: 'connectionTime',
            width: "10%",
            align: 'center',
        },
    ],
    "mqttTableColumns": [
        {
            title: '客户端ID',
            key: 'channelId',
            dataIndex: 'channelId',
            width: "10%",
            align: 'center',
        },
        {
            title: '用户名',
            key: 'name',
            dataIndex: 'name',
            width: "10%",
            align: 'center',
        },
        {
            title: '状态',
            key: 'status',
            dataIndex: 'status',
            width: "10%",
            align: 'center',
            render: (text: any) => {
                if (text) {
                    return <Badge status="processing" text="已连接"/>
                } else {
                    return <Badge status="processing" text="未连接"/>
                }
            },
        },
        {
            title: '心跳(s)',
            key: 'heartbeat',
            dataIndex: 'heartbeat',
            width: "10%",
            align: 'center',
        },
        {
            title: '连接时间',
            key: 'connectionTime',
            dataIndex: 'connectionTime',
            width: "10%",
            align: 'center',
        },
    ],
    "blacklistTableColumns":[
        {
            title: '客户端ID',
            key: 'name',
            dataIndex: 'name',
            width: "10%",
            align: 'center',
        },
        {
            title: '用户名',
            key: 'sexValue',
            dataIndex: 'sexValue',
            width: "10%",
            align: 'center',
        },
        {
            title: '状态',
            key: 'name',
            dataIndex: 'name',
            width: "10%",
            align: 'center',
        },
        {
            title: 'IP地址',
            key: 'sexValue',
            dataIndex: 'sexValue',
            width: "10%",
            align: 'center',
        },
    ],
}
export default columns
