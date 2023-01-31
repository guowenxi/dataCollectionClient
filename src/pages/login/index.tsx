import React from "react";
import {Link} from "react-router-dom";
import styles from "./index.less";
import {connect} from "dva";

const Login: React.FC<any> = (props) => {
    console.log(props);


    // const requireComponents = require.context('../test/', false, /\.tsx$/);
    // console.log(requireComponents);

    return (
        <>
            <img src={require("../../assets/vite.png")} style={{width: '50px', height: '50px'}}/>
            <div className={styles.title}>Welcome Login</div>
            <Link to="/basicLayout/modularManage">登录</Link>
        </>
    );
};

// export default Products;
export default connect(({common}) => ({
    common,
}))(Login);
