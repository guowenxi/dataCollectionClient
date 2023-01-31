import React from "react";

import {Switch, Tag} from "antd";

const columns = {
    "url": "/fyHome/dws-ppl-particular-baseinfo/selectDwsPplParticularBaseinfoPage",
    "params": {},
    "checkBox": true,
    "operation": [
        {"name": "查看", "type": "disabled", "drawerWidth": "50"},
        {"name": "编辑", "type": "disabled", "drawerWidth": "50"},
        {"name": "删除", "type": "disabled", "drawerWidth": "50"},
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
                title: '转发名称',
                key: 'name',
                dataIndex: 'name',
                width: "10%",
                align: 'center',
            },
            {
                title: '转发方式',
                key: 'sexValue',
                dataIndex: 'sexValue',
                width: "5%",
                align: 'center',
                render: (text: any, record: { birthday: string; }, index: any) => {
                    return <Tag color="#2db7f5">MQTT</Tag>
                },
            },
            {
                title: '启用状态',
                key: 'category',
                dataIndex: 'category',
                width: "10%",
                align: 'center',
                render: (text: any, record: { birthday: string; }, index: any) => {
                    return <Switch checkedChildren="开启" unCheckedChildren="禁用" defaultChecked/>
                },
            },
            {
                title: '描述',
                key: 'orgGridValue',
                dataIndex: 'orgGridValue',
                className: 'no-flex',
                width: "10%",
                align: 'center',
            },
            {
                title: '修改时间',
                dataIndex: 'joinTime',
                key: 'joinTime',
                width: "10%",
                align: 'center',

                render: (text: any, record: { joinTime: string; }, index: any) => {
                    if (record.joinTime) {
                        return record.joinTime.substring(0, 10)
                    } else {
                        return ""
                    }
                },
            },
        ];
    }
}
export default columns
