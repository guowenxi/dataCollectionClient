import React from "react";
import { Tooltip,Space } from 'antd';

const columns = {
    "url": "/api/point-position",
    "params": {},
    "checkBox": true,
    "operation": (record: any) => {
        let _list = []
        if (record?.pointType?.typeCode === 2 || record?.pointType?.typeCode === 4) {
            _list = [
                {"name": "编辑", "type": "disabled", "drawerWidth": "50"},
                {"name": "下发", "type": "disabled", "drawerWidth": "50"},
            ]
        } else {
            _list = [
                {"name": "编辑", "type": "disabled", "drawerWidth": "50"},
            ]
        }
        return _list
    },
    "searchListType": "multipleQuery",
    "searchList": [
        {"title": "设备名称", "type": "input", "key": "name", "placeholder": "请输入设备名称"},
        {
            "title": "协议类型",
            "type": "select",
            "key": "isReport",
            "placeholder": "请选择协议类型",
            filterList: "listReport",
            sendType: "id"
        },
        {
            "title": "协议类型",
            "type": "radio",
            "key": "radioValue",
            filterList: "listReport",
            sendType: "id"
        },
    ],
    "tableColumns": () => {
        return [
            {
                title: '点位名称',
                key: 'name',
                dataIndex: 'name',
                width: "15%",
                align: 'center',
            },
            {
                title: '点位类型',
                width: "5%",
                align: 'center',
                render: (text: any, record: { pointType: object; }, index: any) => {
                    if (record.pointType) {
                        return record.pointType?.typeName
                    } else {
                        return ""
                    }
                },
            },
            {
                title: '寄存器类型',
                width: "15%",
                align: 'center',
                render: (text: any, record: { registerType: object; }, index: any) => {
                    if (record.registerType) {
                        return record.registerType?.typeName
                    } else {
                        return ""
                    }
                },
            },
            {
                title: '地址',
                key: 'address',
                dataIndex: 'address',
                width: "5%",
                align: 'center',
            },
            {
                title: '数据类型',
                className: 'no-flex',
                width: "5%",
                align: 'center',
                render: (text: any, record: { dataType: object; }, index: any) => {
                    if (record.dataType) {
                        return record.dataType?.typeName
                    } else {
                        return ""
                    }
                },
            },
            {
                title: '值',
                dataIndex: 'value',
                key: 'value',
                width: "5%",
                align: 'center',
            },
            {
                title: '质量戳',
                key: 'stampOfMass',
                dataIndex: 'stampOfMass',
                width: "5%",
                align: 'center',
                render: (text: any) => {
                    return text == "1" ? "good" : "-bad"
                },
            },
            {
                title: '时间戳',
                dataIndex: 'timeStamp',
                key: 'timeStamp',
                width: "10%",
                align: 'center',
            },
            {
                title: '点位说明',
                key: 'explain',
                dataIndex: 'explain',
                width: "30%",
                align: 'left',
                // render: (explain:any) => (
                //     <Tooltip placement="topLeft" title={explain}>
                //         {explain}
                //     </Tooltip>
                // ),
            },
        ];
    }
}
export default columns
