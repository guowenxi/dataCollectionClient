import React, {useEffect, useImperativeHandle, useState} from "react";
import {CompactPicker} from 'react-color';


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
    Select, Modal,

} from "antd";

const {TextArea} = Input;
const {Search} = Input;
const {Option} = Select;
const {Column} = Table;


import styles from './ws.module.less';

import {withRouter} from "react-router-dom";
import {getDateTime, isJSON, strToBase64, strToHexCharCode} from "@/utils/utils";

var wsAddWebScoket = null;
let listMessage = []
let receiveType = "1";
const listMessageType = [
    {id: 0, name: "全部"},
    {id: 1, name: "已接收"},
    {id: 2, name: "已发送"}
]
const WsType = (props: any) => {
    const {dispatch, select, linkDetail} = props;
    const [form] = Form.useForm();
    const [linksSwitch, setLinksSwitch] = useState<boolean>(false);

    const [startTime, setStartTime] = useState([]);
    const [endTime, setEndTime] = useState([]);
    const [list, setList] = useState([]);

    const [sendingData, setSendingData] = useState<any>({
        receiveType: "1",
    });


    const [listMessageTypeNum, setListMessageTypeNum] = useState(0);


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
        const connectUrl = `ws://${linkDetail.ipAddress}:${linkDetail.portNumber}${linkDetail.linksPath ? linkDetail.linksPath : ''}`;
        wsAddWebScoket = new WebSocket(connectUrl);
        let data = ""
        wsAddWebScoket.onmessage = (e) => {
            console.log("客户端接收服务端数据时触发", e)
            console.log(receiveType)

            if (receiveType === "1") {
                data = e.data
            }
            if (receiveType === "2") {
                let obj = isJSON(e.data);
                data = `${obj}`
            }
            if (receiveType === "3") {
                data = strToHexCharCode(e.data)
            }
            if (receiveType === "4") {
                data = strToBase64(e.data)
            }

            listMessage.push({
                serverName: "服务器 " + linkDetail.ipAddress,
                data: data,
                "position": "left"
            })
            setList([...listMessage])
        };

        wsAddWebScoket.onopen = (e) => {
            console.log("建立连接时触发", e)
            setLinksSwitch(true)

            const time = getDateTime();
            setStartTime(time)

            setList([...listMessage])
        };
        wsAddWebScoket.onclose = (e) => {
            console.log("连接错误时触发", e)
            setLinksSwitch(false)
        };
        wsAddWebScoket.onerror = (e) => {
            message.warning("连接失败")
            console.log("通信错误时触发", e)
            setLinksSwitch(false)

            props.errorLinks()
        };
    }
    const closeLinks = () => {
        // 关闭客户端（断开连接）
        wsAddWebScoket.close();
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
        console.log("推", values)

        listMessage.push({
            serverName: "服务器 " + linkDetail.ipAddress,
            data: values.sendoutContent,
            "position": "right"
        })
        setList([...listMessage])

        // 推数据ids
        wsAddWebScoket.send(values.sendoutContent);
    }


    return (<>
            <div className={styles['r-banner']}>
                <div className={styles['rbr-jsq']}>
                    <div className={styles['rbrj-top']}>
                        <div className={styles['rbrj-left']}>
                            接收区
                            <Select
                                style={{width: 120, marginLeft: "10px"}}
                                onChange={(e) => {
                                    receiveType = e;
                                    setSendingData({
                                        "receiveType": e
                                    })
                                }}
                                value={sendingData.receiveType}
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
                        <div className={styles['rbrj-right']}>
                            {
                                listMessageType.map((item, index) => {
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

                    <div className={styles['rbrj-body']}>
                        {
                            linksSwitch || list.length > 0 ?
                                <div className={styles['rbrj-body-title']}>
                                    {startTime} 连接成功
                                </div> : ''
                        }

                        {
                            list.map(item => {
                                if (listMessageTypeNum === 0) {

                                    return <div className={styles['rbrj-body-message']}>
                                        <div
                                            className={styles[item.position === 'left' ? "left-message-box" : 'right-message-box']}
                                        >
                                            <div style={{marginBottom: "10px"}}>
                                                <div>{item.serverName}</div>
                                            </div>
                                            <div>{item.data}</div>
                                        </div>
                                    </div>
                                }
                                if (listMessageTypeNum === 1 && item.position === 'left') {
                                    return <div className={styles['rbrj-body-message']}>
                                        <div
                                            className={styles[item.position === 'left' ? "left-message-box" : 'right-message-box']}
                                        >
                                            <div style={{marginBottom: "10px"}}>
                                                <div>{item.serverName}</div>
                                            </div>
                                            <div>{item.data}</div>
                                        </div>
                                    </div>
                                }
                                if (listMessageTypeNum === 2 && item.position === 'right') {
                                    return <div className={styles['rbrj-body-message']}>
                                        <div
                                            className={styles[item.position === 'left' ? "left-message-box" : 'right-message-box']}
                                        >
                                            <div style={{marginBottom: "10px"}}>
                                                <div>{item.serverName}</div>
                                            </div>
                                            <div>{item.data}</div>
                                        </div>
                                    </div>
                                }
                            })
                        }


                        {
                            linksSwitch === false && list.length > 0 ?
                                <div className={styles['rbrj-body-title']}>
                                    {endTime} 已断开连接
                                </div> : ''
                        }


                    </div>
                </div>
                <div className={styles['rbr-fsq']}>
                    <div className={styles['rbrf-top']}>
                        发送区
                    </div>
                    <div className={styles['rbrf-body']}>

                        <Form
                            layout={'horizontal'}
                            form={form}
                            onFinish={sendout}
                        >


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


        </>
    );
};

// export default connect(({common, select}) => ({
//     common,
//     select
// }))(WsType);
export default withRouter(WsType);
