import React, {useEffect, useState, useImperativeHandle} from "react";
import {CompactPicker} from 'react-color';
import {withRouter} from 'react-router-dom';

import {connect} from "dva";
import {PaginatedParams} from "ahooks/lib/useAntdTable/";
import {useAntdTable} from "ahooks";
// import mqtt from 'mqtt'
// const mqtt = require('mqtt');
import mqtt from 'mqtt/dist/mqtt'


import {interfaceTest} from "../../services/common"


import {
    Table,
    Button,
    Empty,
    Badge,
    Form,
    Switch,
    Input,
    InputNumber,
    Tree,
    message,
    Select, Modal, Radio,

} from "antd";

const {TextArea} = Input;
const {Search} = Input;
const {Option} = Select;
const {Column} = Table;
import {
    PlusCircleOutlined,
    DeleteOutlined,
    EditOutlined,
    PoweroffOutlined,
    CaretRightOutlined, CloseOutlined
    , PlusOutlined
} from '@ant-design/icons';

import styles from './mqtt.module.less';

import columns from './columns';
import TABLEJSON from './TABLEJSON.tsx';
import {listData, tableData, treeData} from './data.tsx';
import TableInfo from '@/components/TableInfo/TableInfo';
import SearchMore from "@/components/SearchMore/SearchMore";
import {getDateTime, isJSON, strToBase64, strToHexCharCode} from "@/utils/utils";

var client = null;
let listMessage = []
let receiveType = "1";
const listMessageType = [
    {id: 0, name: "全部"},
    {id: 1, name: "已接收"},
    {id: 2, name: "已发送"}
]
const MqttType = (props: any) => {
    const {dispatch, select, linkDetail} = props;
    const [form] = Form.useForm();

    const [listSubscribeInfo, setListSubscribeInfo] = useState([]);

    const [linksSwitch, setLinksSwitch] = useState<boolean>(false);

    const [startTime, setStartTime] = useState([]);
    const [endTime, setEndTime] = useState([]);
    const [list, setList] = useState([]);
    const [listMessageTypeNum, setListMessageTypeNum] = useState(0);


    const [formTitle, setFormTitle] = useState<string>('');//弹框标题
    const [formIsModalVisible, setFormlIsModalVisible] = useState(false);//弹框状态，是否显示
    const [formData, setFormData] = useState<any>({});//弹框表单信息

    const [sendingData, setSendingData] = useState<any>({
        receiveType: "1",
        subscriptionList: "1",
        payloadType: "1",
        qosType: "1",
        retainState: false,
        timeMS: "",
    });


    useEffect(() => {
        getListSubscribes()
    }, [linkDetail.id]);

    // 查询所有订阅
    const getListSubscribes = () => {
        dispatch({
            type: 'common/getRequestData',
            method: 'GET',
            url: "/data-acquisition/subscribe-info",
            payload: {
                linksId: linkDetail.id
            },
            callback: (res: any) => {
                if (res.success) {
                    let list = res.data;
                    setListSubscribeInfo(list)
                }
            },
        });
    }

    const addSubscribe = () => {
        setFormData({
            sign: "#fff"
        })

        setFormTitle("添加订阅");
        setFormlIsModalVisible(true);
    }
    const deleteSubscribe = (id: any) => {
        if (!id) {
            return
        }
        Modal.confirm({
            title: '删除',
            icon: '',
            content: '确定要删除当前订阅吗',
            onOk() {
                dispatch({
                    type: 'common/getRequestData',
                    method: 'delete',
                    url: "/data-acquisition/subscribe-info/" + id,
                    payload: {},
                    callback: (res: any) => {
                        if (res.success) {
                            getListSubscribes();
                            message.success(res.message);
                        }
                    },
                });

            },
            onCancel() {
                console.log('Cancel');
            },
        });
    }
    const editSubscribe = (id) => {
        if (!id) {
            return
        }
        dispatch({
            type: 'common/getRequestData',
            method: 'get',
            url: "/data-acquisition/subscribe-info/" + id,
            payload: {},
            callback: (res: any) => {
                if (res.success) {
                    setFormData(res.data)
                    setFormTitle("编辑订阅");
                    setFormlIsModalVisible(true);
                }
            },
        });
    }

    const addOrUpdate = () => {
        let _url = ""
        let _data = {}


        if (formTitle.includes("订阅")) {
            if (formData.id) {
                _url = '/data-acquisition/subscribe-info/update'
                _data = {...formData, linksId: linkDetail.id}
            } else {
                _url = '/data-acquisition/subscribe-info/create'
                _data = {...formData, linksId: linkDetail.id}
            }
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

                    if (formTitle.includes("订阅")) {
                        getListSubscribes()
                    }
                }
            },
        });
    }

