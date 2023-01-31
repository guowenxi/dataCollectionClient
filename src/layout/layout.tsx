import React, {useEffect} from "react";
import {RouteComponentProps} from "dva/router";
import {SubscriptionAPI} from "dva";
import {HashRouter} from "react-router-dom";
import {renderRoutes} from "react-router-config";
import routes from "@/router";
import {statusType} from "../services/global"

interface Props extends RouteComponentProps {
}

const App = (props: Props & SubscriptionAPI) => {

    useEffect(() => {
        statusType.map(item => {
            // 获取所有公用下拉框数据
            props.dispatch({
                type: 'select/getSelectData',
                method: 'GET',
                url: '/data-acquisition/type-info/findByTypeInfo',
                payload: {
                    'rbacToken': '7ed6a62261854a4eb27d844ff4df1885',
                    typeClass: item
                },
            });
        })
    }, []);

    return <HashRouter>{renderRoutes(routes)}</HashRouter>;
};
export default App;
