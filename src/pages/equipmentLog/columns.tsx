import React from "react";

import {Switch, Tag} from "antd";

const columns = {
    "url": "http://192.168.1.244:8006/home_page/log/management/getPageDeviceLogRecord",
    "params": {},
    "checkBox": false,
    "operation": [
        // {"name": "查看", "type": "disabled", "drawerWidth": "50"},
        // {"name": "编辑", "type": "disabled", "drawerWidth": "50"},
        // {"name": "删除", "type": "disabled", "drawerWidth": "50"},
    ],
    "searchListType": "multipleQuery",
    "searchList": [
        {"title": "关键字", "type": "input", "key": "name", "placeholder": "请输入"},
    ],
    "tableColumns": (props: any, tableProps: any, sorter: any) => {
        let current: number = tableProps.pagination.current;
        let pageSize: number = tableProps.pagination.pageSize;
        return [
            {
                title: '操作时间',
                key: 'createTime',
                dataIndex: 'createTime',
                width: "10%",
                align: 'center',
            },
            {
                title: '设备名称',
                key: 'deviceName',
                dataIndex: 'deviceName',
                width: "10%",
                align: 'center',
            },
            {
                title: '点位',
                key: 'pointsName',
                dataIndex: 'pointsName',
                width: "10%",
                align: 'center',
            },
            {
                title: '操作类型',
                key: 'operationType',
                dataIndex: 'operationType',
                width: "10%",
                align: 'center',
            },
            {
                title: '操作路径',
                key: 'operationUrl',
                dataIndex: 'operationUrl',
                width: "10%",
                align: 'center',
            },
            {
                title: '下发值',
                key: 'issueValue',
                dataIndex: 'issueValue',
                width: "5%",
                align: 'center',
            },
            {
                title: '下发结果',
                key: 'issueResult',
                dataIndex: 'issueResult',
                width: "10%",
                align: 'center',
            },
            {
                title: '操作账号',
                key: 'operationAccount',
                dataIndex: 'operationAccount',
                width: "10%",
                align: 'center',
            },
            {
                title: '操作IP',
                key: 'operationIp',
                dataIndex: 'operationIp',
                width: "10%",
                align: 'center',
            },
        ];
    }
}
export default columns
