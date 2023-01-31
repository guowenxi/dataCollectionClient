import React, {useEffect, useState, useRef} from "react";
import {connect} from "dva";
import {PaginatedParams} from "ahooks/lib/useAntdTable/";
import {useAntdTable} from "ahooks";
import mqtt from 'mqtt/dist/mqtt'

import {
    Table,
    Button,
    Drawer,
    Radio,
    Form,
    Tag,
    Input,
    InputNumber,
    Tree,
    Checkbox,
    Col,
    Row,
    Select,
    Badge, Modal, message
} from "antd";

const {TextArea} = Input;
const {Search} = Input;
const {Option} = Select;
const {Column} = Table;

import columns from './columns';
import TABLEJSON from './TABLEJSON.tsx';
// import Test from './test.tsx';
import MqttType from './mqttType.tsx';
import WsType from './wsType.tsx';
import TcpType from './tcpType.tsx';

import styles from "./style.module.less";
import {
    PlusCircleOutlined,
    CaretRightOutlined,
    PoweroffOutlined,
    EditOutlined,
    DeleteOutlined
} from "@ant-design/icons";
import {getUserIP} from "@/utils/utils";

const DebugLinks = (props: any) => {
    const {dispatch, select} = props;
    const [form] = Form.useForm();

    let ChildRef = React.createRef();
    const [linksSwitch, setLinksSwitch] = useState<boolean>(false);


    const [listLinks, setListLinks] = useState([]);
    const [linkDetail, setLinkDetail] = useState({});


    const [linksType, setLinksType] = useState<number>(1);
    const [formTitle, setFormTitle] = useState<string>('');//弹框标题
    const [formIsModalVisible, setFormlIsModalVisible] = useState(false);//弹框状态，是否显示
    const [formData, setFormData] = useState<any>({});//弹框表单信息

    useEffect(() => {
        getListLinks()
    }, []);

    // 查询所有连接
    const getListLinks = () => {
        dispatch({
            type: 'common/getRequestData',
            method: 'GET',
            url: "/data-acquisition/links-info",
            payload: {},
            callback: (res: any) => {
                if (res.success) {
                    let list = res.data;
                    setListLinks(list)

                    // 处理详情页面的展示
                    if (list.length > 0) {
                        if (formData.id) {
                            const rows = list.filter(item => {
                                if (item.id === linkDetail.id) {
                                    return item
                                }
                            });
                            setLinkDetail({...rows[0]})
                        } else {
                            setLinkDetail({...list[0]})
                        }

                    }
                }
            },
        });
    }


    const onoffLinks = () => {
        const v = ChildRef.current.getLinkStatus()
        console.log(v)
        setLinksSwitch(v)
    }
    const errorLinks = () =>{
        setLinksSwitch(false)
    }
    const addLinks = () => {
        if (linksType === 1) {
            setFormData({
                mqttType:"mqtt://",
                linksPath: "/mqtt",
                linksDuration: 10,
                keepAlive: 60,
                clearSession: "false"
            })
        } else {
            setLinksType(1)
            setFormData({linksType:1})
        }

        setFormTitle("新建连接");
        setFormlIsModalVisible(true);
    }

    const detailLinks = (item: any) => {
        if (linksSwitch) {
            setLinksSwitch(false)
        }
        setLinkDetail(item)
    }

    const editLinks = (id: any) => {
        setLinksSwitch(false)

        if (!id) {
            return
        }
        dispatch({
            type: 'common/getRequestData',
            method: 'get',
            url: "/data-acquisition/links-info/" + id,
            payload: {},
            callback: (res: any) => {
                if (res.success) {
                    setLinksType(res.data.linksType)
                    setFormData(res.data)
                    setFormTitle("编辑连接");
                    setFormlIsModalVisible(true);
                }
            },
        });
    }
    const deleteLinks = (id: any) => {
        if (!id) {
            return
        }
        Modal.confirm({
            title: '删除',
            icon: '',
            content: '确定要删除当前连接吗',
            onOk() {
                dispatch({
                    type: 'common/getRequestData',
                    method: 'delete',
                    url: "/data-acquisition/links-info/" + id,
                    payload: {},
                    callback: (res: any) => {
                        if (res.success) {
                            message.success(res.message);
                            getListLinks()
                        }
                    },
                });

            },
            onCancel() {
                console.log('Cancel');
            },
        });
    }

    const addOrUpdate = () => {
        let _url = ""
        let _data = {}

        if (formTitle.includes("连接")) {

            if (formData.id) {
                _url = linksType === 1 ? '/data-acquisition/links-info/updateMqtt' : '/data-acquisition/links-info/update'
                _data = {...formData, "linksType": linksType}
            } else {
                _url = linksType === 1 ? '/data-acquisition/links-info/createMqtt' : '/data-acquisition/links-info/create'
                _data = {...formData, "linksType": linksType}
            }
        }

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
                    if (formTitle.includes("连接")) {
                        getListLinks()


                    }
                    if (formTitle.includes("订阅")) {

                    }
                }
            },
        });
    }


    const getTagColor = (item) => {
        if (item.typeCode === 1) {
            return "geekblue";
        }
        if (item.typeCode === 2) {
            return "orange";
        }
        if (item.typeCode === 3) {
            return "green";
        }
    }

    return (<div className={styles['debugLinks']}>
        <div className={styles['left']}>
            <Button onClick={() => {
                addLinks()
            }} type="primary" icon={<PlusCircleOutlined/>}>新建连接</Button>
            <div className={styles['links']}>
                {
                    listLinks.length > 0 ? listLinks.map((item, index) => {
                        return <div key={index} onClick={() => {
                            detailLinks(item);
                        }} style={{background: item.id == linkDetail.id ? 'rgba(240, 244, 246, 1)' : ''}}
                                    className={styles['item']}>
                            <Tag color={getTagColor(item.linksType)}>{item.linksType?.typeName}</Tag>
                            {item.name ? item.name + '@' : ''}{item.mqttType}{item.ipAddress}:{item.portNumber}
                        </div>
                    }) : ''
                }
            </div>
        </div>
        <div className={styles['right']}>
            <div className={styles['r-top']}>
                <div className={styles['rt-left']}>
                    <div className={styles['rtl-title']}>{linkDetail.linksType?.typeName} 调试</div>
                    <div className={styles['rtl-run']}><Badge status={linksSwitch ? 'processing' : 'default'}/></div>
                    <div className={styles['rtl-url']}>
                        {linkDetail.name ? linkDetail.name + '@' : ''}{linkDetail.mqttType}{linkDetail.ipAddress}:{linkDetail.portNumber}{linkDetail.linksPath}
                    </div>
                </div>
                <div className={styles['rt-right']}>
                    <Button onClick={() => {
                        onoffLinks()
                    }} icon={linksSwitch === false ? <PoweroffOutlined/> : <CaretRightOutlined/>}
                            type={linksSwitch == false ? 'primary' : 'danger'} ghost>
                        {linksSwitch == false ? '连接' : '断开'}
                    </Button>
                    <Button onClick={() => {
                        editLinks(linkDetail.id)
                    }} type="primary" icon={<EditOutlined/>}>编辑</Button>
                    <Button onClick={() => {
                        deleteLinks(linkDetail.id)
                    }} type="primary" icon={<DeleteOutlined/>} danger>删除</Button>
                </div>
            </div>
            {/*<Test />*/}

            {
                linkDetail?.linksType?.typeCode === 1 ?
                    <MqttType onRef={ChildRef} errorLinks={errorLinks} linkDetail={linkDetail} select={select} dispatch={dispatch}/> : ''
            }
            {
                linkDetail?.linksType?.typeCode === 2 ?
                    <WsType onRef={ChildRef} errorLinks={errorLinks} linkDetail={linkDetail} select={select} dispatch={dispatch}/> : ''
            }
            {
                linkDetail?.linksType?.typeCode === 3 ?
                    <TcpType onRef={ChildRef} errorLinks={errorLinks} linkDetail={linkDetail} select={select} dispatch={dispatch}/> : ''
            }
        </div>


        {/* 连接添加、修改*/}

        <Drawer title={formTitle} placement="right" onClose={() => {
            setFormlIsModalVisible(false)
        }} visible={formIsModalVisible} width={'50vw'}>

            <div className={styles['links-info']}>
                <div className={styles['ljfs']}>
                    <div className={styles['ljfs-title']}>连接方式</div>
                    <Radio.Group value={linksType} onChange={(e) => {
                        setLinksType(e.target.value)

                        if (e.target.value === 1) {
                            setFormData({
                                mqttType:"mqtt://",
                                linksPath: "/mqtt",
                                linksDuration: 10,
                                keepAlive: 60,
                                clearSession: "false",
                            })
                        } else {
                            setFormData({})
                        }

                    }} buttonStyle="solid">
                        {
                            select.links_type.length>0 &&  select.links_type.map(item => {
                                return <Radio.Button value={item.typeCode}> {item.typeName}</Radio.Button>
                            })
                        }
                    </Radio.Group>
                </div>

                {
                    linksType === 1 ?
                        <>
                            <div className={styles['jccs']}>
                                <div className={styles['jccs-title']}> 基础参数</div>
                                <div className={styles['m-box']}>
                                    <div className={styles['mb-row2']}>
                                        <div className={styles['mbr-left']}>
                                            <Form.Item required={true} label={`名称`}>
                                                <Input value={formData.name}
                                                       onChange={(val) => {
                                                           setFormData({
                                                               ...formData,
                                                               name: val.target ? val.target.value : val
                                                           });
                                                       }}
                                                       placeholder="请输入名称"/>
                                            </Form.Item>
                                        </div>
                                        <div className={styles['mbr-right']}>
                                            <Form.Item required={true} label={`Client ID`}>
                                                <Input value={formData.clientId}
                                                       onChange={(val) => {
                                                           setFormData({
                                                               ...formData,
                                                               clientId: val.target ? val.target.value : val
                                                           });
                                                       }}
                                                       placeholder="请输入Client ID"/>
                                            </Form.Item>
                                        </div>
                                    </div>
                                    <div className={styles['mb-row2']}>
                                        <div className={styles['mbr-left']}>
                                            <Form.Item required={true} label={`IP地址`}>
                                                {/*<Input value={formData.typeName}*/}
                                                {/*       onChange={(val) => {*/}
                                                {/*           setFormData({*/}
                                                {/*               ...formData,*/}
                                                {/*               typeName: val.target ? val.target.value : val*/}
                                                {/*           });*/}
                                                {/*       }}*/}
                                                {/*       placeholder="请输入IP地址"/>*/}


                                                <Input.Group compact>
                                                    <Select
                                                        value={formData?.mqttType}
                                                        onChange={(val: any, option: any) => {
                                                            setFormData({
                                                                ...formData,
                                                                mqttType: val.target ? val.target.value : val,
                                                            });
                                                        }} placeholder="请选择类型" style={{width: '30%'}}>
                                                        {/*{*/}
                                                        {/*    select?.protocol_type.map((item) => {*/}
                                                        {/*        return <Option key={item.typeCode}*/}
                                                        {/*                       value={item.typeCode}>{item.typeName}</Option>*/}
                                                        {/*    })*/}
                                                        {/*}*/}
                                                        <Option value="mqtt://">mqtt://</Option>
                                                        <Option value="mqtts://">mqtts://</Option>
                                                        <Option value="ws://">ws://</Option>
                                                        <Option value="wss://">wss://</Option>
                                                    </Select>
                                                    <Input value={formData.ipAddress}
                                                           onChange={(val) => {
                                                               setFormData({
                                                                   ...formData,
                                                                   ipAddress: val.target ? val.target.value : val
                                                               });
                                                           }}
                                                           placeholder="请输入IP地址" style={{width: '70%'}}/>
                                                </Input.Group>

                                            </Form.Item>
                                        </div>
                                        <div className={styles['mbr-right']}>
                                            <Form.Item required={true} label={`端口号`}>
                                                <InputNumber value={formData.portNumber}
                                                             onChange={(val) => {
                                                                 setFormData({
                                                                     ...formData,
                                                                     portNumber: val ? val : 1
                                                                 });
                                                             }}
                                                             placeholder="请输入端口号" min={1} max={65535} style={{width: '100%'}}/>
                                            </Form.Item>
                                        </div>
                                    </div>


                                    {
                                        formData?.mqttType === 'ws://' || formData?.mqttType === 'wss://' ?
                                            <div className={styles['mb-row2']}>
                                                <div className={styles['mbr-left']}>
                                                    <Form.Item required={false} label={`Path`}>
                                                        <Input value={formData.linksPath}
                                                               onChange={(val) => {
                                                                   setFormData({
                                                                       ...formData,
                                                                       linksPath: val.target ? val.target.value : val
                                                                   });
                                                               }}
                                                               placeholder=""/>
                                                    </Form.Item>
                                                </div>
                                                <div className={styles['mbr-right']}>
                                                </div>
                                            </div> : ''
                                    }

                                    <div className={styles['mb-row2']}>
                                        <div className={styles['mbr-left']}>
                                            <Form.Item required={false} label={`用户名`}>
                                                <Input value={formData.username}
                                                       onChange={(val) => {
                                                           setFormData({
                                                               ...formData,
                                                               username: val.target ? val.target.value : val
                                                           });
                                                       }}
                                                       placeholder="请输入用户名"/>
                                            </Form.Item>
                                        </div>
                                        <div className={styles['mbr-right']}>
                                            <Form.Item required={false} label={`密码`}>
                                                <Input.Password value={formData.password}
                                                                onChange={(val) => {
                                                                    setFormData({
                                                                        ...formData,
                                                                        password: val.target ? val.target.value : val
                                                                    });
                                                                }}
                                                                placeholder="请输入密码"/>
                                            </Form.Item>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div className={styles['gjcs']}>
                                <div className={styles['gjcs-title']}>高级参数</div>
                                <div className={styles['m-box']}>
                                    <div className={styles['mb-row2']}>
                                        <div className={styles['mbr-left']}>
                                            <Form.Item required={true} label={`连接超时时长`}>
                                                <InputNumber value={formData.linksDuration}
                                                             onChange={(val) => {
                                                                 setFormData({
                                                                     ...formData,
                                                                     linksDuration: val ? val : 10
                                                                 });
                                                             }} placeholder="请输入连接超时时长" addonAfter="s" min={10}
                                                             style={{width: '100%'}}/>


                                            </Form.Item>
                                        </div>
                                        <div className={styles['mbr-right']}>
                                            <Form.Item required={true} label={`Keep Alive`}>

                                                <InputNumber value={formData.keepAlive}
                                                             onChange={(val) => {
                                                                 setFormData({
                                                                     ...formData,
                                                                     keepAlive: val ? val : 60
                                                                 });
                                                             }} placeholder="请输入Keep Alive" addonAfter="s" min={60}
                                                             style={{width: '100%'}}/>


                                            </Form.Item>
                                        </div>
                                    </div>
                                    <div className={styles['mb-row2']}>
                                        <div className={styles['mbr-left']}>
                                            <Form.Item required={true} label={`清除会话`}>
                                                <Radio.Group value={formData.clearSession}
                                                             onChange={(val) => {
                                                                 setFormData({
                                                                     ...formData,
                                                                     clearSession: val.target ? val.target.value : val
                                                                 });
                                                             }}>
                                                    <Radio value="true">true</Radio>
                                                    <Radio value="false">false</Radio>
                                                </Radio.Group>
                                            </Form.Item>
                                        </div>
                                        <div className={styles['mbr-right']}>

                                        </div>
                                    </div>

                                </div>
                            </div>
                        </> : ''
                }

                {
                    linksType === 2 ?
                        <>
                            <div className={styles['jccs']}>
                                <div className={styles['jccs-title']}> 基础参数</div>
                                {/*<div className={styles['m-box']}>*/}
                                {/*    <div className={styles['mb-row2']}>*/}
                                {/*        <div className={styles['mbr-left']}>*/}
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
                                {/*</div>*/}
                                {/*<div className={styles['mbr-right']}>*/}
                                <Form.Item required={true} label={`端口号`}>
                                    <InputNumber value={formData.portNumber}
                                                 onChange={(val) => {
                                                     setFormData({
                                                         ...formData,
                                                         portNumber: val ? val : 1
                                                     });
                                                 }}
                                                 placeholder="请输入端口号" min={1} max={65535} style={{width: '100%'}}/>
                                </Form.Item>
                                {/*    </div>*/}
                                {/*</div>*/}


                                <Form.Item required={false} label={`Path`}>
                                    <Input
                                        value={formData.linksPath}
                                        onChange={(val) => {
                                            setFormData({
                                                ...formData,
                                                linksPath: val.target ? val.target.value : val
                                            });
                                        }}
                                        placeholder=""/>
                                </Form.Item>

                                {/*</div>*/}
                            </div>

                        </> : ''
                }

                {
                    linksType === 3 ?
                        <>
                            <div className={styles['jccs']}>
                                <div className={styles['jccs-title']}> 基础参数</div>
                                {/*<div className={styles['m-box']}>*/}
                                {/*    <div className={styles['mb-row2']}>*/}
                                {/*        <div className={styles['mbr-left']}>*/}
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
                                {/*</div>*/}
                                {/*<div className={styles['mbr-right']}>*/}
                                <Form.Item required={true} label={`端口号`}>
                                    <InputNumber value={formData.portNumber}
                                                 onChange={(val) => {
                                                     setFormData({
                                                         ...formData,
                                                         portNumber: val ? val : 1
                                                     });
                                                 }}
                                                 placeholder="请输入端口号" min={1} max={65535} style={{width: '100%'}}/>
                                </Form.Item>
                                {/*    </div>*/}
                                {/*</div>*/}


                                {/*</div>*/}
                            </div>

                        </> : ''
                }

                <div className={styles['btn']}>
                    <Button onClick={() => {
                        addOrUpdate()
                    }} type="primary">确 定</Button>
                    <Button onClick={() => {
                        setFormlIsModalVisible(false)
                    }}>取消</Button>
                </div>
            </div>
        </Drawer>
    </div>);
};

export default connect(({common, select}) => ({
    common,
    select
}))(DebugLinks);
