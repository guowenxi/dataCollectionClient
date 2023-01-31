import React, {useEffect, useImperativeHandle, useState} from "react";
import {withRouter} from "react-router-dom";

import {
    Button,
    Checkbox,
    Form,
    Input, InputNumber, message,
    Select,

} from "antd";

const {TextArea} = Input;
import styles from './tcp.module.less';
import {io} from "socket.io-client";
import {
    arrayBuffer2Hex,
    arrayBuffer2String,
    buffer_to_hex,
    getDateTime,
    getUserIP,
    toArrayBuffer,
    toBuffer
} from "@/utils/utils";
import {wsUrl, wsUrl_base, wsUrl_BASE} from "@/services/request";

let listMessage = []
var socketClient = null;
let receiveType = "1"
const listMessageType = [
    {id: 0, name: "全部"},
    {id: 1, name: "已接收"},
    {id: 2, name: "已发送"}
]
const TcpType = (props: any) => {
    const {dispatch, select, linkDetail} = props;
    const [form] = Form.useForm();

    const [linksSwitch, setLinksSwitch] = useState<boolean>(false);

    const [startTime, setStartTime] = useState([]);
    const [endTime, setEndTime] = useState([]);
    const [list, setList] = useState([]);

    const [listMessageTypeNum, setListMessageTypeNum] = useState(0);


    const [formData, setFormData] = useState<any>({
        sendingType: "1",
        receiveType: "1",
        cycleState: false,
        timeMS: "",
    });


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

        console.log(window.location.host.split(":"))

        socketClient = new WebSocket(wsUrl_base);
        socketClient.onopen = (e) => {
            socketClient.send(JSON.stringify({
                event: 'open_tcp',
                data: {ip: linkDetail.ipAddress, port: linkDetail.portNumber}
            }))

            setLinksSwitch(true)

            const time = getDateTime();
            setStartTime(time)
        };
        socketClient.onmessage = (e) => {
            const res = e.data ? JSON.parse(e.data) : e.data;

            console.log(formData)
            let value = ""
            if (receiveType === "1") { // ASCII
                console.log('ASCII ' + receiveType, res);

                // let buffer = Buffer.from(res.data);
                // console.log('ASCII buffer', buffer.toString());

                if (res.data.length > 0) {
                    let arrayBuffer = toArrayBuffer(res.data);

                    console.log(arrayBuffer)

                    let str = arrayBuffer2String(arrayBuffer);

                    value = str;
                } else {
                    value = res.data;
                }

            }
            if (receiveType === "2") { // HEX (16进制)
                console.log('HEX(16进制) ' + receiveType, res);
                const str16 = buffer_to_hex(res.data);
                value = str16;
            }
            listMessage.push({
                ...formData,
                "value": value,
                "position": "left"
            })
            setList([...listMessage])


        };

        socketClient.onerror = (e) => {
            message.warning("连接失败")
            props.errorLinks()

        }
        socketClient.onclose = (e) => {

        };

        // return
        //
        // socketClient = io("http://localhost:3000");
        //
        // socketClient.on("connect", () => {
        //     console.log(socketClient.id, '监听客户端连接成功-connect');
        //     setLinksSwitch(true)
        //
        //     const time = getDateTime();
        //     setStartTime(time)
        // })
        //
        // // 监听服务端返回的数据层
        // socketClient.emit('open_tcp', {ip: linkDetail.ipAddress, port: linkDetail.portNumber},(e)=>{
        //     console.log(e)
        // });
    }
    const closeLinks = () => {

        socketClient.send(JSON.stringify({
            event: 'close_tcp',
            data: {}
        }))


        setLinksSwitch(false);

        const time = getDateTime();
        setEndTime(time)
    }
    const sendout = (values: any) => {
        if (!linksSwitch) {
            message.warning("请先打开开关")
            return
        }
        if (!formData.sendingType) {
            message.warning("请选择发送区类型")
            return
        }

        listMessage.push({
            "value": values.sendoutContent,
            ...formData,
            "position": "right"
        })
        setList([...listMessage])
        socketClient.send(JSON.stringify({
            event: 'send_tcp', data: {
                "value": values.sendoutContent,
                ...formData,
                "position": "left"
            }
        }));


        // 向服务端发送数据 并 监听服务端返回的数据
        // socketClient.emit('send_tcp', values.sendoutContent, (data: any) => {
        //     console.log("反", data)
        //
        //     listMessage.push({
        //         "value": data,
        //         ...formData,
        //         "position": "left"
        //     })
        //     setList([...listMessage])
        //
        // });

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
                                    console.log(e)
                                    receiveType = e;
                                    setFormData({
                                        ...formData,
                                        "receiveType": e
                                    })
                                }}
                                value={formData.receiveType}
                                options={[
                                    {
                                        value: '1',
                                        label: 'ASCII',
                                    },
                                    {
                                        value: '2',
                                        label: 'HEX',
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

                    <div className={styles['rbrj-body']}>
                        {
                            linksSwitch || list.length > 0 ?
                                <div className={styles['rbrj-body-title']}>
                                    {startTime} 连接成功
                                </div> : ''
                        }

                        {
                            list.length > 0 && list.map((item, index) => {


                                if (listMessageTypeNum === 0) {
                                    return <div key={index} className={styles['rbrj-body-message']}>
                                        <div
                                            className={styles[item.position === 'left' ? "left-message-box" : 'right-message-box']}
                                        >
                                            <div style={{marginBottom: "10px"}}>
                                                <div>{item.position === 'left' ? `TCP 调试${linkDetail.ipAddress}` : '服务器 14:44:42'}</div>
                                            </div>
                                            <div>{item.value}</div>
                                        </div>
                                    </div>
                                }


                                if (listMessageTypeNum === 1 && item.position === 'left') {
                                    return <div key={index} className={styles['rbrj-body-message']}>
                                        <div
                                            className={styles[item.position === 'left' ? "left-message-box" : 'right-message-box']}
                                        >
                                            <div style={{marginBottom: "10px"}}>
                                                <div>{item.position === 'left' ? `TCP 调试${linkDetail.ipAddress}` : '服务器 14:44:42'}</div>
                                            </div>
                                            <div>{item.value}</div>
                                        </div>
                                    </div>
                                }

                                if (listMessageTypeNum === 2 && item.position === 'right') {
                                    return <div key={index} className={styles['rbrj-body-message']}>
                                        <div
                                            className={styles[item.position === 'left' ? "left-message-box" : 'right-message-box']}
                                        >
                                            <div style={{marginBottom: "10px"}}>
                                                <div>{item.position === 'left' ? `TCP 调试${linkDetail.ipAddress}` : '服务器 14:44:42'}</div>
                                            </div>
                                            <div>{item.value}</div>
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
                        <Select
                            style={{width: 120, margin: "10px"}}
                            onChange={(e) => {
                                console.log(e)

                                setFormData({
                                    ...formData,
                                    "sendingType": e
                                })
                            }}
                            value={formData.sendingType}
                            options={[
                                {
                                    value: '1',
                                    label: 'ASCII',
                                },
                                {
                                    value: '2',
                                    label: 'HEX',
                                },
                            ]}
                        />
                        {/*<Checkbox onChange={() => {*/}
                        {/*}}>转义符指令解析</Checkbox>*/}
                        {/*<Checkbox onChange={() => {*/}
                        {/*}}>自动发送附加位</Checkbox>*/}

                        {/*<span style={{color: "#1890ff", margin: "0 20px"}}>设置</span>*/}

                        <Checkbox checked={formData.cycleState} onChange={(e) => {
                            setFormData({
                                ...formData,
                                "cycleState": e.target.checked
                            })
                        }}>循环周期</Checkbox>

                        <InputNumber
                            value={formData.timeMS}
                            onChange={(val) => {
                                setFormData({
                                    ...formData,
                                    timeMS: val.target ? val.target.value : val
                                });
                            }} placeholder="" addonAfter="ms" min={1}
                            style={{width: 120, marginLeft: "20px"}}/>


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
// }))(TcpType);
export default withRouter(TcpType);
