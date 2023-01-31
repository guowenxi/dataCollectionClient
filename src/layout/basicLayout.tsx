import React, {useState, useEffect} from 'react';
import {connect} from "dva";
import {RouteConfigComponentProps, renderRoutes} from "react-router-config";
import {
    ClusterOutlined,
    ControlOutlined,
    InteractionOutlined,
    DisconnectOutlined,
    PicRightOutlined,
    ApartmentOutlined,
    DiffOutlined,
    CopyOutlined,
    SnippetsOutlined,
    PieChartOutlined,

} from '@ant-design/icons';
import type {MenuProps} from 'antd';
import {Breadcrumb, Layout, Menu} from 'antd';


const {Header, Content, Footer, Sider} = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
    } as MenuItem;
}

const items: MenuItem[] = [


    getItem('模块管理', '1', <ClusterOutlined/>),
    getItem('接口管理', '2', <ControlOutlined/>),
    getItem('消息转发', '3', <InteractionOutlined/>),
    getItem('调试连接', '4', <DisconnectOutlined/>),
    getItem('通讯日志', '5', <PicRightOutlined/>),
    getItem('权限管理', '6',<ApartmentOutlined />),
    getItem('日志管理', 'log',<DiffOutlined />, [
        getItem('操作日志', '7', <CopyOutlined />),
        getItem('设备日志', '8', <SnippetsOutlined />),
    ]),



    // getItem('table 1', '7', <PieChartOutlined/>),
    // getItem('test 2', '8', <DesktopOutlined/>),

    // getItem('Team', 'sub2', <TeamOutlined/>, [
    //     getItem('Team 1', '6'),
    //     getItem('Team 2', '8')]),
    // getItem('Files', '9', <FileOutlined/>),

];

import logo from '@/logo.svg';


const BasicLayout: React.FC<RouteConfigComponentProps> = (props) => {
    // const history = useHistory()
    const {route, history} = props;
    // console.log("basic layout");
    const [collapsed, setCollapsed] = useState(false);

    // console.log('BasicLayout', props);

    const onClick: MenuProps['onClick'] = e => {
        if (e.key === '1') {
            history.push('/basicLayout/modularManage');
        }
        if (e.key === '2') {
            history.push('/basicLayout/interfaceManage');
        }
        if (e.key === '3') {
            history.push('/basicLayout/messageForwarding');
        }
        if (e.key === '4') {
            history.push('/basicLayout/debugLinks');
        }
        if (e.key === '5') {
            history.push('/basicLayout/communicationLog');
        }
        if (e.key === '6') {
            history.push('/basicLayout/jurisdictionManage');
        }


        if (e.key === '7') {
            history.push('/basicLayout/operationLog');
        }
        if (e.key === '8') {
            history.push('/basicLayout/equipmentLog');
        }
        if (e.key === '9') {
            history.push('/basicLayout/files');
        }
    };

    return (
        <Layout style={{minHeight: '95.2vh'}}>
            <Sider collapsible collapsed={collapsed} onCollapse={value => setCollapsed(value)}>
                {/*<div className="logo">*/}
                {/*    <img src={logo}/>*/}
                {/*</div>*/}
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} onClick={onClick}/>
            </Sider>
            <Layout className="site-layout">
                {/*<Header className="site-layout-background-header" style={{padding: 0}}/>*/}
                <Content style={{margin: '0 16px'}}>
                    {/*<Breadcrumb style={{margin: '16px 0'}}>*/}
                    {/*    <Breadcrumb.Item>User</Breadcrumb.Item>*/}
                    {/*    <Breadcrumb.Item>Bill</Breadcrumb.Item>*/}
                    {/*</Breadcrumb>*/}
                    <div className="site-layout-background-main"
                         style={{padding: 24, minHeight: '85vh', marginTop: '16px'}}>
                        {renderRoutes(route?.routes)}
                    </div>
                </Content>
                <Footer style={{textAlign: 'center', borderTop: "1px solid #eee", cursor: "pointer"}}> 版权所有 ©2022 杭州伽壹科技有限公司</Footer>
            </Layout>
        </Layout>
    );
}

export default connect(({common, select}) => ({
    common,
    select
}))(BasicLayout);
