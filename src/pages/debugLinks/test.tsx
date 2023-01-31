import React, {useEffect, useState} from "react";
import {connect} from "dva";
import {PaginatedParams} from "ahooks/lib/useAntdTable/";
import {useAntdTable} from "ahooks";

import {interfaceTest} from "../../services/common"


import {
    Table,
    Button,
    Empty,
    Modal,
    Form,
    Checkbox,
    Tag,
    Input,
    InputNumber,
    Tree,
    message,
    Select,
    Radio,
    Pagination, Row
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
    RiseOutlined, CaretRightOutlined
} from '@ant-design/icons';

import styles from './test.module.less';

import columns from './columns';
import TABLEJSON from './TABLEJSON.tsx';
import {listData, tableData, treeData} from './data.tsx';
import TableInfo from '@/components/TableInfo/TableInfo';
import SearchMore from "@/components/SearchMore/SearchMore";


const Test = (props: any) => {
    const {dispatch, select} = props;
    const [form] = Form.useForm();
    const [formTitle, setFormTitle] = useState<string>('');//弹框标题
    const [formIsModalVisible, setFormlIsModalVisible] = useState(false);//弹框状态，是否显示
    const [formData, setFormData] = useState<any>({});//弹框表单信息


    const editLinks = () => {
        setFormTitle("编辑");
        setFormlIsModalVisible(true);
    }

    return (<>
            <div className={styles['r-banner1']}>
                <div className={styles['r-b1-title']}>TCP调试</div>
                <div className={styles['r-b1-from']}>

                    <div className={styles['r-b1-f-left']}>
                        <div>协议类型</div>
                        <div>
                            <Select defaultValue="TCP Client" style={{width: 120}} onChange={() => {
                            }}>
                                <Option value="1">TCP Client</Option>
                                <Option value="2">TCP Server</Option>
                            </Select>
                        </div>
                    </div>
                    <div className={styles['r-b1-f-center']}>
                        <div>目标IP</div>
                        <div>
                            <Input onChange={() => {
                            }}/>
                        </div>
                    </div>
                    <div className={styles['r-b1-f-right']}>
                        <div>目标端口</div>
                        <div>
                            <Input/>
                        </div>
                    </div>

                </div>
                <div className={styles['r-b1-btn']}>
                    <Button type="primary" icon={<CaretRightOutlined/>}>连接</Button>
                    <Button>断开连接</Button>
                </div>
            </div>
            <div className={styles['r-banner2']}>
                <div className={styles['r-b2-title']}>发送区</div>
                <div className={styles['r-b2-box']}>
                    <div className={styles['r-b2-left']}>
                        <div>
                            <Radio.Group onChange={() => {
                            }} value={1}>
                                <Radio value={1}>ASCII</Radio>
                                <Radio value={2}>HEX</Radio>
                            </Radio.Group>
                        </div>
                        <div>
                            <Checkbox.Group style={{width: '100%'}} onChange={() => {
                            }}>
                                <Row style={{marginTop: '20px'}}>
                                    <Checkbox value="A">转义符指令解析</Checkbox>
                                </Row>
                                <Row style={{marginTop: '20px'}}>
                                    <Checkbox value="B">
                                        <div style={{display: "flex", alignItems: 'center'}}>
                                            <div style={{marginRight: '10px'}}>自动发送附加位</div>
                                            <div onClick={() => {
                                                editLinks()
                                            }} style={{color: 'rgba(0, 109, 196, 1)'}}>设置
                                            </div>
                                        </div>
                                    </Checkbox>
                                </Row>
                                <Row style={{marginTop: '20px'}}>
                                    <Checkbox value="C">
                                        <div style={{display: "flex", alignItems: 'center'}}>
                                            <div style={{marginRight: '10px'}}>循环周期</div>
                                            <div><Input suffix="ms" style={{width: '80px'}}/></div>
                                        </div>
                                    </Checkbox>
                                </Row>
                            </Checkbox.Group>
                        </div>
                    </div>
                    <div className={styles['r-b2-right']}>
                        <TextArea rows={7}/>
                    </div>
                </div>
            </div>
            <div className={styles['r-banner3']}>
                <div className={styles['r-b3-title']}>接收区</div>
                <div className={styles['r-b3-box']}>
                    <div className={styles['r-b3-left']}>
                        <div>
                            <Radio.Group onChange={() => {
                            }} value={1}>
                                <Radio value={1}>ASCII</Radio>
                                <Radio value={2}>HEX</Radio>
                            </Radio.Group>
                        </div>
                        <div>
                            <Checkbox.Group style={{width: '100%'}}
                                            onChange={() => {
                                            }}>
                                <Row style={{marginTop: '20px'}}>
                                    <Checkbox value="A">接收区自动换行</Checkbox>
                                </Row>
                                <Row style={{marginTop: '20px'}}>
                                    <Checkbox value="B">接收区显示日期</Checkbox>
                                </Row>
                                <Row style={{marginTop: '20px'}}>
                                    <Checkbox value="C">接收数据不显示</Checkbox>
                                </Row>
                            </Checkbox.Group>
                        </div>
                    </div>
                    <div className={styles['r-b3-right']}>
                        <TextArea rows={7}/>

                    </div>
                </div>
            </div>
        </>
    );
};

export default connect(({common, select}) => ({
    common,
    select
}))(Test);
