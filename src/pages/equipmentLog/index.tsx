import React, {useEffect, useState} from "react";
import {connect} from "dva";
import {PaginatedParams} from "ahooks/lib/useAntdTable/";
import {useAntdTable} from "ahooks";
import {
    Table,
    Button,
    Drawer,
    Modal,
    Form,
    Checkbox,
    Space,
    Input,
    Switch,
    Tree,
    message,
    Select,
    Radio,
    DatePicker
} from "antd";

const {TextArea} = Input;
const {Search} = Input;
const {Option} = Select;
const {Column} = Table;
const {RangePicker} = DatePicker;

import columns from './columns';
import TABLEJSON from './TABLEJSON.tsx';
import styles from "./style.module.less";
import {DeleteOutlined, PlusCircleOutlined} from "@ant-design/icons";
import zhCn from "antd/es/date-picker/locale/zh_CN";
import moment from "moment";


let searchData = {}
const EquipmentLog = (props: any) => {
    const {dispatch, select} = props;
    const [form] = Form.useForm();
    const [visible, setVisible] = useState(false);
    const [DETAIL, setDETAIL] = useState({}); /* 表格详情 */

    const [SELECTROWKEYS, setSELECTROWKEYS] = useState([]);  /* 选中项  */

    // 列表加载数据的方法
    //---------------
    const getTableData = (
        {current, pageSize}: PaginatedParams[0],
        formData: Object,
    ): Promise<any> => {
        return new Promise((resolve) => {

            // let list = listData.data.data;
            // console.log('test2 ', listData)
            // let total = listData.data.total;
            // resolve({
            //     list: list,
            //     total: total,
            // });

            dispatch({
                type: 'common/getRequestData',
                method: 'GET',
                url: columns.url,
                payload: {
                    pageNo: current,
                    pageSize,
                    'rbacToken': '7ed6a62261854a4eb27d844ff4df1885',
                    ...searchData
                },
                callback: (res: any) => {
                    if (res.success) {
                        let list = res.data;
                        console.log('test2 ', res)
                        let total = res.total;
                        resolve({
                            list: list,
                            total: total,
                        });
                    }

                },
            });
        });
    };

    const onFinish = (values: any) => {

        searchData = {
            deviceName: values.deviceName,
            issueResult: values.issueResult,
            "startTime": values.time[0].format("YYYY-MM-DD HH:mm:ss"),
            "endTime": values.time[1].format("YYYY-MM-DD HH:mm:ss"),
        }
        submit()

    };
    const {tableProps, search} = useAntdTable(getTableData, {
        defaultPageSize: 10,
        form
    });
    const {submit, reset} = search;

    return (<div className={styles['equipmentLog']}>
        <div className={styles['search']}>

            <Form
                layout={'inline'}
                form={form}
                onFinish={onFinish}>
                <Form.Item label="时间" name="time">
                    <RangePicker showTime locale={zhCn}/>
                </Form.Item>
                <Form.Item label="设备名称" name="deviceName">
                    <Input placeholder="请输入设备名称"/>
                </Form.Item>

                <Form.Item label="下发结果" name="issueResult">
                    <Radio.Group value={0} defaultValue={0}>
                        <Radio value={0}>全部</Radio>
                        <Radio value={1}>成功</Radio>
                        <Radio value={2}>失败</Radio>
                    </Radio.Group>
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit">查询</Button>
                    <Button htmlType="button" onClick={() => {
                        form.resetFields();
                        searchData = {}
                        submit()
                    }} style={{marginLeft: '10px'}}>
                        重置
                    </Button>
                </Form.Item>
            </Form>

        </div>

        <Table
            rowKey="id"
            scroll={{x: 1600}}
            {...tableProps}
            rowSelection={
                columns.checkBox
                    ? {
                        type: 'checkbox',
                        columnWidth: '5%',
                        selectedRowKeys: SELECTROWKEYS,
                        onChange: (selectedRowKeys: any) => {
                            setSELECTROWKEYS(selectedRowKeys);
                        }
                    }
                    : undefined
            }
        >
            {columns.tableColumns
                ? columns.tableColumns(props, tableProps).map((i: any, idx: number) => {
                    return (
                        <Column
                            key={idx}
                            {...i}
                            onCell={(): any => ({width: i.width})}
                            onHeaderCell={(): any => ({width: i.width})}
                        ></Column>
                    );
                })
                : null}
            {columns.operation && !!columns.operation.length ? (
                <Column
                    title="操作"
                    width={'10%'}
                    align="center"
                    fixed='right'
                    render={(text: any, record: any) => {
                        return (
                            <Space>
                                {!!columns.operation.length &&
                                columns.operation.map((item: any, idx: number) => {
                                    return (
                                        <a
                                            key={idx}
                                            onClick={() => {
                                                console.log(record);
                                                setDETAIL(record)
                                                setVisible(true)
                                            }}
                                        >
                                            {item.name}
                                        </a>
                                    );
                                })}
                            </Space>
                        );
                    }}
                ></Column>
            ) : null}
        </Table>


    </div>);
};

export default connect(({common, select}) => ({
    common,
    select
}))(EquipmentLog);
