import React from "react";

import {Badge, Input, Switch, Tag} from "antd";

const columns = {
    "url": "/data-acquisition/role-info",
    "params": {},
    "checkBox": true,
    "operation": [
        {"name": "查看用户", "type": "disabled", "drawerWidth": "50"},
        {"name": "编辑", "type": "disabled", "drawerWidth": "50"},
        {"name": "删除", "type": "disabled", "drawerWidth": "50"},
    ],
    "userOperation": [
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
                title: '角色名称',
                key: 'roleName',
                dataIndex: 'roleName',
                width: "10%",
                align: 'center',
            },

            {
                title: '实际成员',
                width: "10%",
                align: 'center',
                render: (text: any, record: any, index: any) => {
                    return record.userInfo.length + "人"
                },
            },


            {
                title: '页面权限',
                width: "10%",
                align: 'center',
                render: (text: any, record: any, index: any) => {
                    return record.pageAuthority.typeName
                },
            },


            {
                title: '操作权限',
                width: "10%",
                align: 'center',
                render: (text: any, record: any, index: any) => {
                    return record.operationAuthority.typeName
                },
            },


            {
                title: '角色权限',
                key: 'jurisdictionDeadline',
                dataIndex: 'jurisdictionDeadline',
                width: "10%",
                align: 'center',
            },

            // {
            //     title: '停用/启用',
            //     key: 'category',
            //     dataIndex: 'category',
            //     width: "10%",
            //     align: 'center',
            //     render: (text: any, record: any, index: any) => {
            //         return <Switch checkedChildren="开启" unCheckedChildren="停用"
            //                        defaultChecked={record.status===1?true:false}/>
            //     },
            // },
        ];
    },
    "userTableColumns": [
        {
            title: '用户名',
            key: 'username',
            dataIndex: 'username',
            width: "8%",
            align: 'center',
        },
        {
            title: '手机号',
            key: 'phone',
            dataIndex: 'phone',
            width: "10%",
            align: 'center',
        },
        {
            title: '密码',
            key: 'password',
            dataIndex: 'password',
            width: "8%",
            align: 'center',
            render: (text: any, record: any, index: any) => {
                return <Input.Password bordered={false} value={text} placeholder="input password"/>
            }
        },
    ]
}
export default columns
