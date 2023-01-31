import React, {useEffect, useState} from "react";
import {connect} from "dva";
import {PaginatedParams} from "ahooks/lib/useAntdTable/";
import {useAntdTable} from "ahooks";
import {Table, Button, Drawer, Modal, Form, Checkbox, Space, Input, Switch, Tree, message, Select} from "antd";

const {TextArea} = Input;
const {Search} = Input;
const {Option} = Select;
const {Column} = Table;

import columns from './columns';
import TABLEJSON from './TABLEJSON.tsx';
import listData from './data.ts';
import TableInfo from '@/components/TableInfo/TableInfo';
import SearchMore from "@/components/SearchMore/SearchMore";
import styles from "./style.module.less";
import {DeleteOutlined, PlusCircleOutlined} from "@ant-design/icons";

const Test = (props: any) => {
    const {dispatch} = props;
    const [form] = Form.useForm();
    const [visible, setVisible] = useState(false);
    const [DETAIL, setDETAIL] = useState({}); /* 表格详情 */

    const [SELECTROWKEYS, setSELECTROWKEYS] = useState([]);  /* 选中项  */


    const [formTitle, setFormTitle] = useState<string>('');//弹框标题
    const [formIsModalVisible, setFormlIsModalVisible] = useState(false);//弹框状态，是否显示
    const [formData, setFormData] = useState<any>({});//弹框表单信息


    // 获取对应的TABLEJSON
    const getTABLEJSON = (idx: number) => {
        return TABLEJSON(DETAIL)[idx];
    };

    // 列表加载数据的方法
    //---------------
    const getTableData = (
        {current, pageSize}: PaginatedParams[0],
        formData: Object,
    ): Promise<any> => {
        return new Promise((resolve) => {

            let list = listData.data.data;
            console.log('test2 ', listData)
            let total = listData.data.total;
            resolve({
                list: list,
                total: total,
            });

            // dispatch({
            //     type: 'common/getRequestData',
            //     method: 'GET',
            //     url: columns.url,
            //     payload: {
            //         pageNo: current,
            //         pageSize,
            //         'rbacToken': '7ed6a62261854a4eb27d844ff4df1885',
            //         ...formData
            //     },
            //     callback: (res: any) => {
            //         let list = res.data.data;
            //         console.log('test2 ',res)
            //         let total = res.data.total;
            //         resolve({
            //             list: list,
            //             total: total,
            //         });
            //     },
            // });
        });
    };
    /* 转发 添加  */
    const addForwarding = () => {
        setFormTitle("新增转发");
        setFormlIsModalVisible(true);
    }
    /* 转发 编辑  */
    const editForwarding = () => {
        setFormTitle("编辑转发");
        setFormlIsModalVisible(true);
    }
    /* 转发 批量删除 */
    const deleteForwarding = () => {
        dispatch({
            type: 'common/requestData',
            method: 'post',
            url: '/fyHome/sys-dict/deleteBatch',
            payload: {
                ids: SELECTROWKEYS,
            },
            callback: (_data: any) => {
                message.success('删除成功');
            },
        });
    }
    const {tableProps, search} = useAntdTable(getTableData, {
        defaultPageSize: 10,
        form
    });
    const {submit, reset} = search;
    return (<div className={styles['messageForwarding']}>
        <div className={styles['search']}>
            <div className={styles['left']}>
                <Button onClick={() => {
                    addForwarding()
                }} type="primary" icon={<PlusCircleOutlined/>}>新增转发</Button>
                <Button onClick={() => {
                    deleteForwarding()
                }} type="primary" icon={<DeleteOutlined/>} danger>批量删除</Button>
            </div>
            <div className={styles['right']}>
                <div>
                    <SearchMore
                        type={columns.searchListType}
                        form={form}
                        searchList={columns.searchList}
                        submit={submit}
                        reset={reset}
                    ></SearchMore>
                </div>
            </div>
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

        {/* 接口添加、修改*/}
        <Modal title={formTitle} visible={formIsModalVisible} onOk={() => {
        }} onCancel={() => {
            setFormlIsModalVisible(false);
        }} width={600} style={{borderRadius: '5%'}}>
            <Form
                layout="vertical"
            >

                <div className={styles['m-box']}>
                    <div className={styles['mb-row2']}>
                        <div className={styles['mbr-left']}>
                            <Form.Item required={true} label={`转发名称`}>
                                <Input value={formData.typeName}
                                       onChange={(val) => {
                                           setFormData({
                                               ...formData,
                                               typeName: val.target ? val.target.value : val
                                           });
                                       }}
                                       placeholder="请输入转发名称"/>
                            </Form.Item>
                        </div>
                        <div className={styles['mbr-right']}>
                            <Form.Item required={true} label={`转发方式`}>

                                <Select
                                    value={formData.approverId}
                                    onChange={(val: any) => {
                                        setFormData({
                                            ...formData,
                                            approverId: val.target ? val.target.value : val
                                        });
                                    }}
                                    style={{width: '100%'}}
                                    placeholder="请选择转发方式"
                                >
                                    <Option value="jack">Jack</Option>
                                    <Option value="lucy">Lucy</Option>
                                </Select>

                            </Form.Item>
                        </div>
                    </div>
                    <div className={styles['mb-row1']}>
                        <Form.Item required={true} label={`描述`}>
                            <TextArea value={formData.typeName}
                                      onChange={(val) => {
                                          setFormData({
                                              ...formData,
                                              typeName: val.target ? val.target.value : val
                                          });
                                      }}
                                      placeholder="请输入描述" rows={3}/>
                        </Form.Item>
                    </div>
                    <div className={styles['mb-biaoshi']}>
                        <hr/>
                        <div>Bacnet IP</div>
                    </div>
                    <div className={styles['mb-row1']}>
                        <Form.Item required={true} label={`名称`}>
                            <Input value={formData.typeName}
                                      onChange={(val) => {
                                          setFormData({
                                              ...formData,
                                              typeName: val.target ? val.target.value : val
                                          });
                                      }}
                                      placeholder="请输入名称" />
                        </Form.Item>
                    </div>
                    <div className={styles['mb-row2']}>
                        <div className={styles['mbr-left']}>
                            <Form.Item required={true} label={`名端口号称`}>
                                <Input value={formData.typeName}
                                       onChange={(val) => {
                                           setFormData({
                                               ...formData,
                                               typeName: val.target ? val.target.value : val
                                           });
                                       }}
                                       placeholder="请输入端口号"/>
                            </Form.Item>
                        </div>
                        <div className={styles['mbr-right']}>
                            <Form.Item required={true} label={`设备ID`}>
                                <Input value={formData.typeId}
                                       onChange={(val) => {
                                           setFormData({
                                               ...formData,
                                               typeId: val.target ? val.target.value : val
                                           });
                                       }}
                                       placeholder="请输入设备ID"/>
                            </Form.Item>
                        </div>
                    </div>
                    <div className={styles['mb-row2']}>
                        <div className={styles['mbr-left']}>
                            <Form.Item required={true} label={`COV变化精度`}>
                                <Input value={formData.typeName}
                                       onChange={(val) => {
                                           setFormData({
                                               ...formData,
                                               typeName: val.target ? val.target.value : val
                                           });
                                       }}
                                       placeholder="请输入COV变化精度"/>
                            </Form.Item>
                        </div>
                        <div className={styles['mbr-right']}>
                            <Form.Item required={true} label={`TrendLog存储间隔`}>
                                <Input value={formData.typeId}
                                       onChange={(val) => {
                                           setFormData({
                                               ...formData,
                                               typeId: val.target ? val.target.value : val
                                           });
                                       }}
                                       placeholder="请输入TrendLog存储间隔"/>
                            </Form.Item>
                        </div>
                    </div>

                    {/*<div className={styles['mb-row2']}>*/}
                    {/*    <div className={styles['mbr-left']}>*/}
                    {/*        <Form.Item required={true} label={`IP地址`}>*/}
                    {/*            <Input value={formData.typeName}*/}
                    {/*                   onChange={(val) => {*/}
                    {/*                       setFormData({*/}
                    {/*                           ...formData,*/}
                    {/*                           typeName: val.target ? val.target.value : val*/}
                    {/*                       });*/}
                    {/*                   }}*/}
                    {/*                   placeholder="请输入IP地址"/>*/}
                    {/*        </Form.Item>*/}
                    {/*    </div>*/}
                    {/*    <div className={styles['mbr-right']}>*/}
                    {/*        <Form.Item required={true} label={`端口号`}>*/}
                    {/*            <Input value={formData.typeId}*/}
                    {/*                   onChange={(val) => {*/}
                    {/*                       setFormData({*/}
                    {/*                           ...formData,*/}
                    {/*                           typeId: val.target ? val.target.value : val*/}
                    {/*                       });*/}
                    {/*                   }}*/}
                    {/*                   placeholder="请输入端口号"/>*/}
                    {/*        </Form.Item>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    {/*<div className={styles['mb-row2']}>*/}
                    {/*    <div className={styles['mbr-left']}>*/}
                    {/*        <Form.Item required={true} label={`主题`}>*/}
                    {/*            <Input value={formData.typeName}*/}
                    {/*                   onChange={(val) => {*/}
                    {/*                       setFormData({*/}
                    {/*                           ...formData,*/}
                    {/*                           typeName: val.target ? val.target.value : val*/}
                    {/*                       });*/}
                    {/*                   }}*/}
                    {/*                   placeholder="请输入主题"/>*/}
                    {/*        </Form.Item>*/}
                    {/*    </div>*/}
                    {/*    <div className={styles['mbr-right']}>*/}
                    {/*        <Form.Item required={true} label={`Client ID`}>*/}
                    {/*            <Input value={formData.typeId}*/}
                    {/*                   onChange={(val) => {*/}
                    {/*                       setFormData({*/}
                    {/*                           ...formData,*/}
                    {/*                           typeId: val.target ? val.target.value : val*/}
                    {/*                       });*/}
                    {/*                   }}*/}
                    {/*                   placeholder="请输入Client ID"/>*/}
                    {/*        </Form.Item>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </div>
            </Form>
        </Modal>

    </div>);
};

export default connect(({common, select}) => ({
    common,
    select
}))(Test);
