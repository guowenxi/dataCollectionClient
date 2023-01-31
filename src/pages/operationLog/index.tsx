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
import moment from "moment";

const {Option} = Select;
const {Column} = Table;

const {RangePicker} = DatePicker;
import zhCn from 'antd/lib/date-picker/locale/zh_CN';

import columns from './columns';
import TABLEJSON from './TABLEJSON.tsx';
import listData from './data.ts';
import TableInfo from '@/components/TableInfo/TableInfo';
import SearchMore from "@/components/SearchMore/SearchMore";
import styles from "./style.module.less";
import {DeleteOutlined, PlusCircleOutlined} from "@ant-design/icons";
import {log} from "util";


let searchData = {}
const OperationLog = (props: any) => {
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
                    ...formData
                },
                callback: (res: any) => {
                    if (res.success) {
                        let list = res.data;
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
        console.log(values);

        searchData = {
            operationAccount: values.operationAccount,
            operationModule: values.operationModule,
            operationType: values.operationType,
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
    return (<div className={styles['operationLog']}>
        <div className={styles['search']}>

            <Form
                layout={'inline'}
                form={form}
                onFinish={onFinish}
            >
                <Form.Item label="操作账号" name="operationAccount">
                    <Input placeholder="请输入设备名称"/>


                    {/*<Select*/}
                    {/*    placeholder="请选择操作账号"*/}
                    {/*    onChange={() => {*/}
                    {/*    }}*/}
                    {/*    allowClear style={{width: "170px"}}*/}
                    {/*>*/}


                    {/*    {*/}
                    {/*        select?.agreement_type?.map(item => {*/}
                    {/*            return <Option key={item.typeCode}*/}
                    {/*                           value={item.typeCode}>{item.typeName}</Option>*/}
                    {/*        })*/}
                    {/*    }*/}

                    {/*</Select>*/}
                </Form.Item>

                <Form.Item label="操作时间" name="time">
                    <RangePicker showTime locale={zhCn}/>
                </Form.Item>
                <Form.Item label="操作模块" name="operationModule">
                    <Input placeholder="请输入操作模块"/>

                    {/*<Select*/}
                    {/*    placeholder="请选择操作模块"*/}
                    {/*    onChange={() => {*/}
                    {/*    }}*/}
                    {/*    allowClear style={{width: "170px"}}*/}
                    {/*>*/}


                    {/*    {*/}
                    {/*        select?.agreement_type?.map(item => {*/}
                    {/*            return <Option key={item.typeCode}*/}
                    {/*                           value={item.typeCode}>{item.typeName}</Option>*/}
                    {/*        })*/}
                    {/*    }*/}

                    {/*</Select>*/}
                </Form.Item>
                <Form.Item label="操作类型" name="operationType">
                    <Input placeholder="请输入操作类型"/>

                    {/*<Select*/}
                    {/*    placeholder="请选择操作类型"*/}
                    {/*    onChange={() => {*/}
                    {/*    }}*/}
                    {/*    allowClear style={{width: "170px"}}*/}
                    {/*>*/}


                    {/*    {*/}
                    {/*        select?.agreement_type?.map(item => {*/}
                    {/*            return <Option key={item.typeCode}*/}
                    {/*                           value={item.typeCode}>{item.typeName}</Option>*/}
                    {/*        })*/}
                    {/*    }*/}

                    {/*</Select>*/}
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit">查询</Button>
                    <Button htmlType="button" onClick={() => {
                        form.resetFields();
                        searchData={}
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
}))(OperationLog);
