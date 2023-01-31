import React, {useEffect, useState} from "react";
import {io} from "socket.io-client"
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
    Upload,
    message,
    Select,
    Radio,
    Empty, Pagination, InputNumber
} from "antd";

const {TextArea} = Input;
const {Search} = Input;
const {Option} = Select;
const {Column} = Table;
import {
    PlusCircleOutlined,
    DeleteOutlined,
    EditOutlined,
    FallOutlined,
    RiseOutlined, DownloadOutlined
} from '@ant-design/icons';

import styles from './style.module.less';

import columns from './columns';
import TABLEJSON from './TABLEJSON.tsx';
import {listData, tableData} from './data.tsx';
import defaultShebei from '@/assets/default-shebei.png';
import kai from '@/assets/kai.png';
import guan from '@/assets/guan.png';
import {WS_SERVER} from "@/services/global";
import {baseUrl, otherUrl} from "@/services/request";

const ModularManage = (props: any) => {
    const {dispatch, select} = props;
    const [form] = Form.useForm();
    const [visible, setVisible] = useState(false);
    const [detailData, setDetailData] = useState({});
    const [DETAIL, setDETAIL] = useState({}); /* 表格详情 */

    const [formTitle, setFormTitle] = useState<string>('');//弹框标题
    const [formIsModalVisible, setFormlIsModalVisible] = useState(false);//弹框状态，是否显示
    const [formData, setFormData] = useState<any>({});//弹框表单信息
    const [agreementInfo, setAgreementInfo] = useState<any>({});//弹框表单信息

    // 列表数据
    const [modularData, setModularData] = useState<any>([]);
    const [modularCurrentPage, setModularCurrentPage] = useState<any>({pageNo: 1});
    const [modularTotalPage, setModularTotalPage] = useState<number>(0);
    const [deleteId, setDeleteId] = useState<any>([]);


    const [pointPositionData, setPointPositionData] = useState<any>([]);
    const [pointPositionCurrentPage, setPointPositionCurrentPage] = useState<any>({pageNo: 1});
    const [pointPositionTotalPage, setPointPositionTotalPage] = useState<number>(0);

    const [pointPositionKeyword, setPointPositionKeyword] = useState<any>("");


    const [SELECTROWKEYS, setSELECTROWKEYS] = useState([]);  /* 选中项  */

    useEffect(() => {
        setModularCurrentPage({pageNo: 1})
        getListData(null);
    }, [])
    const onFinish = (values: any) => {
        console.log(values);
        setModularCurrentPage({pageNo: 1})
        getListData(values);
    };
    // 查询模块
    const getListData = (data: any, current: number = 1, pageSize: number = 10) => {
        dispatch({
            type: 'common/getRequestData',
            method: 'GET',
            url: "/data-acquisition/module-info",
            payload: {
                current: modularCurrentPage.pageNo,
                pageSize: 10,
                'rbacToken': '7ed6a62261854a4eb27d844ff4df1885',
                ...data
            },
            callback: (res: any) => {

                if (res.success) {
                    let list = res.data.list;
                    let total = res.data.total;
                    setModularTotalPage(total);


                    const ids = list.map(item => {
                        return item.id
                    })
                    setModularData(list);
                    getWs("", ids, [], {list: list});
                }
            },
        });

    }

    // 查询点位
    const getListPointPosition = (data: any, current: number = 1, pageSize: number = 10) => {
        dispatch({
            type: 'common/getRequestData',
            method: 'GET',
            url: "/data-acquisition/point-position",
            payload: {
                current: pointPositionCurrentPage.pageNo,
                pageSize,
                'rbacToken': '7ed6a62261854a4eb27d844ff4df1885',
                name: pointPositionKeyword,
                ...data,
            },
            callback: (res: any) => {
                if (res.success) {
                    let list = res.data.list;
                    let total = res.data.total;
                    setPointPositionData(list)
                    setPointPositionTotalPage(total)

                    const ids = list.map(item => {
                        return item.id
                    })
                    getWs("getModuleAndPoint", [data.moduleId], ids, {list: list})
                }
            },
        });
    }

    const getWs = (type: any, moduleIds: any, pointIds: any, _data: any) => {

        const wsAddWebScoket = new WebSocket(`ws://${WS_SERVER}:15420/ws/socket`);

        wsAddWebScoket.onmessage = (e) => {
            // console.log("客户端接收服务端数据时触发", e)

            if (!e.data || type === "postPointDeleted") {
                return
            }
            let res = JSON.parse(e?.data);
            // console.log("反", res)


            // 模块、点位排序
            res?.moduleData.sort(function (a: any, b: any) {
                return b.id - a.id;
            });
            let modules = res?.moduleData;
            res.pointData.sort(function (a: any, b: any) {
                return b.id - a.id;
            });
            let points = res?.pointData;


            if (moduleIds.length > 0) {
                if (type && type === 'getModuleAndPoint') {
                    setDETAIL({status: modules[0]?.status});
                } else {

                    let shebei = _data?.list?.map((item: any, index: any) => {
                        return {...item, ...modules[index]}
                    });

                    setModularData(shebei);
                }
            }


            if (pointIds.length > 0) {
                const dianwei = _data.list.map((item: any, index: any) => {
                    return {...item, ...points[index]}
                });
                setPointPositionData(dianwei)
            }
        };
        wsAddWebScoket.onopen = (e) => {
            console.log("建立连接时触发", e)

            const data = {moduleIds: moduleIds, pointIds: pointIds, type};
            console.log("推", data)
            // 推数据ids
            wsAddWebScoket.send(JSON.stringify(data));

        };
        wsAddWebScoket.onclose = (e) => {
            console.log("连接错误时触发", e)
        };
        wsAddWebScoket.onerror = (e) => {
            console.log("通信错误时触发", e)
        };
    }


    /* 模块 添加  */
    const addEquipment = () => {
        setFormData({})
        setAgreementInfo({})

        setFormTitle("新增模块");
        setFormlIsModalVisible(true);
    }
    /* 模块 详情  */
    const detailModule = (item: any) => {


        dispatch({
            type: 'common/getRequestData',
            method: 'GET',
            url: "/data-acquisition/module-info/" + item.id,
            payload: {},
            callback: (res: any) => {
                console.log(res)
                if (res.success) {
                    if (!visible) {
                        setVisible(true)
                    }

                    setDetailData({"pointPositionCount": res.data.pointPosition?.length, ...res.data});
                    // 查询点位
                    getListPointPosition({moduleId: item.id});
                }
            },
        });
    }
    /* 模块 编辑  */
    const editEquipment = (id) => {
        setPointPositionKeyword("")

        dispatch({
            type: 'common/getRequestData',
            method: 'GET',
            url: "/data-acquisition/module-info/" + id,
            payload: {},
            callback: (res: any) => {
                if (res.success) {
                    setFormData(res.data);
                    setAgreementInfo(res.data.agreementInfo);
                    setFormTitle("编辑模块");
                    setFormlIsModalVisible(true);
                }
            },
        });
    }
    /* 模块删除 */
    const deleteModuleinfo = (id: any) => {
        Modal.confirm({
            title: '删除',
            icon: '',
            content: id ? '确定要删除当前模块吗' : '确认要删除这些数据吗',
            onOk() {
                dispatch({
                    type: 'common/getRequestData',
                    method: 'post',
                    url: "/data-acquisition/module-info/batchDelete",
                    payload: {
                        ids: id ? [id] : deleteId
                    },
                    callback: (res: any) => {
                        if (res.success) {
                            setDeleteId([])

                            message.success(res.message);
                            setModularCurrentPage({pageNo: 1})
                            getListData(null);
                        }
                    },
                });

            },
            onCancel() {
                console.log('Cancel');
            },
        });
    };
    const updateCheckboxStatus = (bool, id) => {

        if (bool) {
            setDeleteId([...deleteId, id]);
        } else {

            const list = deleteId.filter(item => {
                if (item !== id) {
                    return item;
                }
            });
            setDeleteId(list)
        }


    }


    /* 点位 添加  */
    const addVariable = () => {
        setFormTitle("新增点位");
        setFormData({convertRatio: 1, convertBenchmark: 0});
        setFormlIsModalVisible(true);
    }
    /* 点位 编辑  */
    const editVariable = (id: any) => {
        dispatch({
            type: 'common/getRequestData',
            method: 'GET',
            url: "/data-acquisition/point-position/" + id,
            payload: {},
            callback: (res: any) => {
                console.log(res)
                if (res.success) {
                    setFormData(res.data);

                    setFormTitle("编辑点位");
                    setFormlIsModalVisible(true);
                }
            },
        });


    }


    /* 点位 批量删除 */
    const deletePointPosition = () => {
        if (!SELECTROWKEYS.length) {
            message.warning('请选择删除项');
            return;
        }
        Modal.confirm({
            title: '删除',
            icon: '',
            content: '确定要删除这些数据吗',
            onOk() {

                dispatch({
                    type: 'common/getRequestData',
                    method: 'post',
                    url: "/data-acquisition/point-position/delete",
                    payload: {
                        ids: SELECTROWKEYS
                    },
                    callback: (res: any) => {
                        if (res.success) {
                            message.success(res.message);
                            getWs("postPointDeleted", [], SELECTROWKEYS, null)

                            setSELECTROWKEYS([])
                            getListPointPosition({moduleId: detailData.id});
                        }
                    },
                });

            },
            onCancel() {
                console.log('Cancel');
            },
        });
    };

    const addOrUpdate = () => {
        let _url = ""
        let _data = {}

        if (formTitle.includes("模块")) {

            if (!formData.name) {
                message.warning("请输入模块名称")
                return
            }
            if (!formData.agreementCode) {
                message.warning("请选择协议类型")
                return
            }

            if (formData?.agreementCode === 1 || formData?.agreementCode === 3 || formData?.agreementCode === 4) {
                if (!agreementInfo.ipAddress) {
                    message.warning("请输入IP地址")
                    return
                }
                if (!agreementInfo.portNumber) {
                    message.warning("请输入端口号")
                    return
                }
                if (!agreementInfo.stationNumber) {
                    message.warning("请输入站号")
                    return
                }
            }

            if (formData?.agreementCode === 2) {

                if (!agreementInfo.serialPort) {
                    message.warning("请选择串口号")
                    return
                }
                if (!agreementInfo.baudRate) {
                    message.warning("请选择波特率")
                    return
                }
                if (!agreementInfo.checkBit) {
                    message.warning("请选择校验位")
                    return
                }
                if (!agreementInfo.dataBit) {
                    message.warning("请选择数据位")
                    return
                }
                if (!agreementInfo.stopBit) {
                    message.warning("请选择停止位")
                    return
                }
                if (!agreementInfo.stationNumber) {
                    message.warning("请输入站号")
                    return
                }
            }


            if (formData.id) {
                _url = '/data-acquisition/module-info/update'
                _data = {
                    updateModuleInfoDto: {
                        id: formData.id,
                        name: formData.name,
                        agreementCode: formData.agreementCode
                    },
                    updateAgreementInfoDto: {
                        ...agreementInfo,
                        code: formData.agreementCode,
                        name: formData.agreementName
                    }
                }
            } else {
                _url = '/data-acquisition/module-info/create'
                _data = {
                    createModuleInfoDto: {
                        name: formData.name,
                        agreementCode: formData.agreementCode
                    },
                    createAgreementInfoDto: {
                        ...agreementInfo,
                        code: formData.agreementCode,
                        name: formData.agreementName
                    }
                }
            }
        }

        if (formTitle.includes("点位")) {
            if (formData.id) {
                _url = '/data-acquisition/point-position/update'
                _data = {...formData, moduleId: detailData.id}
            } else {
                _url = '/data-acquisition/point-position/create'
                _data = {...formData, moduleId: detailData.id}
            }
        }
        if (formTitle.includes("下发")) {
            // /service/joint/sendInstruction
            _url = otherUrl + '/data_collect/point/issuedPoint'
            _data = {value: formData.value, rbacToken: 'd123456789', pointId: formData.pointId}
        }

        dispatch({
            type: 'common/getRequestData',
            method: 'post',
            url: _url,
            payload: {
                ..._data,
            },
            callback: (res: any) => {
                console.log(res)
                if (res.success) {
                    message.success(res.message);
                    setFormlIsModalVisible(false);
                    if (formTitle.includes("模块")) {
                        if (formData.id) {
                            detailModule({id: formData.id});
                        } else {
                            setModularCurrentPage({pageNo: 1})
                            getListData(null);
                        }
                    }
                    if (formTitle.includes("点位")) {

                        detailModule({id: detailData.id});

                        // getListPointPosition({moduleId: detailData.id});
                    }
                }
            },
        });
    }

    // 下载模板
    const downloadTemplate = () => {
        window.location.href = './point_template.xlsx'
    }
    // 点位下发
    const pointPositionIssued = (id: any) => {
        setFormTitle("点位下发");
        setFormData({pointId: id});
        setFormlIsModalVisible(true);
    }


    // 导入
    const importXlsx = (info) => {

        if (info.file.status !== 'uploading') {

        }
        if (info.file.status === 'done') {
            if (info.file.response.success) {
                // 查询点位
                getListPointPosition({moduleId: detailData.id});
                message.success(`导入成功！`);

            } else {
                message.error(info.file.response.message)
            }
        } else if (info.file.status === 'error') {
            message.error(`上传失败`);
        }
    }


    // 导出
    const exportXlsx = () => {
        if (pointPositionData.length <= 0) {
            message.warning("请先添加点位再导出")
            return
        }

        let arr = []
        if (SELECTROWKEYS.length <= 0) {
            const ids = pointPositionData.map(item => {
                return item.id
            });
            arr = ids
        }

        console.log(arr, SELECTROWKEYS)
        const url = `${baseUrl}/data-acquisition/xlsx/exportXlsx?moduleName=${detailData.name}&ids=${SELECTROWKEYS.length <= 0 ? arr : SELECTROWKEYS}`;
        window.open(url)
    }

    const rowSelection = {
        onChange: (selectedRowKeys: React.Key[], selectedRows: any) => {
            console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);

            const ids = selectedRows.map(item => {
                return item.id
            })
            console.log(ids)
            setSELECTROWKEYS(ids)
        },
        getCheckboxProps: (record: any) => ({
            disabled: record.name === 'Disabled User', // Column configuration not to be checked
            name: record.name,
        }),
    };

    return (<div className={styles['modularManage']}>
            <div className={styles['search']}>
                <div className={styles['left']}>
                    <Button onClick={() => {
                        addEquipment()
                    }} type="primary" icon={<PlusCircleOutlined/>}>新增模块</Button>
                    <Button onClick={() => {
                        if (deleteId.length === 0) {
                            message.warning("请选择要删除的模块")
                            return;
                        }
                        deleteModuleinfo()
                    }} type="primary" icon={<DeleteOutlined/>} danger>批量删除</Button>
                </div>
                <div className={styles['right']}>

                    <Form
                        layout={'inline'}
                        form={form}
                        onFinish={onFinish}>

                        <Form.Item label="模块名称" name="moduleName">
                            <Input placeholder="请输入模块名称"/>
                        </Form.Item>
                        <Form.Item label="协议类型" name="agreementCode">
                            <Select
                                placeholder="请选择协议类型"
                                onChange={() => {
                                }}
                                allowClear style={{width: "170px"}}
                            >


                                {
                                    select?.agreement_type?.map(item => {
                                        return <Option key={item.typeCode}
                                                       value={item.typeCode}>{item.typeName}</Option>
                                    })
                                }

                            </Select>
                        </Form.Item>
                        {/*<Form.Item label="状态" name="status">*/}
                        {/*    <Radio.Group value={0} defaultValue={0}>*/}
                        {/*        <Radio value={0}>全部</Radio>*/}
                        {/*        <Radio value={1}>在线</Radio>*/}
                        {/*        <Radio value={2}>离线</Radio>*/}
                        {/*    </Radio.Group>*/}
                        {/*</Form.Item>*/}

                        <Form.Item>
                            <Button type="primary" htmlType="submit">查询</Button>
                            <Button htmlType="button" onClick={() => {
                                form.resetFields();
                                modularCurrentPage.pageNo = 1
                                setModularCurrentPage({pageNo: 1})
                                getListData(null);
                            }} style={{marginLeft: '10px'}}>
                                重置
                            </Button>
                        </Form.Item>
                    </Form>

                </div>
            </div>
            <div className={styles['content']}>

                {
                    modularData.length === 0 ?
                        <div style={{margin: "40px auto"}}><Empty/>
                        </div> : modularData.map((item: any, index: number) => {
                            return <div key={item.id} className={styles['banner']}>
                                <div className={styles['row1']}>
                                    <div>
                                        <img src={defaultShebei}/>
                                    </div>
                                    <div>
                                        {item.name}
                                    </div>
                                    <div><Checkbox onChange={(e) => {
                                        updateCheckboxStatus(e.target.checked, item.id);
                                    }}/></div>
                                </div>
                                <div className={styles['row2']}>
                                    <div>状态</div>
                                    <div>点位数量</div>
                                    <div>协议类型</div>
                                </div>
                                <div className={styles['row3']}>
                                    <div>
                                        <img src={item?.status === 1 ? kai : guan}/>
                                    </div>
                                    <div>{item?.pointPositionCount}</div>
                                    <div>{item?.agreementCode?.typeName}</div>
                                </div>
                                <div className={styles['row4']}>
                                    {/*<div onClick={() => {*/}


                                    {/*    detailModule(item)*/}
                                    {/*}}>查看*/}
                                    {/*</div>*/}
                                    <div title={pointPositionKeyword} onClick={() => {
                                        setPointPositionKeyword("")
                                        detailModule(item)
                                    }}>编辑
                                    </div>
                                    <div onClick={() => {
                                        deleteModuleinfo(item.id)
                                    }}>删除
                                    </div>
                                </div>
                            </div>
                        })
                }
            </div>

            <div className={styles['footer']}>
                {
                    modularData.length === 0 ? '' :
                        <Pagination pageSize={10} total={modularTotalPage} current={modularCurrentPage.pageNo}
                                    onChange={(page: number, pageSize: number) => {
                                        modularCurrentPage.pageNo = page
                                        setModularCurrentPage({pageNo: page});
                                        getListData(null);
                                    }}/>
                }
            </div>

            <Drawer title={detailData.name} placement="right" onClose={() => {
                setDETAIL({})
                setDetailData({})
                // setModularCurrentPage({pageNo: 1})
                getListData(null);
                setVisible(false)
            }} visible={visible} width={'87vw'} zIndex={2}>
                <div className={styles['detail']}>
                    <div className={styles['header']}>
                        <div className={styles['h-left']}>
                            <div><img src={defaultShebei}/></div>
                            <div>{detailData.name}</div>
                            <div><EditOutlined onClick={() => {
                                editEquipment(detailData.id)
                            }}/></div>
                        </div>
                        <div className={styles['h-right']}>
                            <div className={styles['box']}>
                                <div>状态</div>
                                <div>
                                    <img src={DETAIL?.status === 1 ? kai : guan}/>
                                </div>
                            </div>
                            <div className={styles['box']}>
                                <div>点位数量</div>
                                <div>{pointPositionTotalPage}</div>
                            </div>
                            <div className={styles['box']}>
                                <div>协议类型</div>
                                <div>{detailData?.agreementInfo?.name}</div>
                            </div>
                            <div className={styles['box']}>
                                <div>IP地址:{detailData?.agreementInfo?.ipAddress}</div>
                                <div>站号: {detailData?.agreementInfo?.stationNumber}</div>
                            </div>
                            <div className={styles['box']}>
                                <div>端口号: {detailData?.agreementInfo?.portNumber}</div>
                                <div>采集频率: {detailData?.agreementInfo?.acquisitionFreq}</div>
                            </div>
                        </div>
                    </div>
                    <div className={styles['body']}>
                        <div className={styles['b-search']}>

                            <div className={styles['bs-left']}>
                                <Button onClick={() => {
                                    addVariable()
                                }} type="primary" icon={<PlusCircleOutlined/>}>新增点位</Button>
                                <Button onClick={() => {
                                    deletePointPosition()
                                }} type="primary" icon={<DeleteOutlined/>} danger>批量删除</Button>

                                <Button onClick={() => {
                                    downloadTemplate()
                                }} type="primary" icon={<DownloadOutlined/>}>下载导入模版</Button>


                                <Upload
                                    name="files"
                                    action={baseUrl + "/data-acquisition/xlsx/importXlsx"}
                                    accept=".xlsx,.xls"
                                    data={{
                                        moduleId: detailData.id
                                    }}
                                    onChange={(info) => importXlsx(info)}
                                    showUploadList={false}>
                                    <Button type="primary" icon={<FallOutlined/>}>导入</Button>
                                </Upload>


                                <Button onClick={() => {
                                    exportXlsx()
                                }} type="primary" icon={<RiseOutlined/>}>导出</Button>
                            </div>
                            <div className={styles['bs-right']}>
                                <div>关键字</div>
                                <div>
                                    <Search placeholder="请输入" defaultValue={pointPositionKeyword}
                                            onSearch={(val) => {
                                                console.log(val)
                                                setPointPositionKeyword(val)
                                                setPointPositionCurrentPage({pageNo: 1});
                                                getListPointPosition({moduleId: detailData.id, name: val});
                                            }} enterButton/>

                                </div>
                            </div>
                        </div>

                        <Table
                            rowKey="id"
                            scroll={{x: 2000}}
                            dataSource={pointPositionData}
                            pagination={{
                                pageSize: 10,
                                total: pointPositionTotalPage,
                                onChange: (page: number, pageSize: number) => {
                                    pointPositionCurrentPage.pageNo = page
                                    setPointPositionCurrentPage({pageNo: page});
                                    // 查询点位
                                    getListPointPosition({moduleId: detailData.id, name: pointPositionKeyword});
                                }
                            }}
                            rowSelection={{
                                type: "checkbox",
                                fixed: true,
                                ...rowSelection,
                            }}
                        >
                            {columns.tableColumns
                                ? columns.tableColumns().map((i: any, idx: number) => {
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
                                                columns.operation(record).map((item: any, idx: number) => {
                                                    return (
                                                        <a
                                                            key={idx}
                                                            onClick={() => {
                                                                console.log(record);
                                                                setDETAIL(record)
                                                                setVisible(true)

                                                                if (item.name === "下发") {
                                                                    pointPositionIssued(record.id);
                                                                }

                                                                if (item.name === '编辑') {
                                                                    editVariable(record.id);
                                                                }
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

                    </div>
                </div>
            </Drawer>

            {/* 设备添加、修改*/}
            <Modal title={formTitle} visible={formIsModalVisible} onOk={() => {
                addOrUpdate()
            }} onCancel={() => {
                setFormlIsModalVisible(false);
            }} width={600}>
                <Form
                    layout="vertical"
                >

                    {
                        formTitle.includes("模块") ? <div className={styles['m-box']}>
                            <div className={styles['mb-row2']}>
                                <div className={styles['mbr-left']}>
                                    <Form.Item required={true} label={`模块名称`}>
                                        <Input value={formData.name}
                                               onChange={(val) => {
                                                   setFormData({
                                                       ...formData,
                                                       name: val.target ? val.target.value : val
                                                   });
                                               }}
                                               placeholder="请输入模块名称" maxLength={20}/>
                                    </Form.Item>
                                </div>
                                <div className={styles['mbr-right']}>
                                    <Form.Item required={true} label={`协议类型`}>

                                        <Select
                                            value={formData.agreementCode} name={formData.agreementName}
                                            onChange={(val: any, option: any) => {
                                                console.log(val, option)
                                                setFormData({
                                                    ...formData,
                                                    agreementCode: val,
                                                    agreementName: option.children
                                                });
                                            }}
                                            style={{width: '100%'}}
                                            placeholder="请选择协议类型"
                                        >

                                            {
                                                select?.agreement_type?.map((item) => {
                                                    return <Option key={item.typeCode}
                                                                   value={item.typeCode}>{item.typeName}</Option>
                                                })
                                            }
                                        </Select>

                                    </Form.Item>
                                </div>
                            </div>

                            <div className={styles['mb-biaoshi']}>
                                <hr/>
                                <div>{agreementInfo.name ? agreementInfo.name : "Modbus-TCP"}</div>
                            </div>
                            {
                                formData?.agreementCode ? (<>
                                        {
                                            formData?.agreementCode === 1 || formData?.agreementCode === 3 || formData?.agreementCode === 4 ? (
                                                <>
                                                    <div className={styles['mb-row2']}>
                                                        <div className={styles['mbr-left']}>
                                                            <Form.Item required={true} label={`IP地址`}>
                                                                <Input value={agreementInfo.ipAddress}
                                                                       onChange={(val) => {
                                                                           setAgreementInfo({
                                                                               ...agreementInfo,
                                                                               ipAddress: val.target ? val.target.value : val
                                                                           });
                                                                       }}
                                                                       placeholder="请输入IP地址" maxLength={20}/>
                                                            </Form.Item>
                                                        </div>
                                                        <div className={styles['mbr-right']}>
                                                            <Form.Item required={true} label={`端口号`}>
                                                                <InputNumber value={agreementInfo?.portNumber}
                                                                             onChange={(val) => {
                                                                                 setAgreementInfo({
                                                                                     ...agreementInfo,
                                                                                     portNumber: val ? val : 1
                                                                                 });
                                                                             }}
                                                                             placeholder="请输入端口号" style={{width: "100%"}}
                                                                             min={1} max={65535} maxLength={5}/>
                                                            </Form.Item>
                                                        </div>
                                                    </div>
                                                    <div className={styles['mb-row2']}>
                                                        <div className={styles['mbr-left']}>
                                                            <Form.Item required={true} label={`站号`}>
                                                                <InputNumber value={agreementInfo?.stationNumber}
                                                                             onChange={(val) => {
                                                                                 setAgreementInfo({
                                                                                     ...agreementInfo,
                                                                                     stationNumber: val ? val : 1
                                                                                 });
                                                                             }}
                                                                             placeholder="请输入站号" style={{width: "100%"}}
                                                                             min={1} max={65535} maxLength={5}/>
                                                            </Form.Item>
                                                        </div>
                                                        <div className={styles['mbr-right']}>
                                                            <Form.Item required={true} label={`采集频率`}>
                                                                <InputNumber
                                                                    value={agreementInfo?.acquisitionFreq ? agreementInfo?.acquisitionFreq : 1000}
                                                                    onChange={(val) => {
                                                                        setAgreementInfo({
                                                                            ...agreementInfo,
                                                                            acquisitionFreq: val ? val : 1000
                                                                        });
                                                                    }}
                                                                    placeholder="请输采集频率" style={{width: "100%"}}
                                                                    addonAfter="ms" min={1000} max={99999} maxLength={5}/>
                                                            </Form.Item>
                                                        </div>
                                                    </div>
                                                </>
                                            ) : <></>
                                        }
                                        {/*Modbus RTU*/}
                                        {
                                            formData?.agreementCode === 2 ? (
                                                <>
                                                    <div className={styles['mb-row2']}>
                                                        <div className={styles['mbr-left']}>
                                                            <Form.Item required={true} label={`串口号`}>
                                                                <Select
                                                                    value={agreementInfo.serialPort}
                                                                    onChange={(val: any, option: any) => {
                                                                        setAgreementInfo({
                                                                            ...agreementInfo,
                                                                            serialPort: val.target ? val.target.value : val,
                                                                        });
                                                                    }}
                                                                    style={{width: '100%'}}
                                                                    placeholder="请选择串口号"
                                                                >

                                                                    {
                                                                        select?.serial_port?.map((item) => {
                                                                            return <Option key={item.typeCode}
                                                                                           value={item.typeCode}>{item.typeName}</Option>
                                                                        })
                                                                    }
                                                                </Select>

                                                            </Form.Item>

                                                        </div>
                                                        <div className={styles['mbr-right']}>
                                                            <Form.Item required={true} label={`波特率`}>
                                                                <Select
                                                                    value={agreementInfo?.baudRate}
                                                                    onChange={(val: any, option: any) => {
                                                                        setAgreementInfo({
                                                                            ...agreementInfo,
                                                                            baudRate: val.target ? val.target.value : val,
                                                                        });
                                                                    }}
                                                                    style={{width: '100%'}}
                                                                    placeholder="请选择波特率"
                                                                >

                                                                    {
                                                                        select?.baud_rate?.map((item) => {
                                                                            return <Option key={item.typeCode}
                                                                                           value={item.typeCode}>{item.typeName}</Option>
                                                                        })
                                                                    }
                                                                </Select>
                                                            </Form.Item>
                                                        </div>
                                                    </div>
                                                    <div className={styles['mb-row2']}>
                                                        <div className={styles['mbr-left']}>
                                                            <Form.Item required={true} label={`校验位`}>
                                                                <Select
                                                                    value={agreementInfo?.checkBit}
                                                                    onChange={(val: any, option: any) => {
                                                                        setAgreementInfo({
                                                                            ...agreementInfo,
                                                                            checkBit: val.target ? val.target.value : val,
                                                                        });
                                                                    }}
                                                                    style={{width: '100%'}}
                                                                    placeholder="请选择波特率"
                                                                >

                                                                    {
                                                                        select?.check_bit?.map((item) => {
                                                                            return <Option key={item.typeCode}
                                                                                           value={item.typeCode}>{item.typeName}</Option>
                                                                        })
                                                                    }
                                                                </Select>


                                                            </Form.Item>
                                                        </div>
                                                        <div className={styles['mbr-right']}>
                                                            <Form.Item required={true} label={`数据位`}>
                                                                <Select
                                                                    value={agreementInfo?.dataBit}
                                                                    onChange={(val: any, option: any) => {
                                                                        setAgreementInfo({
                                                                            ...agreementInfo,
                                                                            dataBit: val.target ? val.target.value : val,
                                                                        });
                                                                    }}
                                                                    style={{width: '100%'}}
                                                                    placeholder="请选择数据位"
                                                                >

                                                                    {
                                                                        select?.data_bit?.map((item) => {
                                                                            return <Option key={item.typeCode}
                                                                                           value={item.typeCode}>{item.typeName}</Option>
                                                                        })
                                                                    }
                                                                </Select>

                                                            </Form.Item>
                                                        </div>
                                                    </div>

                                                    <div className={styles['mb-row2']}>
                                                        <div className={styles['mbr-left']}>
                                                            <Form.Item required={true} label={`停止位`}>

                                                                <Select
                                                                    value={agreementInfo?.stopBit}
                                                                    onChange={(val: any, option: any) => {
                                                                        setAgreementInfo({
                                                                            ...agreementInfo,
                                                                            stopBit: val.target ? val.target.value : val,
                                                                        });
                                                                    }}
                                                                    style={{width: '100%'}}
                                                                    placeholder="请选择停止位"
                                                                >

                                                                    {
                                                                        select?.stop_bit?.map((item) => {
                                                                            return <Option key={item.typeCode}
                                                                                           value={item.typeCode}>{item.typeName}</Option>
                                                                        })
                                                                    }
                                                                </Select>


                                                            </Form.Item>
                                                        </div>
                                                        <div className={styles['mbr-right']}>
                                                            <Form.Item required={true} label={`站号`}>
                                                                <InputNumber value={agreementInfo?.stationNumber}
                                                                             onChange={(val) => {
                                                                                 setAgreementInfo({
                                                                                     ...agreementInfo,
                                                                                     stationNumber: val ? val : 1
                                                                                 });
                                                                             }}
                                                                             placeholder="请输入站号" style={{width: "100%"}}
                                                                             min={1} max={65535} maxLength={5}/>
                                                            </Form.Item>
                                                        </div>
                                                    </div>
                                                </>
                                            ) : <></>

                                        }
                                        {/*MQTT*/}
                                        {
                                            formData?.agreementCode === 5 ? (
                                                <>
                                                    <div className={styles['mb-row2']}>
                                                        <div className={styles['mbr-left']}>
                                                            <Form.Item required={true} label={`名称`}>
                                                                <Input value={agreementInfo.ipAddress}
                                                                       onChange={(val) => {
                                                                           setAgreementInfo({
                                                                               ...agreementInfo,
                                                                               ipAddress: val.target ? val.target.value : val
                                                                           });
                                                                       }}
                                                                       placeholder="请输入名称"/>
                                                            </Form.Item>
                                                        </div>
                                                        <div className={styles['mbr-right']}>
                                                            <Form.Item required={true} label={`Client ID`}>
                                                                <Input value={agreementInfo.portNumber}
                                                                       onChange={(val) => {
                                                                           setAgreementInfo({
                                                                               ...agreementInfo,
                                                                               portNumber: val.target ? val.target.value : val
                                                                           });
                                                                       }}
                                                                       placeholder="请输入Client ID"/>
                                                            </Form.Item>
                                                        </div>
                                                    </div>
                                                    <div className={styles['mb-row2']}>
                                                        <div className={styles['mbr-left']}>
                                                            <Form.Item required={true} label={`服务器地址`}>
                                                                <Input value={agreementInfo.stationNumber}
                                                                       onChange={(val) => {
                                                                           setAgreementInfo({
                                                                               ...agreementInfo,
                                                                               stationNumber: val.target ? val.target.value : val
                                                                           });
                                                                       }}
                                                                       placeholder="请输入服务器地址"/>
                                                            </Form.Item>
                                                        </div>
                                                        <div className={styles['mbr-right']}>
                                                            <Form.Item required={true} label={`端口号`}>
                                                                <InputNumber value={agreementInfo?.portNumber}
                                                                             onChange={(val) => {
                                                                                 setAgreementInfo({
                                                                                     ...agreementInfo,
                                                                                     portNumber: val ? val : 1
                                                                                 });
                                                                             }}
                                                                             placeholder="请输入端口号" style={{width: "100%"}}
                                                                             min={1} max={65535} maxLength={5}/>
                                                            </Form.Item>
                                                        </div>
                                                    </div>
                                                    <div className={styles['mb-row2']}>
                                                        <div className={styles['mbr-left']}>
                                                            <Form.Item required={true} label={`用户名`}>
                                                                <Input value={agreementInfo.stationNumber}
                                                                       onChange={(val) => {
                                                                           setAgreementInfo({
                                                                               ...agreementInfo,
                                                                               stationNumber: val.target ? val.target.value : val
                                                                           });
                                                                       }}
                                                                       placeholder="请输入用户名"/>
                                                            </Form.Item>
                                                        </div>
                                                        <div className={styles['mbr-right']}>
                                                            <Form.Item required={true} label={`密码`}>
                                                                <Input value={agreementInfo.acquisitionFreq}
                                                                       onChange={(val) => {
                                                                           setAgreementInfo({
                                                                               ...agreementInfo,
                                                                               acquisitionFreq: val.target ? val.target.value : val
                                                                           });
                                                                       }}
                                                                       placeholder="请输密码"/>
                                                            </Form.Item>
                                                        </div>
                                                    </div>
                                                    <div className={styles['mb-row2']}>
                                                        <div className={styles['mbr-left']}>
                                                            <Form.Item required={true} label={`SSL/TSL`}>
                                                                <Switch defaultChecked onChange={(e) => {
                                                                    console.log(e)
                                                                }}/>
                                                            </Form.Item>
                                                        </div>
                                                        <div className={styles['mbr-right']}>

                                                        </div>
                                                    </div>
                                                </>
                                            ) : <></>

                                        }

                                    </>) :
                                    (<>
                                        <div className={styles['mb-row2']}>
                                            <div className={styles['mbr-left']}>
                                                <Form.Item required={true} label={`IP地址`}>
                                                    <Input value={agreementInfo.ipAddress}
                                                           onChange={(val) => {
                                                               setAgreementInfo({
                                                                   ...agreementInfo,
                                                                   ipAddress: val.target ? val.target.value : val
                                                               });
                                                           }}
                                                           placeholder="请输入IP地址" maxLength={20}/>
                                                </Form.Item>
                                            </div>
                                            <div className={styles['mbr-right']}>
                                                <Form.Item required={true} label={`端口号`}>
                                                    <InputNumber value={agreementInfo?.portNumber}
                                                                 onChange={(val) => {
                                                                     setAgreementInfo({
                                                                         ...agreementInfo,
                                                                         portNumber: val ? val : 1
                                                                     });
                                                                 }}
                                                                 placeholder="请输入端口号" style={{width: "100%"}} min={1}
                                                                 max={65535} maxLength={5}/>
                                                </Form.Item>
                                            </div>
                                        </div>
                                        <div className={styles['mb-row2']}>
                                            <div className={styles['mbr-left']}>
                                                <Form.Item required={true} label={`站号`}>
                                                    <InputNumber value={agreementInfo?.stationNumber}
                                                                 onChange={(val) => {
                                                                     setAgreementInfo({
                                                                         ...agreementInfo,
                                                                         stationNumber: val ? val : 1
                                                                     });
                                                                 }}
                                                                 placeholder="请输入站号" style={{width: "100%"}} min={1}
                                                                 max={65535} maxLength={5}/>
                                                </Form.Item>
                                            </div>
                                            <div className={styles['mbr-right']}>
                                                <Form.Item required={true} label={`采集频率`}>
                                                    <InputNumber
                                                        value={agreementInfo?.acquisitionFreq ? agreementInfo?.acquisitionFreq : 1000}
                                                        onChange={(val) => {
                                                            setAgreementInfo({
                                                                ...agreementInfo,
                                                                acquisitionFreq: val ? val : 1000
                                                            });
                                                        }}
                                                        placeholder="请输采集频率" style={{width: "100%"}} addonAfter="ms"
                                                        min={1000} max={99999} maxLength={5}/>
                                                </Form.Item>
                                            </div>
                                        </div>
                                    </>)
                            }


                        </div> : ''
                    }


                    {
                        formTitle.includes("编辑点位") || formTitle.includes("新增点位") ? <div className={styles['m-box']}>
                            <div className={styles['mb-row2']}>
                                <div className={styles['mbr-left']}>
                                    <Form.Item required={true} label={`点位名`}>
                                        <Input value={formData.name}
                                               onChange={(val) => {
                                                   setFormData({
                                                       ...formData,
                                                       name: val.target ? val.target.value : val
                                                   });
                                               }}
                                               placeholder="请输入点位名" maxLength={20}/>
                                    </Form.Item>
                                </div>
                                <div className={styles['mbr-right']}>
                                    <Form.Item required={true} label={`点位类型`}>

                                        <Select
                                            value={formData.pointType}
                                            onChange={(val: any) => {
                                                setFormData({
                                                    ...formData,
                                                    pointType: val.target ? val.target.value : val
                                                });
                                            }}
                                            style={{width: '100%'}}
                                            placeholder="请选择点位类型"
                                        >
                                            {
                                                select?.point_type?.map((item) => {
                                                    return <Option key={item.typeCode}
                                                                   value={item.typeCode}>{item.typeName}</Option>
                                                })
                                            }
                                        </Select>

                                    </Form.Item>
                                </div>
                            </div>

                            <div className={styles['mb-row2']}>
                                <div className={styles['mbr-left']}>
                                    <Form.Item required={true} label={`寄存器类型`}>

                                        <Select
                                            value={formData.registerType}
                                            onChange={(val: any) => {
                                                setFormData({
                                                    ...formData,
                                                    registerType: val.target ? val.target.value : val
                                                });
                                            }}
                                            style={{width: '100%'}}
                                            placeholder="请选择寄存器类型"
                                        >
                                            {
                                                select?.register_type?.map((item) => {
                                                    return <Option key={item.typeCode}
                                                                   value={item.typeCode}>{item.typeName}</Option>
                                                })
                                            }
                                        </Select>

                                    </Form.Item>
                                </div>
                                <div className={styles['mbr-right']}>
                                    <Form.Item required={true} label={`线性转换`}>
                                        <div style={{display: 'flex'}}>
                                            <div style={{flex: 1}}>
                                                <Input value={formData.convertRatio}
                                                       onChange={(val) => {
                                                           setFormData({
                                                               ...formData,
                                                               convertRatio: val.target ? val.target.value : val
                                                           });
                                                       }}
                                                       placeholder="" prefix="比率"/>
                                            </div>
                                            <div style={{flex: 1}}>
                                                <Input value={formData.convertBenchmark}
                                                       onChange={(val) => {
                                                           setFormData({
                                                               ...formData,
                                                               convertBenchmark: val.target ? val.target.value : val
                                                           });
                                                       }}
                                                       placeholder="" prefix="基准"/>
                                            </div>
                                        </div>
                                    </Form.Item>
                                </div>
                            </div>


                            <div className={styles['mb-row2']}>
                                <div className={styles['mbr-left']}>
                                    <Form.Item required={true} label={`地址`}>
                                        <Input value={formData.address}
                                               onChange={(val) => {
                                                   setFormData({
                                                       ...formData,
                                                       address: val.target ? val.target.value : val
                                                   });
                                               }}
                                               placeholder="请输入地址" maxLength={5}/>
                                    </Form.Item>
                                </div>
                                <div className={styles['mbr-right']}>
                                    <Form.Item required={true} label={`数据类型`}>

                                        <Select
                                            value={formData.dataType}
                                            onChange={(val: any) => {
                                                setFormData({
                                                    ...formData,
                                                    dataType: val.target ? val.target.value : val
                                                });
                                            }}
                                            style={{width: '100%'}}
                                            placeholder="请选择数据类型"
                                        >
                                            {
                                                select?.data_type?.map((item) => {
                                                    return <Option key={item.typeCode}
                                                                   value={item.typeCode}>{item.typeName}</Option>
                                                })
                                            }
                                        </Select>

                                    </Form.Item>
                                </div>
                            </div>


                            <div className={styles['mb-row1']}>
                                <Form.Item required={false} label={`点位说明`}>
                                    <TextArea value={formData.explain}
                                              onChange={(val) => {
                                                  setFormData({
                                                      ...formData,
                                                      explain: val.target ? val.target.value : val
                                                  });
                                              }}
                                              placeholder="请输入点位说明" rows={3} maxLength={20} showCount/>
                                </Form.Item>
                            </div>
                            <div className={styles['mb-row1']}>
                                <Form.Item required={false} label={`单位`}>
                                    <Input value={formData.unit}
                                           onChange={(val) => {
                                               setFormData({
                                                   ...formData,
                                                   unit: val.target ? val.target.value : val
                                               });
                                           }}
                                           placeholder="请输入单位" maxLength={5} showCount/>
                                </Form.Item>
                            </div>
                        </div> : ''
                    }


                    {
                        formTitle.includes("点位下发") ? <div className={styles['m-box']}>
                            <div className={styles['mb-row1']}>
                                <Form.Item required={true} label={`下发数值`}>
                                    <Input value={formData.value}
                                           onChange={(val) => {
                                               setFormData({
                                                   ...formData,
                                                   value: val.target ? val.target.value : val
                                               });
                                           }}
                                           placeholder="请输入下发数值"/>
                                </Form.Item>
                            </div>
                        </div> : ''
                    }
                </Form>
            </Modal>
        </div>
    );
};

export default connect(({common, select}: { common: any, select: any }) => ({
    common,
    select
}))(ModularManage);
