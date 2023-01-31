import React from "react";

const columns = {
    "url": "/fyHome/dws-ppl-particular-baseinfo/selectDwsPplParticularBaseinfoPage",
    "params": {},
    "checkBox": true,
    "operation": [
        // {"name": "编辑", "type": "disabled", "drawerWidth": "50"},
        // {"name": "下发", "type": "disabled", "drawerWidth": "50"},
        // {"name": "删除", "type": "disabled", "drawerWidth": "50"},
    ],
    "searchListType": "multipleQuery",
    "searchList": [
        {"title": "接口名称", "type": "input", "key": "name", "placeholder": "请输入接口名称"},
        {
            "title": "品牌",
            "type": "select",
            "key": "isReport",
            "placeholder": "请选择品牌",
            filterList: "listReport",
            sendType: "id"
        },
        {
            "title": "功能类型",
            "type": "select",
            "key": "isReport",
            "placeholder": "请选择功能类型",
            filterList: "listReport",
            sendType: "id"
        },
     ],

    "tableColumns": (props: any, tableProps: any, sorter: any) => {
        let current: number = tableProps.pagination.current;
        let pageSize: number = tableProps.pagination.pageSize;
        return [
            {
                title: '点位名称',
                key: 'name',
                dataIndex: 'name',
                width: "10%",
                align: 'center',
            },
            {
                title: '点位类型',
                key: 'sexValue',
                dataIndex: 'sexValue',
                width: "10%",
                align: 'center',
            },

            {
                title: '寄存器类型',
                dataIndex: 'birthday',
                key: 'birthday',
                width: "10%",
                align: 'center',

                render: (text: any, record: { birthday: string; }, index: any) => {
                    if (record.birthday) {
                        return record.birthday.substring(0, 10)
                    } else {
                        return ""
                    }
                },
            },
            {
                title: '地址',
                key: 'category',
                dataIndex: 'category',
                width: "10%",
                align: 'center',

                render: (text: any, record: { birthday: string; }, index: any) => {
                    return record.categoryValue
                },
            },
            {
                title: '数据类型',
                key: 'orgGridValue',
                dataIndex: 'orgGridValue',
                className: 'no-flex',
                width: "10%",
                align: 'center',
            },
            {
                title: '值',
                dataIndex: 'joinTime',
                key: 'joinTime',
                width: "10%",
                align: 'center',

                render: (text: any, record: { joinTime: string; }, index: any) => {
                    if (record.joinTime) {
                        return record.joinTime.substring(0, 4)
                    } else {
                        return ""
                    }
                },
            },
            {
                title: '质量戳',
                key: 'grade',
                dataIndex: 'grade',
                width: "10%",
                align: 'center',

                render: (text: any, record: any, index: any) => {
                    if (record.grade === 3) {
                        return (<span style={{color: '#DD1919'}}>{record.gradeValue}</span>)
                    }
                    if (record.grade === 2) {
                        return (<span style={{color: '#FFB045'}}>{record.gradeValue}</span>)
                    }
                    if (record.grade === 1) {
                        return (<span style={{color: '#61BEA5'}}>{record.gradeValue}</span>)
                    }
                }
            },
            {
                title: '时间戳',
                dataIndex: 'updateDate',
                key: 'updateDate',
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
            {
                title: '点位说明',
                key: 'informationIntegrity',
                dataIndex: 'informationIntegrity',
                width: "10%",
                align: 'center',

            },
        ];
    }
}
export default columns