//用useImperativeHandle暴露一些外部ref能访问的属性
    useImperativeHandle(props.onRef, () => {
        return {
            "getLinkStatus": () => {
                if (linksSwitch) {
                    closeLinks()
                    return false
                } else {
                    getLinksInfo()
                    return true
                }

            }

        };
    });

    const getLinksInfo = () => {

        // const connectUrl = `ws://116.62.102.19:8183/mqtt`;
        // const connectUrl = `mqtt://116.62.102.19:1883`;
        const connectUrl = `${linkDetail.mqttType}${linkDetail.ipAddress}:${linkDetail.portNumber}${linkDetail.linksPath}`;

        console.log(connectUrl)

        // 客户端ID
        const clientId = `mqtt_${Math.random().toString(16).slice(3)}`;

        // 连接设置
        let options = {
            clean: true,	// 保留会话
            connectTimeout: 4000,	// 超时时间
            reconnectPeriod: 1000,	// 重连时间间隔
            // 认证信息
            clientId,

            username: 'admin',
            password: 'public',
        }

        // 需要订阅的主题
        const topic = listSubscribeInfo.map(item => {
            return item.topic;
        })

        client = mqtt.connect(connectUrl, options);

        // 成功连接后触发的回调
        client.on('connect', () => {
            setLinksSwitch(true)

            const time = getDateTime();
            setStartTime(time)

            // 订阅主题，这里可以订阅多个主题
            client.subscribe(topic, () => {
                console.log(`订阅了主题 ${topic.join('和')}`)
            })
        });
        // 当客户端收到一个发布过来的消息时触发回调
        /**
         * topic：收到的报文的topic
         * message：收到的数据包的负载playload
         * packet：MQTT 报文信息，其中包含 QoS、retain 等信息
         */
        let data = ""
        client.on('message', function (topic: any, message: any, packet: any) {
            // 这里有可能拿到的数据格式是Uint8Array格式，可以直接用toString转成字符串
            // let data = JSON.parse(message.toString());
            console.log("获取到的数据：", message.toString())
            console.log("数据对应订阅主题：", topic)
            console.log("获取到的数据包：", packet)

            // if (receiveType === "1") {
            //     data = message.toString()
            // }
            // if (receiveType === "2") {
            //     let obj = isJSON(message);
            //     data = `${obj}`
            // }
            // if (receiveType === "3") {
            //     data = strToHexCharCode(message)
            // }
            // if (receiveType === "4") {
            //     data = strToBase64(message)
            // }

            listMessage.push({"Topic": topic, "QoS": packet.qos, "message": message.toString(), "position": "left"})
            setList([...listMessage])

        });
    }
    const closeLinks = () => {
        // 关闭客户端（断开连接）
        client.end();
        setLinksSwitch(false)
        const time = getDateTime();
        setEndTime(time)
    }
    const sendout = (values: any) => {
        if (!linksSwitch) {
            message.warning("请先打开开关")
            return
        }
        console.log(values);
        // 向 topic 主题发送一条 QoS 为 0 的消息
        client.publish(values.sendoutTopic, values.sendoutContent,
            {
                payloadType: sendingData.payloadType,
                qos: 0,
                retain: false
            }, function (error) {
                if (error) {
                    console.log(error)
                } else {
                    listMessage.push({
                        "Topic": values.sendoutTopic,
                        "QoS": 0,
                        "message": values.sendoutContent,
                        "position": "right"
                    })
                    setList([...listMessage])

                    console.log('发送成功')
                }
            });
    }


    return (<>


            <div className={styles['r-banner']}>

                <div className={styles['rb-left']}>
                    <Button onClick={() => {
                        addSubscribe()
                    }} type="primary" ghost icon={<PlusOutlined/>} block>
                        添加订阅
                    </Button>

                    <div className={styles['rbl-list']}>
                        {
                            listSubscribeInfo.length > 0 ? listSubscribeInfo.map((item, index) => {
                                return <div key={index} style={{borderLeft: `4px solid ${item.sign}`}}
                                            className={styles['rbl-item']}>
                                    <div className={styles['rbli-left']}>{item.topic}</div>
                                    <div className={styles['rbli-right']}>
                                        <EditOutlined onClick={() => {
                                            editSubscribe(item.id)
                                        }}/>
                                        <CloseOutlined onClick={() => {
                                            deleteSubscribe(item.id)
                                        }}/>
                                    </div>
                                </div>
                            }) : ''
                        }
                    </div>

                </div>

                <div className={styles['rb-right']}>
                    <div className={styles['rbr-dylb']}>
                        <div className={styles['rbrd-top']}>
                            <div className={styles['rbrd-left']}>
                                订阅列表
                                <Select
                                    style={{width: 120, marginLeft: "10px"}}
                                    onChange={(e) => {
                                    }}
                                    value={sendingData.subscriptionList}
                                    options={[
                                        {
                                            value: '1',
                                            label: 'Plaintext',
                                        },
                                        {
                                            value: '2',
                                            label: 'JSON',
                                        },
                                        {
                                            value: '3',
                                            label: 'Hex',
                                        },
                                        {
                                            value: '4',
                                            label: 'Base64',
                                        },
                                    ]}
                                />
                                <Button onClick={() => {
                                    listMessage = [];
                                    setList([])
                                }}>清空</Button>

                            </div>
                            <div className={styles['rbrd-right']}>
                                {
                                    listMessageType.length > 0 && listMessageType.map((item, index) => {
                                        return <div
                                            onClick={() => {
                                                setListMessageTypeNum(index)
                                            }}
                                            style={{color: listMessageTypeNum === index ? '#1890ff' : ''}}
                                            key={index}>{item.name}</div>
                                    })
                                }
                            </div>
                        </div>

                        <div className={styles['rbrd-body']}>

                            {
                                linksSwitch || list.length > 0 ?
                                    <div className={styles['rbrd-body-title']}>
                                        {startTime} 连接成功
                                    </div> : ''
                            }

                            {
                                list.length > 0 && list.map(item => {

                                    if (listMessageTypeNum === 0) {

                                        return <div className={styles['rbrd-body-message']}>
                                            <div
                                                className={styles[item.position === 'left' ? "left-message-box" : 'right-message-box']}
                                            >
                                                <div style={{
                                                    display: "flex",
                                                    justifyContent: "space-between",
                                                    marginBottom: "10px"
                                                }}>
                                                    <span>Topic: {item.Topic}</span>
                                                    <span>QoS: {item.QoS}</span>
                                                </div>
                                                <div>{item.message}</div>
                                            </div>
                                        </div>
                                    }

                                    if (listMessageTypeNum === 1 && item.position === 'left') {
                                        return <div className={styles['rbrd-body-message']}>
                                            <div
                                                className={styles[item.position === 'left' ? "left-message-box" : 'right-message-box']}
                                            >
                                                <div style={{
                                                    display: "flex",
                                                    justifyContent: "space-between",
                                                    marginBottom: "10px"
                                                }}>
                                                    <span>Topic: {item.Topic}</span>
                                                    <span>QoS: {item.QoS}</span>
                                                </div>
                                                <div>{item.message}</div>
                                            </div>
                                        </div>
                                    }
                                    if (listMessageTypeNum === 2 && item.position === 'right') {
                                        return <div className={styles['rbrd-body-message']}>
                                            <div
                                                className={styles[item.position === 'left' ? "left-message-box" : 'right-message-box']}
                                            >
                                                <div style={{
                                                    display: "flex",
                                                    justifyContent: "space-between",
                                                    marginBottom: "10px"
                                                }}>
                                                    <span>Topic: {item.Topic}</span>
                                                    <span>QoS: {item.QoS}</span>
                                                </div>
                                                <div>{item.message}</div>
                                            </div>
                                        </div>
                                    }
                                })
                            }


                            {
                                linksSwitch === false && list.length > 0 ?
                                    <div className={styles['rbrd-body-title']}>
                                        {endTime} 已断开连接
                                    </div> : ''
                            }
                        </div>
                    </div>
                    <div className={styles['rbr-payload']}>
                        <div className={styles['rbrp-top']}>
                            Payload
                            <Select
                                style={{width: 120, margin: "10px"}}
                                onChange={(e) => {
                                    setSendingData({
                                        ...sendingData,
                                        "payloadType": e
                                    })
                                }}
                                value={sendingData.payloadType}
                                options={[
                                    {
                                        value: '1',
                                        label: 'Plaintext',
                                    },
                                    {
                                        value: '2',
                                        label: 'JSON',
                                    },
                                    {
                                        value: '3',
                                        label: 'Hex',
                                    },
                                    {
                                        value: '4',
                                        label: 'Base64',
                                    },
                                ]}
                            />
                            Qos
                            <Select
                                style={{width: 120, margin: "0 10px"}}
                                onChange={(e) => {
                                    setSendingData({
                                        ...sendingData,
                                        "qosType": e
                                    })
                                }}
                                value={sendingData.qosType}
                                options={[
                                    {
                                        value: '1',
                                        label: '最多一次',
                                    },
                                    {
                                        value: '2',
                                        label: '至少一次',
                                    },
                                    {
                                        value: '3',
                                        label: '仅一次',
                                    },
                                ]}
                            />
                            Retain
                            <Switch checked={sendingData.retainState} onChange={(e) => {
                                setSendingData({
                                    ...sendingData,
                                    "retainState": e
                                })
                            }} style={{marginLeft: "10px"}}/>

                        </div>
                        <div className={styles['rbrp-body']}>

                            <Form
                                layout={'horizontal'}
                                form={form}
                                onFinish={sendout}
                            >

                                <Form.Item label="" name="sendoutTopic">
                                    <Input placeholder="Topic"/>
                                </Form.Item>
                                <Form.Item label="" name="sendoutContent">
                                    <TextArea rows={3} placeholder="" bordered={false}/>
                                </Form.Item>


                                <Form.Item>
                                    <Button type="primary" htmlType="submit">发送</Button>

                                </Form.Item>
                            </Form>


                        </div>
                    </div>
                </div>
            </div>


            {/* 连接添加、修改*/}
            <Modal title={formTitle} visible={formIsModalVisible} onOk={() => {
                addOrUpdate()
            }} onCancel={() => {
                setFormlIsModalVisible(false);
            }} width={700}>
                <Form
                    layout="horizontal"
                >
                    <div className={styles['m-box']}>
                        <div className={styles['mb-row2']}>
                            <div className={styles['mbr-left']}>
                                <Form.Item required={true} label={`Topic`}>
                                    <Input value={formData.topic}
                                           onChange={(val) => {
                                               setFormData({
                                                   ...formData,
                                                   topic: val.target ? val.target.value : val
                                               });
                                           }}
                                           placeholder="请输入Topic"/>
                                </Form.Item>
                            </div>
                            <div className={styles['mbr-right']}>
                                <Form.Item required={true} label={`Qos`}>

                                    <Select
                                        value={formData.qos}
                                        onChange={(val: any) => {
                                            setFormData({
                                                ...formData,
                                                qos: val.target ? val.target.value : val
                                            });
                                        }}
                                        style={{width: '100%'}}
                                        placeholder="请选择Qos"
                                    >
                                        {
                                            select?.qos_type.map((item) => {
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
                                <Form.Item required={true} label={`标记`}>

                                    <CompactPicker color={formData.sign} onChange={(e) => {
                                        setFormData({
                                            ...formData,
                                            sign: e.hex
                                        });
                                    }} onChangeComplete={(e) => {
                                    }}/>


                                </Form.Item>
                            </div>
                            <div className={styles['mbr-right']}>
                                <Form.Item required={false} label={`别名`}>

                                    <Input value={formData.alias}
                                           onChange={(val) => {
                                               setFormData({
                                                   ...formData,
                                                   alias: val.target ? val.target.value : val
                                               });
                                           }}
                                           placeholder="请输入别名" maxLength={20}/>

                                </Form.Item>
                            </div>
                        </div>


                    </div>

                </Form>
            </Modal>

        </>
    );
};

// export default connect(({common, select}) => ({
//     common,
//     select
// }))(MqttType);
export default withRouter(MqttType);
