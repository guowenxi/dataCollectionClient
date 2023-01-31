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
    Pagination
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
    RiseOutlined
} from '@ant-design/icons';

import styles from './style.module.less';

import columns from './columns';
import TABLEJSON from './TABLEJSON.tsx';
import {listData, tableData, treeData} from './data.tsx';
import TableInfo from '@/components/TableInfo/TableInfo';
import SearchMore from "@/components/SearchMore/SearchMore";
import defaultShebei from '@/assets/default-shebei.png';
import kai from '@/assets/kai.png';
import guan from "@/assets/guan.png";

const InterfaceManage = (props: any) => {
    const {dispatch, select} = props;
    const [form] = Form.useForm();
    const [DETAIL, setDETAIL] = useState({}); /* 表格详情 */
    const [SELECTROWKEYS, setSELECTROWKEYS] = useState([]);  /* 选中项  */

    const [formTitle, setFormTitle] = useState<string>('');//弹框标题
    const [formIsModalVisible, setFormlIsModalVisible] = useState(false);//弹框状态，是否显示
    const [formData, setFormData] = useState<any>({});//弹框表单信息

    // 列表数据
    const [interfaceData, setInterfaceData] = useState<any>([]);
    const [interfaceCurrentPage, setInterfaceCurrentPage] = useState<any>({pageNo: 1});
    const [interfaceTotalPage, setInterfaceTotalPage] = useState<number>(0);

    const [listBrand, setListBrand] = useState<any>([]);
    const [listVersion, setListVersion] = useState<any>([]);
    const [listFunctionType, setListFunctionType] = useState<any>([]);
    const [listFunctionOption, setListFunctionOption] = useState<any>([]);

    const [deleteId, setDeleteId] = useState<any>([]);

    useEffect(() => {
        setInterfaceCurrentPage({pageNo: 1});
        getListData(null);
        findAllByType(0, 1)
    }, [])

    const getListData = (data: any, current: number = 1, pageSize: number = 10) => {
        dispatch({
            type: 'common/getRequestData',
            method: 'GET',
            url: "/data-acquisition/interface-info",
            payload: {
                current: interfaceCurrentPage.pageNo,
                pageSize,
                'rbacToken': '7ed6a62261854a4eb27d844ff4df1885',
                ...data
            },
            callback: (res: any) => {

                if (res.success) {
                    let list = res.data.list;
                    let total = res.data.total;
                    setInterfaceTotalPage(total);
                    setInterfaceData(list);

                }
            },
        });

    }
    const onFinish = (values: any) => {
        console.log(values);
        setInterfaceCurrentPage({pageNo: 1});
        getListData(values);
    };

    /* 接口 添加  */
    const addInterface = () => {
        setFormData({});
        setFormTitle("新增接口");
        setFormlIsModalVisible(true);
    }
    /* 接口 编辑  */
    const editInterface = (id) => {
        dispatch({
            type: 'common/getRequestData',
            method: 'GET',
            url: "/data-acquisition/interface-info/" + id,
            payload: {},
            callback: (res: any) => {
                console.log(res)
                if (res.success) {

                    let data = res.data;
                    if (data.brandCode) {
                        findAllByType(data.brandCode, 2)
                    }
                    if (data.brandCode) {
                        findAllByType(data.versionNumber, 3)
                    }
                    if (data.brandCode) {
                        findAllByType(data.functionType, 4)
                    }


                    setFormData({
                        ...data,
                        // "requestMode": data.request?.requestMode,
                        // "requestUrl": data.request?.requestUrl
                    });
                    setFormTitle("编辑接口");
                    setFormlIsModalVisible(true);
                }
            },
        });

    }

    /* 接口删除 */
    const deleteInterfaceInfo = (id: any) => {
        Modal.confirm({
            title: '删除',
            icon: '',
            content: id ? '确定要删除当前接口吗' : '确认要删除这些数据吗',
            onOk() {
                dispatch({
                    type: 'common/getRequestData',
                    method: 'post',
                    url: id ? `/data-acquisition/interface-info/delete` : `/data-acquisition/interface-info/delete`,
                    payload: {
                        ids: id ? [id] : deleteId
                    },
                    callback: (res: any) => {
                        if (res.success) {
                            setDeleteId([])
                            message.success(res.message);
                            setInterfaceCurrentPage({pageNo: 1});

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
    /* 接口 测试  */
    const debugInterface = () => {
        if (!formData.serviceIp || !formData.requestUrl || !formData.servicePort) {
            message.warning("请输入完整")
            return
        }

        try {
            let data = formData.jsonCode;
            let jsonCode = {}
            if (data) {
                jsonCode = JSON.parse(data);
            }
            dispatch({
                type: 'common/getRequestData',
                method: 'post',
                url: 'http://' + formData.serviceIp + ':' + formData.servicePort + formData.requestUrl,
                payload: {
                    ...jsonCode
                },
                callback: (res: any) => {
                    console.log(res)
                    if (res.success) {
                        setFormData({...formData, interfaceStatus: 1, debugResult: JSON.stringify(res)})
                    } else {
                        message.warning("连接失败")
                        setFormData({...formData, interfaceStatus: 0})

                    }
                },
            });
        } catch (e) {
            message.error("请输入如正确的，请求参数(json) ")
            setFormData({...formData, interfaceStatus: 0})
        }


    }

    const addOrUpdate = () => {

        if(formData.interfaceType === 1){
            addOrUpdateThirdParty()

            return
        }

        let _url = ""
        let _data = {}
        if (formData.id) {
            _url = '/data-acquisition/interface-info/update'
            delete formData.request
            delete formData.requestMethod
            delete formData.requestUrl
            _data = {...formData,interfaceStatus:formData.interfaceStatus?1:0}
        } else {
            _url = '/data-acquisition/interface-info/create'
            _data = {...formData,interfaceStatus:formData.interfaceStatus?1:0}
        }

        dispatch({
            type: 'common/getRequestData',
            method: 'post',
            url: _url,
            payload: {
                ..._data
            },
            callback: (res: any) => {
                console.log(res)
                if (res.success) {
                    message.success(res.message);
                    setFormlIsModalVisible(false);
                    setInterfaceCurrentPage({pageNo: 1});

                    getListData(null);
                }
            },
        });
    }

    const addOrUpdateThirdParty = () => {

        let _url = ""
        let _data = {}
        if (formData.id) {
            _url = '/data-acquisition/interface-info/updateThirdParty'
            delete formData.request
            delete formData.requestMethod
            _data = {...formData}
        } else {
            _url = '/data-acquisition/interface-info/createThirdParty'
            _data = {...formData}
        }

        dispatch({
            type: 'common/getRequestData',
            method: 'post',
            url: _url,
            payload: {
                ..._data
            },
            callback: (res: any) => {
                console.log(res)
                if (res.success) {
                    message.success(res.message);
                    setFormlIsModalVisible(false);
                    setInterfaceCurrentPage({pageNo: 1});

                    getListData(null);
                }
            },
        });
    }

    // const interfaceTest = (data: any) => {

    // dispatch({
    //     type: 'common/getRequestData',
    //     method: data ? data.requestMode : formData.requestMode,
    //     url: data ? data.requestUrl : formData.requestUrl,
    //     payload: data ? data.jsonCode : formData.jsonCode,
    //     callback: (res: any) => {
    //         console.log(res)
    //         if (res.success) {
    //             setFormData({...formData, "interfaceStatus": 2})
    //             message.success(res.message)
    //         } else {
    //             message.error("调试失败")
    //         }
    //     },
    // });
    // }

    const findAllByType = (parentId: number, typeLevel: number) => {
        dispatch({
            type: 'common/getRequestData',
            method: 'GET',
            url: "/data-acquisition/interface-type-info/findAllByType",
            payload: {
                parentId,
                typeLevel
            },
            callback: (res: any) => {
                if (res.success) {
                    if (typeLevel === 1) {
                        setListBrand(res.data)
                    }
                    if (typeLevel === 2) {
                        setListVersion(res.data)
                    }
                    if (typeLevel === 3) {
                        setListFunctionType(res.data)
                    }
                    if (typeLevel === 4) {
                        setListFunctionOption(res.data)
                    }
                }
            },
        });
    }


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

    return (<div className={styles['interfaceManage']}>
            <div className={styles['search']}>
                <div className={styles['left']}>
                    <Button onClick={() => {
                        addInterface()
                    }} type="primary" icon={<PlusCircleOutlined/>}>新增接口</Button>
                    <Button onClick={() => {
                        console.log(deleteId.length)
                        if (deleteId.length === 0) {
                            message.warning("请选择要删除的接口")
                            return;
                        }
                        deleteInterfaceInfo()
                    }} type="primary" icon={<DeleteOutlined/>} danger>批量删除</Button>
                </div>
                <div className={styles['right']}>
                    <Form
                        layout={'inline'}
                        form={form}
                        onFinish={onFinish}>
                        <Form.Item label="接口名称" name="interfaceName">
                            <Input placeholder="请输入接口名称"/>
                        </Form.Item>

                        <Form.Item label="接口类型" name="interfaceType">
                            <Select
                                placeholder="请选择接口类型"
                                style={{width: "170px"}}>
                                {
                                    select?.interface_type?.map(item => {
                                        return <Option key={item.typeCode}
                                                       value={item.typeCode}>{item.typeName}</Option>
                                    })
                                }

                            </Select>
                        </Form.Item>
                        <Form.Item label="状态" name="interfaceStatus">
                            <Radio.Group value={0} defaultValue={0}>
                                <Radio value={0}>全部</Radio>
                                <Radio value={1}>有效</Radio>
                                <Radio value={2}>无效</Radio>
                            </Radio.Group>
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit">查询</Button>
                            <Button htmlType="button" onClick={() => {
                                form.resetFields();
                                interfaceCurrentPage.pageNo = 1
                                setInterfaceCurrentPage({pageNo: 1});
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
                    interfaceData.length === 0 ?
                        <div style={{margin: "40px auto"}}><Empty/></div> :
                        interfaceData.map((item, index) => {
                            return <div key={item.id} className={styles['banner']}>
                                <div className={styles['row1']}>
                                    <div>
                                        <img src={defaultShebei}/>
                                    </div>
                                    <div>{item.name}

                                    </div>
                                    <div><Checkbox indeterminate={false} onChange={(e) => {
                                        updateCheckboxStatus(e.target.checked, item.id);
                                    }}/></div>
                                </div>
                                <div className={styles['row2']}>
                                    <div>状态</div>
                                    <div>接口类型</div>
                                </div>
                                <div className={styles['row3']}>
                                    <div>
                                        <Tag
                                            color={item.interfaceStatus === 0 ? 'error' : 'success'}>{item.interfaceStatus === 0 ? '无效' : '有效'}</Tag>
                                    </div>
                                    <div>{item?.interfaceType?.typeName}</div>
                                </div>
                                <div className={styles['row4']}>
                                    <div onClick={() => {
                                        editInterface(item.id)
                                    }}>编辑
                                    </div>
                                    <div onClick={() => {
                                        deleteInterfaceInfo(item.id)
                                    }}>删除
                                    </div>
                                </div>
                            </div>
                        })
                }
            </div>

            <div className={styles['footer']}>
                {
                    interfaceData.length === 0 ? '' :
                        <Pagination pageSize={10} total={interfaceTotalPage} current={interfaceCurrentPage.pageNo}
                                    onChange={(page: number, pageSize: number) => {
                                        interfaceCurrentPage.pageNo = page
                                        setInterfaceCurrentPage({pageNo: page});
                                        getListData(null)
                                    }}/>
                }
            </div>

            {/* 接口添加、修改*/}
            <Modal title={formTitle} visible={formIsModalVisible} onCancel={() => {
                setFormlIsModalVisible(false);
            }}

                   footer={[
                       <Button key="back" onClick={() => {
                           setFormlIsModalVisible(false);
                       }}>
                           取消
                       </Button>,
                       <Button onClick={() => {
                           debugInterface();
                       }} type="primary" ghost>
                           测试
                       </Button>,
                       <Button onClick={() => {
                           addOrUpdate();
                       }} type="primary">确定</Button>,
                   ]}

                   width={600}>
                <Form layout="vertical">

                    {
                        formTitle === "新增接口" || formTitle === "编辑接口" ? <div className={styles['m-box']}>
                            <div className={styles['mb-row2']}>
                                <div className={styles['mbr-left']}>
                                    <Form.Item required={true} label={`接口名称`}>
                                        <Input value={formData.name}
                                               onChange={(val) => {
                                                   setFormData({
                                                       ...formData,
                                                       name: val.target ? val.target.value : val
                                                   });
                                               }}
                                               placeholder="请输入接口名称"/>
                                    </Form.Item>
                                </div>
                                <div className={styles['mbr-right']}>
                                    <Form.Item required={true} label={`接口类型`}>

                                        <Select
                                            value={formData.interfaceType}
                                            onChange={(val: any, option: any) => {
                                                console.log(val)
                                                if(val === 2) {
                                                    setFormData({
                                                        ...formData,
                                                        interfaceType: val.target ? val.target.value : val,
                                                        interfaceTypeName: option.children,
                                                        debugResult: ""
                                                    });
                                                }else {
                                                    setFormData({
                                                        requestMethod: "GET",
                                                        interfaceType: val.target ? val.target.value : val,
                                                        interfaceTypeName: option.children,
                                                        debugResult: ""
                                                    });
                                                }
                                            }}
                                            style={{width: '100%'}}
                                            placeholder="请选择接口类型"
                                        >

                                            {
                                                select?.interface_type?.map((item) => {
                                                    return <Option key={item.typeCode}
                                                                   value={item.typeCode}>{item.typeName}</Option>
                                                })
                                            }
                                        </Select>

                                    </Form.Item>

                                </div>
                            </div>



                            {
                                formData.interfaceType === 1 ? <>
                                    <div className={styles['mb-row1']}>
                                        <Form.Item required={true} label={`请求`}>
                                            <Input value={formData.requestUrl}
                                                   onChange={(val) => {
                                                       setFormData({
                                                           ...formData,
                                                           requestUrl: val.target ? val.target.value : val
                                                       });
                                                   }}
                                                   addonBefore={
                                                <Select value={formData.requestMethod}
                                                        onChange={(val) => {
                                                            setFormData({
                                                                ...formData,
                                                                requestMethod: val.target ? val.target.value : val
                                                            });
                                                        }}
                                                        className="select-before">
                                                    <Option value="GET">GET</Option>
                                                    <Option value="POST">POST</Option>
                                                </Select>}/>

                                        </Form.Item>
                                        <Form.Item required={true} label={`轮询(ms)`}>
                                            <InputNumber value={formData.polling}
                                                         onChange={(val) => {
                                                             setFormData({
                                                                 ...formData,
                                                                 polling: val ? val : val
                                                             });
                                                         }} min={1} max={65535} maxLength={5} style={{width: "100%"}}/>
                                        </Form.Item>
                                    </div>
                                </> : <>
                                    <div className={styles['mb-row2']}>
                                        <div className={styles['mbr-left']}>
                                            <Form.Item required={true} label={`IP地址`}>
                                                <Input value={formData.serviceIp}
                                                       onChange={(val) => {
                                                           setFormData({
                                                               ...formData,
                                                               serviceIp: val.target ? val.target.value : val
                                                           });
                                                       }}
                                                       placeholder="请输入IP地址"/>
                                            </Form.Item>
                                        </div>
                                        <div className={styles['mbr-right']}>
                                            <Form.Item required={true} label={`端口号`}>
                                                <InputNumber value={formData.servicePort}
                                                             onChange={(val) => {
                                                                 setFormData({
                                                                     ...formData,
                                                                     servicePort: val ? val : 1
                                                                 });
                                                             }}
                                                             placeholder="请输入端口号" min={1} maxLength={65535}
                                                             style={{width: "100%"}}/>
                                            </Form.Item>
                                        </div>
                                    </div>

                                    <div className={styles['mb-row2']}>
                                        <div className={styles['mbr-left']}>
                                            <Form.Item required={true} label={`品牌`}>

                                                <Select
                                                    value={formData.brandCode}
                                                    onChange={(val: any, option: any) => {
                                                        findAllByType(val, 2)
                                                        setFormData({
                                                            ...formData,
                                                            brandCode: val.target ? val.target.value : val,
                                                            brandName: option.children,
                                                            versionNumber: null,
                                                            versionNumberName: null,
                                                            functionType: null,
                                                            functionTypeName: null,
                                                            functionOption: null,
                                                            functionOptionName: null,
                                                        });
                                                    }}
                                                    showSearch
                                                    filterOption={(input, option: any) => {
                                                        return option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                                    }}
                                                    style={{width: '100%'}}
                                                    placeholder="请选择品牌"
                                                >

                                                    {
                                                        listBrand?.map((item) => {
                                                            return <Option key={item.id}
                                                                           value={item.id}>{item.typeName}</Option>
                                                        })
                                                    }
                                                </Select>

                                            </Form.Item>

                                        </div>
                                        <div className={styles['mbr-right']}>
                                            <Form.Item required={true} label={`版本号`}>
                                                <Select
                                                    value={formData.versionNumber}
                                                    onChange={(val: any, option: any) => {

                                                        findAllByType(val, 3)

                                                        setFormData({
                                                            ...formData,
                                                            versionNumber: val.target ? val.target.value : val,
                                                            versionNumberName: option.children,
                                                            functionType: null,
                                                            functionTypeName: null,
                                                            functionOption: null,
                                                            functionOptionName: null,
                                                        });
                                                    }}
                                                    showSearch
                                                    filterOption={(input, option: any) => {
                                                        return option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                                    }}
                                                    style={{width: '100%'}}
                                                    placeholder="请选择版本号"
                                                >

                                                    {
                                                        listVersion?.map((item) => {
                                                            return <Option key={item.id}
                                                                           value={item.id}>{item.typeName}</Option>
                                                        })
                                                    }
                                                </Select>
                                            </Form.Item>

                                        </div>
                                    </div>

                                    <div className={styles['mb-row2']}>
                                        <div className={styles['mbr-left']}>
                                            <Form.Item required={true} label={`功能类别`}>

                                                <Select
                                                    value={formData.functionType}
                                                    onChange={(val: any, option: any) => {

                                                        findAllByType(val, 4)

                                                        setFormData({
                                                            ...formData,
                                                            functionType: val.target ? val.target.value : val,
                                                            functionTypeName: option.children,
                                                            functionOption: null,
                                                            functionOptionName: null,
                                                        });
                                                    }}
                                                    showSearch
                                                    filterOption={(input, option: any) => {
                                                        return option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                                    }}
                                                    style={{width: '100%'}}
                                                    placeholder="请选择功能类别"
                                                >
                                                    {
                                                        listFunctionType?.map((item) => {
                                                            return <Option key={item.id}
                                                                           value={item.id}>{item.typeName}</Option>
                                                        })
                                                    }
                                                </Select>

                                            </Form.Item>
                                        </div>
                                        <div className={styles['mbr-right']}>
                                            <Form.Item required={true} label={`功能选项`}>
                                                <Select
                                                    value={formData.functionOption}
                                                    onChange={(val: any, option: any) => {
                                                        console.log(option)
                                                        setFormData({
                                                            ...formData,
                                                            functionOption: val.target ? val.target.value : val,
                                                            functionOptionName: option.children,
                                                            requestMethod: 'POST',
                                                            requestUrl: option.requestUrl
                                                        });
                                                    }}
                                                    showSearch
                                                    filterOption={(input, option: any) => {
                                                        return option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                                    }}
                                                    style={{width: '100%'}}
                                                    placeholder="请选择功能选项"
                                                >

                                                    {
                                                        listFunctionOption?.map((item) => {
                                                            return <Option key={item.id} requestUrl={item.requestUrl}
                                                                           value={item.id}>{item.typeName}</Option>
                                                        })
                                                    }
                                                </Select>
                                            </Form.Item>
                                        </div>
                                    </div>
                                </>
                            }


                            <div className={styles['mb-row1']}>
                                <Form.Item required={false} label={`请求参数(json)`}>
                                    <TextArea value={formData.jsonCode}
                                              onChange={(val) => {
                                                  setFormData({
                                                      ...formData,
                                                      jsonCode: val.target ? val.target.value : val
                                                  });
                                              }}
                                              placeholder={`例如: { "name": "张三三", "age": 18 }`} rows={4}/>
                                </Form.Item>
                            </div>

                            {formData.debugResult ? <div className={styles['mb-row1']}>
                                <Form.Item required={false} label={`请求结果`}>
                                    <TextArea value={formData.debugResult} disabled={true}
                                              onChange={(val) => {
                                                  setFormData({
                                                      ...formData,
                                                      debugResult: val.target ? val.target.value : val
                                                  });
                                              }}
                                              readOnly={true} rows={4}/>
                                </Form.Item>
                            </div> : null}


                        </div> : ''
                    }


                    {
                        formTitle === "调试接口" ? <div className={styles['m-box']}>

                            <div className={styles['mb-row1']}>
                                <Form.Item required={true} label={`请求参数(json)`}>
                                    <TextArea value={formData.jsonCode}
                                              onChange={(val) => {
                                                  setFormData({
                                                      ...formData,
                                                      jsonCode: val.target ? val.target.value : val
                                                  });
                                              }}
                                              placeholder={`例如: { "name": "张三三", "age": 18 }`} rows={4}/>
                                </Form.Item>
                            </div>
                            <div className={styles['mb-row1']}>
                                <Form.Item required={true} label={`请求结果`}>
                                    <TextArea value={formData.debugResult}
                                              onChange={(val) => {
                                                  setFormData({
                                                      ...formData,
                                                      debugResult: val.target ? val.target.value : val
                                                  });
                                              }}
                                              readOnly={true} rows={4}/>
                                </Form.Item>
                            </div>

                        </div> : ''
                    }
                </Form>
            </Modal>
        </div>
    );
};

export default connect(({common, select}) => ({
    common,
    select
}))(InterfaceManage);
