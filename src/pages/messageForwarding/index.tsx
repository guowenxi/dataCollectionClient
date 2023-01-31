import React, {useEffect, useState} from "react";
import {connect} from "dva";
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
    Upload,
    Badge, InputNumber
} from "antd";

const {TextArea} = Input;
const {Search} = Input;
const {Option} = Select;
const {Column} = Table;

import columns from './columns';
import styles from "./style.module.less";
import {
    ArrowsAltOutlined,
    CaretRightOutlined,
    EditOutlined,
    FallOutlined,
    PlusCircleOutlined, PoweroffOutlined,
    RiseOutlined
} from "@ant-design/icons";
import mqtt from "@/assets/mqtt.png";
import websocket from "@/assets/websocket.png";
import {WS_SERVER} from "@/services/global";
import {messageWsUrl, otherUrl} from "@/services/request";

const MessageForwarding = (props: any) => {
    const {dispatch, select} = props;
    const [form] = Form.useForm();
    const [visible, setVisible] = useState(false);
    const [DETAIL, setDETAIL] = useState({}); /* 表格详情 */

    const [listMessageForwarding, setListMessageForwarding] = useState([]);
    const [linksSwitch, setLinksSwitch] = useState<boolean>(true);

    const [loadings, setLoadings] = useState<boolean[]>([]);
    const [mqttLoadings, setMqttLoadings] = useState<boolean[]>([]);


    const [formTitle, setFormTitle] = useState<string>('');//弹框标题
    const [formIsModalVisible, setFormlIsModalVisible] = useState(false);//弹框状态，是否显示
    const [formData, setFormData] = useState<any>({});//弹框表单信息


    const [serviceList, setServiceList] = useState([]);
    const [serviceCurrentPage, setServiceCurrentPage] = useState<any>({pageNo: 1});
    const [serviceTotalPage, setServiceTotalPage] = useState<number>(0);

    const [blacklistIsModalVisible, setBblacklistIsModalVisible] = useState(false);


    useEffect(() => {
        getMessageForwarding()


    }, []);

    // 查询所有连接
    const getMessageForwarding = () => {
        dispatch({
            type: 'common/getRequestData',
            method: 'GET',
            url: "/data-acquisition/message-forwarding",
            payload: {},
            callback: (res: any) => {
                if (res.success) {
                    let list = res.data;
                    setListMessageForwarding(list)


                    linksForwarding(
                        'getSocketState',
                        {"moduleIds": null, "pointIds": null, "type": "sendSocketState"},
                        list
                    );

                }
            },
        });
    }


    /* 转发 编辑  */
    const editForwarding = (item) => {
        setFormTitle(item.serviceName);
        setFormData(item)
        setFormlIsModalVisible(true);
    }
    const linksForwarding = (status, item, data) => {

        if (status === 'getMQTTSubscribe') {

            getMQTTSubscribe(item, data);
            return
        }
        if (status === 'getSocketServer') {
            const wsAddWebScoket = new WebSocket(`ws://${WS_SERVER}:15420/ws/socket`);

            wsAddWebScoket.onmessage = (e) => {
                console.log("客户端接收服务端数据时触发", e)

                // 获取开关状态
                if (e && status === "getSocketState") {
                    getSocketState(e.data, data);
                }
                // 获取服务列表数据
                if (e && status === 'getSocketServer') {
                    console.log(JSON.parse(e.data))
                    const res = e.data ? JSON.parse(e.data) : [];
                    getSocketServer(res, data);
                }
            };
            wsAddWebScoket.onopen = (e) => {
                console.log("建立连接时触发", e);
                // wsAddWebScoket.send(JSON.stringify(item));

                wsAddWebScoket.send(JSON.stringify(item));
            };
            wsAddWebScoket.onclose = (e) => {
                console.log("连接错误时触发", e);
            };
            wsAddWebScoket.onerror = (e) => {
                console.log("通信错误时触发", e);
            };
            return
        }
    }


    const getSocketState = (val, list) => {


        const arrs = list.map(item => {
            if (item.id === 1) {
                return {
                    ...item,
                    status: val === '1' ? 'processing' : 'default',
                    statusName: val === '1' ? '已启用' : '已停用'
                }
            } else {
                return item
            }
        });
        setListMessageForwarding(arrs)
    }

    const getSocketServer = (res, data) => {

        const list = res && res.map(item => {
            return JSON.parse(item)
        });

        setServiceList(list);

        setFormTitle(data.serviceName);
        setFormData(data);

    }
    const getMQTTSubscribe = (res, data) => {

        dispatch({
            type: 'common/getRequestData',
            method: 'get',
            url: otherUrl + '/data_collect/mqttController/getRoutesAll',
            payload: {},
            callback: (_data: any) => {
                if (_data.success) {
                    console.log(_data)

                    setServiceList([]);

                    setFormTitle(data.serviceName);
                    setFormData(data);
                    setVisible(true);
                }
            },
        });
    }
    const getMQTTServer = (res, data) => {

        dispatch({
            type: 'common/getRequestData',
            method: 'get',
            url: otherUrl + '/data_collect/mqttController/getMqttClientAll',
            payload: {},
            callback: (_data: any) => {
                if (_data.success) {
                    console.log(_data)

                    setServiceList([]);

                    setFormTitle(data.serviceName);
                    setFormData(data);
                    setVisible(true);
                }
            },
        });
    }

    /* 踢除 */
    const deleteForwarding = (record: any) => {


        Modal.confirm({
            title: '踢除',
            icon: '',
            content: '确定要踢除当前客户端吗',
            onOk() {
                dispatch({
                    type: 'common/getRequestData',
                    method: 'post',
                    url: otherUrl + '/data_collect/SeocketController/removeClient',
                    payload: {
                        "channelId": record.channelId
                    },
                    callback: (_data: any) => {
                        if (_data.success) {
                            message.success('踢除成功');
                        }
                    },
                });
            },
            onCancel() {
                console.log('Cancel');
            },
        });
    }

    const clickOpenClose = (item: any, index: number) => {
        if (item.id === 1) {
            setLoadings((prevLoadings) => {
                const newLoadings = [...prevLoadings];
                newLoadings[0] = true;
                return newLoadings;
            });
        }
        if (item.id === 2) {
            setMqttLoadings((prevLoadings) => {
                const newLoadings = [...prevLoadings];
                newLoadings[0] = true;
                return newLoadings;
            });
        }

        let _url = item.id === 1 ? otherUrl + '/data_collect/SeocketController/websocketServerAndStart' : "/mqtt-forward/mqtt/startAndStopTopic"
        dispatch({
            type: 'common/getRequestData',
            method: 'post',
            url: _url,
            payload: {
                stopAndStart: item.status === 'processing' ? '0' : '1',
            },
            callback: (_data: any) => {
                console.log(_data)

                if (_data.success) {
                    message.success(_data.message)

                    if (item.id === 1) {
                        setLoadings(prevLoadings => {
                            const newLoadings = [...prevLoadings];
                            newLoadings[index] = false;
                            return newLoadings;
                        });
                    }
                    if (item.id === 2) {
                        setMqttLoadings((prevLoadings) => {
                            const newLoadings = [...prevLoadings];
                            newLoadings[0] = false;
                            return newLoadings;
                        });
                    }


                    const data = {
                        ...item,
                        status: _data.data === 1 ? 'processing' : 'default',
                        statusName:  _data.message
                    }
                    setFormData(data)

                    const list = listMessageForwarding.map(i => {
                        if (i.id === item.id) {
                            return data
                        }
                        return i
                    })
                    setListMessageForwarding(list)


                } else {
                    if (item.id === 1) {
                        setLoadings(prevLoadings => {
                            const newLoadings = [...prevLoadings];
                            newLoadings[index] = false;
                            return newLoadings;
                        });
                    }
                    if (item.id === 2) {
                        setMqttLoadings((prevLoadings) => {
                            const newLoadings = [...prevLoadings];
                            newLoadings[0] = false;
                            return newLoadings;
                        });
                    }
                    message.warning(_data.message ? _data.message : _data.data)
                }

            },
        });
    }


    const addOrUpdate = () => {

        dispatch({
            type: 'common/getRequestData',
            method: 'post',
            url: formData.id === 2 ? "/data-acquisition/message-forwarding/updateMqtt" : "/data-acquisition/message-forwarding/updateWs",
            payload: {
                ...formData
            },
            callback: (res: any) => {
                console.log(res)
                if (res.success) {
                    setFormlIsModalVisible(false);
                    getMessageForwarding()
                }
            },
        });
    }

    const onFinish = (values: any) => {
        console.log(values);

    };

    const getDrawerTitle = () => {
        return <div>
            <span style={{marginRight: "40px"}}>{formTitle}</span>
            <span style={{marginRight: "40px", fontWeight: 400}}>已启用</span>
            <span style={{marginRight: "40px", fontWeight: 400}}>端口号: {DETAIL.portNumber}</span>
            {
                formTitle.includes("MQTT") ? <>
                    <span style={{marginRight: "40px", fontWeight: 400}}>用户名: {DETAIL.username}</span>
                    <span style={{marginRight: "40px", fontWeight: 400}}>密码: {DETAIL.password}</span>
                    <span onClick={() => {
                        setBblacklistIsModalVisible(true);
                    }} style={{
                        textAlign: "right",
                        color: "#40a9ff",
                        cursor: "pointer",
                        textDecoration: "underline"
                    }}>黑名单</span>
                </> : ''
            }
        </div>
    }

    return (<div className={styles['messageForwarding']}>


            <div className={styles['box']}>

                {
                    listMessageForwarding.map((item, index) => {
                        return <div key={index} className={styles['banner']}>

                            <div className={styles['logo']}>
                                <img src={mqtt}/>
                            </div>
                            <div className={styles['info']}>
                                <div className={styles['title']}>{item.serviceName}</div>
                                <div>端口号: {item.portNumber}</div>

                                {
                                    item.username ? <>
                                        <div>用户名: {item.username}</div>
                                        <div style={{display: "flex", alignItems: "center"}}>密码:

                                            <Input.Password value={item.password} bordered={false}
                                                            style={{width: "100px"}}/>

                                        </div>
                                    </> : ''
                                }


                                <div><Badge status={item.status} text={item.statusName}/></div>
                            </div>
                            <div className={styles['btn']}>
                                <Button disabled={item.status === 'processing' && item.id === 1 ? true : false}
                                        icon={<EditOutlined/>} onClick={() => {
                                    editForwarding(item)
                                }} type="primary" ghost>
                                    编辑
                                </Button>

                                <Button onClick={() => {
                                    clickOpenClose(item, index)
                                }}
                                        icon={item.status === 'processing' ? <CaretRightOutlined/> :
                                            <PoweroffOutlined/>}
                                        type={item.status === 'processing' ? 'danger' : 'primary'}
                                        ghost

                                        loading={item.id === 1 ? loadings[0] : mqttLoadings[0]}>
                                    {item.status === 'processing' ? '停用' : '启用'}
                                </Button>

                                <Button icon={<ArrowsAltOutlined/>} onClick={() => {
                                    setDETAIL(item)

                                    if (item.id === 1 && item.statusName === '已停用') {
                                        message.warning("请先启用服务")
                                        return
                                    }
                                    if (item.id === 2 && item.statusName === '已停用') {
                                        message.warning("请先启用服务")
                                        return
                                    }
                                    setVisible(true);
                                    linksForwarding(item.id === 1 ? 'getSocketServer' : 'getMQTTSubscribe',
                                        {
                                            "moduleIds": null,
                                            "pointIds": null,
                                            "type": "getSocketAllClientInformation"
                                        }, item)
                                }} type="primary" ghost>
                                    连接管理
                                </Button>
                            </div>

                        </div>
                    })
                }

                {/*<div className={styles['banner']}>*/}
                {/*    <div className={styles['logo']}>*/}
                {/*        <img src={mqtt}/>*/}
                {/*    </div>*/}
                {/*    <div className={styles['info']}>*/}
                {/*        <div className={styles['title']}>MQTT服务器</div>*/}
                {/*        <div>端口号: 8083</div>*/}
                {/*        <div>用户名: zhangsansan</div>*/}
                {/*        <div>密码: 123456</div>*/}
                {/*        <div><Badge status="processing" text="已连接"/></div>*/}
                {/*    </div>*/}
                {/*    <div className={styles['btn']}>*/}
                {/*        <Button icon={<EditOutlined/>} onClick={() => {*/}
                {/*            editForwarding('MQTT服务器')*/}
                {/*        }} type="primary" ghost>*/}
                {/*            编辑*/}
                {/*        </Button>*/}
                {/*        <Button icon={linksSwitch ? <CaretRightOutlined/> : <PoweroffOutlined/>} type="primary" ghost>*/}
                {/*            启用*/}
                {/*        </Button>*/}
                {/*        <Button icon={<ArrowsAltOutlined/>} onClick={() => {*/}
                {/*            linksForwarding('MQTT服务器')*/}
                {/*        }} type="primary" ghost>*/}
                {/*            连接管理*/}
                {/*        </Button>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>

            <Drawer title={getDrawerTitle()} placement="right" onClose={() => {
                setDETAIL({})
                setVisible(false)

                // getMessageForwarding()
            }} visible={visible} width={'60vw'}>
                <div className={styles['detail']}>


                    {
                        DETAIL?.serviceName?.includes("MQTT") ?
                            <div className={styles['left']}>

                                <div className={styles['item']}>
                                    <div>Topic/getpointvalue</div>
                                    <div>
                                        <Switch checkedChildren="启用" unCheckedChildren="禁用"
                                                defaultChecked={DETAIL.status === 1 ? true : false}/>
                                    </div>
                                </div>
                            </div> : ''
                    }

                    <div className={styles['right']}>
                        <div className={styles['search']}>
                            <Form
                                layout={'inline'}
                                form={form}
                                onFinish={onFinish}
                            >

                                {
                                    formData.id === 1 ?
                                        <Form.Item label="IP地址" name="moduleName">
                                            <Input placeholder="请输入IP地址"/>
                                        </Form.Item> : <>
                                            <Form.Item label="客户端ID" name="clientId">
                                                <Input placeholder="请输入客户端ID"/>
                                            </Form.Item>
                                            <Form.Item label="用户名" name="username">
                                                <Input placeholder="请输入用户名"/>
                                            </Form.Item>
                                        </>
                                }


                                <Form.Item>
                                    <Button type="primary" htmlType="submit">查询</Button>
                                    <Button htmlType="button" onClick={() => {

                                    }} style={{marginLeft: '10px'}}>
                                        刷新
                                    </Button>
                                </Form.Item>
                            </Form>

                        </div>
                        <div className={styles['body']}>


                            <Table rowKey={'channelId'} dataSource={serviceList} bordered={true} pagination={false}>

                                {

                                    DETAIL?.serviceName?.includes("MQTT") ?
                                        columns.mqttTableColumns.map(i => {
                                            return <Column {...i}></Column>
                                        }) :
                                        columns.tableColumns.map(i => {
                                            return <Column {...i}></Column>
                                        })
                                }

                                <Column
                                    title="操作"
                                    align='center'
                                    width='10%'
                                    key="action"
                                    render={(_: any, record: any) => (
                                        <Space size="middle">

                                            {
                                                formTitle.includes("MQTT") ? <>
                                                    <a onClick={() => {
                                                        deleteForwarding(record)
                                                    }} style={{color: "#f50"}}>踢除</a>
                                                    <a onClick={() => {
                                                        deleteForwarding(record)
                                                    }}>禁用</a>
                                                </> : <a onClick={() => {
                                                    deleteForwarding(record)
                                                }} style={{color: "#f50"}}>踢除</a>
                                            }


                                        </Space>
                                    )}
                                />

                            </Table>


                        </div>
                    </div>

                </div>
            </Drawer>

            {/* 编辑*/}
            <Modal title={formTitle + '编辑'} visible={formIsModalVisible} onOk={() => {
                addOrUpdate()
            }} onCancel={() => {
                setFormlIsModalVisible(false);
            }} style={{borderRadius: '5%'}}>
                <Form
                    layout="vertical"
                >

                    {/*<div className={styles['m-box']}>*/}


                    {/*<div className={styles['mb-row1']}>*/}

                    <Form.Item required={true} label={`端口号`}>
                        <InputNumber value={formData.portNumber}
                                     onChange={(val) => {
                                         console.log(val)
                                         setFormData({
                                             ...formData,
                                             portNumber: val ? val : 1
                                         });
                                     }}
                                     placeholder="请输入端口号" style={{width: "100%"}} min={1} max={65535} maxLength={5}/>
                    </Form.Item>
                    {/*</div>*/}


                    {
                        formTitle.includes("MQTT") ? <>
                            <Form.Item required={true} label={`IP地址`}>
                                <Input value={formData.ipAddress}
                                       onChange={(val) => {
                                           setFormData({
                                               ...formData,
                                               ipAddress: val.target ? val.target.value : val
                                           });
                                       }}
                                       placeholder="请输入IP地址"/>
                            </Form.Item>
                            <Form.Item required={true} label={`用户名`}>
                                <Input value={formData.username}
                                       onChange={(val) => {
                                           console.log(val)
                                           setFormData({
                                               ...formData,
                                               username: val.target ? val.target.value : val
                                           });
                                       }}
                                       placeholder="请输入用户名"/>
                            </Form.Item>
                            <Form.Item required={true} label={`密码`}>
                                <Input.Password value={formData.password}
                                                onChange={(val) => {
                                                    setFormData({
                                                        ...formData,
                                                        password: val.target ? val.target.value : val
                                                    });
                                                }}
                                                placeholder="请输入密码"/>
                            </Form.Item></> : ''
                    }


                    {/*</div>*/}
                </Form>
            </Modal>


            <Modal
                visible={blacklistIsModalVisible}
                title="黑名单列表"
                footer={null}
                onCancel={() => {
                    setBblacklistIsModalVisible(false);
                }}
                width={800}

            >
                <Table
                    bordered={true}
                    dataSource={[]}>
                    {
                        columns.blacklistTableColumns.map(i => {
                            return <Column {...i}></Column>
                        })
                    }
                    <Column
                        title="操作"
                        align='center'
                        width='10%'
                        key="action"
                        render={(_: any, record: any) => (
                            <Space size="middle">
                                <a onClick={() => {
                                }}>解除</a>
                            </Space>
                        )}
                    />

                </Table>

            </Modal>

        </div>
    )
        ;
};

export default connect((
    {
        common, select
    }
) => (
    {
        common,
        select
    }
))(MessageForwarding);
