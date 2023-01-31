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
    DatePicker,
    Space,
    Input,
    Switch,
    Tree,
    message,
    Select,
    Radio,
    Upload
} from "antd";

const {TextArea} = Input;
const {Search} = Input;
const {Option} = Select;
const {Column} = Table;
import moment from "moment";

import columns from './columns';
import TABLEJSON from './TABLEJSON.tsx';
import listData from './data.ts';
import TableInfo from '@/components/TableInfo/TableInfo';
import SearchMore from "@/components/SearchMore/SearchMore";
import styles from "./style.module.less";
import {DeleteOutlined, EditOutlined, FallOutlined, PlusCircleOutlined, RiseOutlined} from "@ant-design/icons";
import defaultShebei from "@/assets/default-shebei.png";
import kai from "@/assets/kai.png";
import guan from "@/assets/guan.png";

const Test = (props: any) => {
    const {dispatch, select} = props;
    const [form] = Form.useForm();

    const [DETAIL, setDETAIL] = useState({}); /* 表格详情 */

    const [SELECTROWKEYS, setSELECTROWKEYS] = useState([]);  /* 选中项  */


    const [menuList, setMenuList] = useState([]);

    const [formTitleRole, setFormTitleRole] = useState<string>('');//弹框标题
    const [formIsModalVisibleRole, setFormlIsModalVisibleRole] = useState(false);//弹框状态，是否显示
    const [formDataRole, setFormDataRole] = useState<any>({});//弹框表单信息


    const [listRole, setListRole] = useState([]);  /* 选中项  */
    const [formTitleUser, setFormTitleUser] = useState<string>('');//弹框标题
    const [formIsModalVisibleUser, setFormlIsModalVisibleUser] = useState(false);//弹框状态，是否显示
    const [formDataUser, setFormDataUser] = useState<any>({});//弹框表单信息


    const [userList, setUserList] = useState([]);
    const [drawerTitle, setDrawerTitle] = useState<string>('');//弹框标题
    const [visible, setVisible] = useState(false);

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
                        let list = res.data.list;
                        let total = res.data.total;
                        resolve({
                            list: list,
                            total: total,
                        });
                    }
                },
            });
        });
    };

    const {tableProps, search} = useAntdTable(getTableData, {
        defaultPageSize: 10,
        form
    });
    const {submit, reset} = search;

    const selectRole = () => {
        dispatch({
            type: 'common/getRequestData',
            method: 'GET',
            url: "/data-acquisition/role-info/list",
            payload: {},
            callback: (res: any) => {
                if (res.success) {
                    setListRole(res.data)
                }
            },
        });
    }
    const selectMenu = () => {
        return new Promise((resolve) => {
            dispatch({
                type: 'common/getRequestData',
                method: 'GET',
                url: "/data-acquisition/menu-info",
                payload: {},
                callback: (res: any) => {
                    if (res.success) {
                        const data = res.data[0];
                        const menuJson = JSON.parse(data.menuJson);
                        dealTreeData(menuJson, 0, []);
                        resolve(menuJson);
                    }
                },
            });
        });

    }

    const dealTreeData = (_list: any, idx: number, idList: Array) => {
        if (Array.isArray(_list)) {
            _list.map((item: object, index: number) => {
                item.key = item.id;
                item.value = item.id;
                item.title = item.displayName;
                if (idx === 0 && idx + index === 0) {
                    idList.push(item.id)
                }
                if (Array.isArray(item.children) && item.children.length) {
                    dealTreeData(item.children, idx + index, idList)
                } else {
                    if (idx === 0 && idx + index === 0) {
                        // detailClick(item);//默认选中事项
                    }
                }
            })
        }
    }


    /* 角色 添加  */
    const addRole = async () => {
        let _data = await selectMenu();
        setMenuList(_data)

        setFormDataRole({})
        setFormTitleRole("新增角色");
        setFormlIsModalVisibleRole(true);
    }
    /* 角色 编辑  */
    const editRole = async (id) => {

        let _data = await selectMenu();
        setMenuList(_data)

        dispatch({
            type: 'common/getRequestData',
            method: 'GET',
            url: "/data-acquisition/role-info/" + id,
            payload: {},
            callback: (res: any) => {
                if (res.success) {
                    const data = res.data;
                    setFormDataRole(
                        {
                            ...data,
                            pageAuthority: JSON.parse(data.pageAuthority),
                            "jurisdictionDeadline": data.jurisdictionDeadline ? moment(data.jurisdictionDeadline, 'YYYY-MM-DD HH:mm:SS') : "",
                        }
                    )
                    setFormTitleRole("编辑角色");
                    setFormlIsModalVisibleRole(true);
                }
            },
        });
    }


    /* 角色 删除 */
    const deleteRole = (id) => {
        Modal.confirm({
            title: '删除',
            icon: '',
            content: '确定要删除当前角色吗',
            onOk() {
                dispatch({
                    type: 'common/getRequestData',
                    method: 'delete',
                    url: "/data-acquisition/role-info/" + id,
                    payload: {},
                    callback: (res: any) => {
                        if (res.success) {
                            reset()
                        }
                    },
                });

            },
            onCancel() {
                console.log('Cancel');
            },
        });
    }
    /* 批量角色 删除 */
    const deleteRoleBatch = () => {
        console.log(SELECTROWKEYS)
        Modal.confirm({
            title: '删除',
            icon: '',
            content: '确定要删除当前选中的角色吗',
            onOk() {
                dispatch({
                    type: 'common/getRequestData',
                    method: 'post',
                    url: "/data-acquisition/role-info/removeBatch",
                    payload: {
                        ids: SELECTROWKEYS
                    },
                    callback: (res: any) => {
                        if (res.success) {
                            reset()
                        }
                    },
                });

            },
            onCancel() {
                console.log('Cancel');
            },
        });
    }


    const addOrUpdateRole = () => {
        let _url = ""
        let _data = {}
        if (formDataRole.id) {
            _url = '/data-acquisition/role-info/update'
            _data = {
                ...formDataRole,
                jurisdictionDeadline: formDataRole.jurisdictionDeadline === null ? '' : formDataRole.jurisdictionDeadline.format("YYYY-MM-DD HH:mm:SS")
            }
        } else {
            _url = '/data-acquisition/role-info/create'
            _data = {
                ...formDataRole,
                jurisdictionDeadline: formDataRole.jurisdictionDeadline === null ? '' : formDataRole.jurisdictionDeadline.format("YYYY-MM-DD HH:mm:SS"),
            }
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
                    setFormlIsModalVisibleRole(false);
                    reset()
                }
            },
        });
    }
    const treeData = [
        {
            title: 'parent 1',
            key: '0-0',
            children: [
                {
                    title: 'parent 1-0',
                    key: '0-0-0',
                    disabled: true,
                    children: [
                        {
                            title: 'leaf',
                            key: '0-0-0-0',
                            disableCheckbox: true,
                        },
                        {
                            title: 'leaf',
                            key: '0-0-0-1',
                        },
                    ],
                },
                {
                    title: 'parent 1-1',
                    key: '0-0-1',
                    children: [{title: <span style={{color: '#1890ff'}}>sss</span>, key: '0-0-1-0'}],
                },
            ],
        },
    ];

    const onSelect = (selectedKeys, info) => {
        console.log('selected', selectedKeys, info)
    };

    const onCheck = (checkedKeys, info) => {
        console.log('onCheck', checkedKeys, info);
        setFormDataRole({
            ...formDataRole,
            pageAuthority: checkedKeys ? JSON.stringify(checkedKeys) : ''
        });
    };


    /* 用户 查询  */
    const getUsers = (item) => {
        setFormDataRole(item)
        dispatch({
            type: 'common/getRequestData',
            method: 'GET',
            url: "/data-acquisition/user-info/findByRoleId?roleId=" + item.id,
            payload: {},
            callback: (res: any) => {
                if (res.success) {
                    const data = res.data;
                    let list = data.reverse()
                    setVisible(true)
                    setDrawerTitle("用户成员");
                    setUserList(list)
                }
            },
        });
    }
    /* 用户 添加  */
    const addUser = () => {
        selectRole()
        setFormDataUser({})
        setFormTitleUser("新增用户");
        setFormlIsModalVisibleUser(true);
    }
    /* 用户 编辑  */
    const editUser = (item) => {
        selectRole()
        setFormDataUser({...item})
        setFormTitleUser("编辑用户");
        setFormlIsModalVisibleUser(true);
    }
    /* 用户 删除 */
    const deleteUser = (id) => {
        Modal.confirm({
            title: '删除',
            icon: '',
            content: '确定要删除当前用户吗',
            onOk() {
                dispatch({
                    type: 'common/getRequestData',
                    method: 'delete',
                    url: "/data-acquisition/user-info/" + id,
                    payload: {},
                    callback: (res: any) => {
                        if (res.success) {
                            message.success(res.message);
                            setFormlIsModalVisibleUser(false);
                            getUsers(formDataRole)
                            reset()
                        }
                    },
                });

            },
            onCancel() {
                console.log('Cancel');
            },
        });
    }
    // 添加用户
    const addOrUpdateUser = () => {
        let _url = ""
        let _data = {}
        if (formDataUser.id) {
            _url = '/data-acquisition/user-info/update'
            _data = {
                ...formDataUser,
            }
        } else {
            _url = '/data-acquisition/user-info/create'
            _data = {
                ...formDataUser,
            }
        }
        const reg: RegExp = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$/;
        if (!reg.test(_data.password)) {
            message.warning('密码必须包含1位数字，1位大写字母，1位小写字母，且长度为8-16位');
            return;
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

                    if(formDataUser.id){
                        setFormlIsModalVisibleUser(false);
                        getUsers(formDataRole)
                    } else {
                        setFormlIsModalVisibleUser(false);
                        reset()
                    }

                }
            },
        });
    }


    return (<div className={styles['jurisdictionManage']}>
        <div className={styles['search']}>
            <div className={styles['left']}>
                <Button onClick={() => {
                    addRole()
                }} type="primary" icon={<PlusCircleOutlined/>}>新增角色</Button>
                <Button onClick={() => {
                    addUser()
                }} type="primary" icon={<PlusCircleOutlined/>}>新增用户</Button>
                <Button onClick={() => {
                    deleteRoleBatch()
                }} type="primary" icon={<DeleteOutlined/>} danger>批量删除</Button>
            </div>
            <div className={styles['right']}>

            </div>
        </div>

        <Table
            rowKey="id"
            scroll={{x: 1000}}
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
            <Column
                width={"10%"}
                align='center'
                title="停用/启用"
                render={(text: any, record: any, index: any) => {
                    return <Switch checkedChildren="开启" unCheckedChildren="停用"
                                   defaultChecked={record.status === 1 ? true : false}
                                   onChange={(e) => {
                                       console.log(e)
                                       setFormDataRole({...formDataRole, status: e ? 1 : 0})
                                       addOrUpdateRole();
                                   }}
                    />
                }}
            />

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
                                                setDETAIL(record)

                                                if (item.name === "查看用户") {
                                                    getUsers(record);
                                                }
                                                if (item.name === "编辑") {
                                                    editRole(record.id);
                                                }
                                                if (item.name === "删除") {
                                                    deleteRole(record.id);
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

        {/* 新增用户*/}
        <Modal title={formTitleUser} visible={formIsModalVisibleUser} onOk={() => {
            addOrUpdateUser()
        }} onCancel={() => {
            setFormlIsModalVisibleUser(false);
        }} width={600} style={{borderRadius: '5%'}}>
            <Form
                layout="vertical"
            >

                <div className={styles['m-box']}>
                    <div className={styles['mb-row2']}>
                        <div className={styles['mbr-left']}>
                            <Form.Item required={true} label={`用户姓名`}>
                                <Input value={formDataUser.username}
                                       onChange={(val) => {
                                           setFormDataUser({
                                               ...formDataUser,
                                               username: val.target ? val.target.value : val
                                           });
                                       }}
                                       placeholder="请输入用户姓名"/>
                            </Form.Item>
                        </div>
                        <div className={styles['mbr-right']}>
                            <Form.Item required={true} label={`所属角色`}>

                                <Select
                                    value={formDataUser.roleId}
                                    onChange={(val: any) => {
                                        setFormDataUser({
                                            ...formDataUser,
                                            roleId: val.target ? val.target.value : val
                                        });
                                    }}
                                    style={{width: '100%'}}
                                    placeholder="请选择所属角色"
                                >
                                    {
                                        listRole.map((item) => {
                                            return <Option key={item.id}
                                                           value={item.id}>{item.roleName}</Option>
                                        })
                                    }

                                </Select>

                            </Form.Item>
                        </div>
                    </div>
                    <div className={styles['mb-row2']}>
                        <div className={styles['mbr-left']}>
                            <Form.Item required={true} label={`手机号码`}>
                                <Input value={formDataUser.phone}
                                       onChange={(val) => {
                                           setFormDataUser({
                                               ...formDataUser,
                                               phone: val.target ? val.target.value : val
                                           });
                                       }}
                                       placeholder="请输入手机号码"/>
                            </Form.Item>
                        </div>
                        <div className={styles['mbr-right']}>
                            <Form.Item required={true} label={`用户密码`}>

                                <Input.Password value={formDataUser.password}
                                                onChange={(val) => {
                                                    setFormDataUser({
                                                        ...formDataUser,
                                                        password: val.target ? val.target.value : val
                                                    });
                                                }}
                                                placeholder="请输入用户密码"/>

                            </Form.Item>
                        </div>
                    </div>
                    <div style={{color: "red"}}>规则：密码必须由大写字母，小写字母，数字，特殊字符组成,且长度大于8位</div>
                </div>
            </Form>
        </Modal>


        {/* 新增编辑 角色*/}
        <Modal title={formTitleRole} visible={formIsModalVisibleRole} onOk={() => {
            addOrUpdateRole()
        }} onCancel={() => {
            setFormlIsModalVisibleRole(false);
        }} width={800} style={{borderRadius: '5%'}}>
            <Form
                layout="vertical"
            >

                <div style={{display: "flex"}}>
                    <div style={{flex: 0.7, marginRight: "20px"}} className={styles['m-box']}>
                        <div className={styles['mb-row1']}>
                            <Form.Item required={true} label={`角色名称`}>
                                <Input value={formDataRole.roleName}
                                       onChange={(val) => {
                                           setFormDataRole({
                                               ...formDataRole,
                                               roleName: val.target ? val.target.value : val
                                           });
                                       }}
                                       placeholder="请输入角色名称"/>
                            </Form.Item>
                        </div>
                        <div className={styles['mb-row1']}>
                            <Form.Item required={true} label={`操作权限`}>
                                <Radio.Group value={formDataRole.operationAuthority}
                                             onChange={(val: any) => {
                                                 setFormDataRole({
                                                     ...formDataRole,
                                                     operationAuthority: val.target ? val.target.value : val
                                                 });
                                             }}>
                                    {
                                        select?.operation_authority?.map(item => {
                                            return <Radio key={item.typeCode}
                                                          value={item.typeCode}>{item.typeName}</Radio>
                                        })
                                    }

                                </Radio.Group>
                            </Form.Item>
                        </div>
                        <div className={styles['mb-row1']}>
                            <Form.Item required={true} label={`权限期限`}>
                                <DatePicker value={formDataRole.jurisdictionDeadline} showTime
                                            onChange={(val: any) => {
                                                setFormDataRole({
                                                    ...formDataRole,
                                                    jurisdictionDeadline: val.target ? val.target.value : val
                                                });
                                            }} style={{width: '100%'}}/>

                            </Form.Item>
                        </div>
                    </div>
                    <div style={{flex: 1}} className={styles['m-box']}>
                        <div className={styles['mb-row1']}>
                            <Form.Item required={true} label={`页面权限`}>
                                <Tree
                                    checkable
                                    defaultExpandedKeys={formDataRole.pageAuthority}
                                    defaultSelectedKeys={formDataRole.pageAuthority}
                                    defaultCheckedKeys={formDataRole.pageAuthority}
                                    onSelect={onSelect}
                                    onCheck={onCheck}
                                    treeData={menuList}
                                />
                            </Form.Item>
                        </div>


                    </div>
                </div>

            </Form>
        </Modal>


        {/* 查看用户 */}
        <Drawer title={formDataRole.roleName + ' 下的用户'} placement="right" onClose={() => {
            setDETAIL({})

            setVisible(false)
        }} visible={visible} width={'60vw'} zIndex={2}>
            <div className={styles['detail']}>
                <Table rowKey={'channelId'} dataSource={userList} pagination={false}>

                    {

                        columns.userTableColumns.map(i => {
                            return <Column {...i}></Column>
                        })
                    }
                    <Column
                        width={"15%"}
                        title="所属角色"
                        align='center'
                        render={(text: any, record: any, index: any) => {
                            return formDataRole.roleName
                        }}
                    />

                    <Column
                        title="操作"
                        align='center'
                        width='10%'
                        key="action"
                        render={(_: any, record: any) => (
                            <Space size="middle">

                                {
                                    columns.userOperation.map(item => {
                                        return <a onClick={() => {
                                            if (item.name === "编辑") {
                                                editUser(record);
                                            }
                                            if (item.name === "删除") {
                                                deleteUser(record.id);
                                            }

                                        }}>{item.name}</a>
                                    })
                                }


                            </Space>
                        )}
                    />

                </Table>
            </div>
        </Drawer>
    </div>);
};

export default connect(({common, select}) => ({
    common,
    select
}))(Test);
