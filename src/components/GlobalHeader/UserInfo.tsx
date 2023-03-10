import {Modal, Input, message} from 'antd';
import React, {useState, useEffect, useRef} from 'react';
import type {ConnectProps, Dispatch} from 'umi';

import {connect} from "dva";
import {ConnectState} from '@/models/connect';
import styled, {ThemeProvider} from 'styled-components';
import {EyeInvisibleOutlined, EyeTwoTone} from '@ant-design/icons';
import styles from './index.less';
import icon_photo from '@/assets/imgs/icon_photo.png';
import {G} from "@/global"

export type SiderTheme = 'light' | 'dark';

export type GlobalHeaderRightProps = Partial<ConnectProps>

interface Props {
  dispatch: Dispatch;
  common: any;
}

const {rootUrl} = G;


const UserInfo: React.SFC<GlobalHeaderRightProps> = (props) => {
  const {dispatch, common} = props;
  const {userInfo} = common;
  const [VISIBLE, setVISIBLE] = useState(false);

  const oldPassword = useRef(null);
  const newPassword = useRef(null);
  const checkPassword = useRef(null);


  const className = styles.right;
  const RightInfo = styled.div`
    display: flex;
    align-items: center;

    .name {
      display: flex;
      align-items: center;
      cursor: pointer;
    }

    img {
      height: 60%;;
    }

    span {
      display: inline-block;
      margin: 0 1vh;
      font-size: 1.8vh;
    }

    .tx-color {
      cursor: pointer;
      color: red;
    }
  `;
  const ModalContent = styled.div`
    display: flex;
    flex-direction: column;

    .item {
      display: flex;
      margin: 1vh 0;

      label {
        display: inline-block;
        width: 15%;
        text-align: justify;
        text-align-last: justify;
        margin-right: 2vh;
        color: #497ea2;
        padding: 4px 0;
      }

      input {
        flex: 1;
        // text-indent: 1vh;
        border: 0;
        border-radius: 3px;
      }
    }

    p {
      color: red;
      margin-top: 2vh;
      margin-bottom: 0;
    }
  `;
  useEffect(() => {

  }, [VISIBLE])

  const handleOk = () => {

    let oldPass = oldPassword.current.state.value
    let newPass = newPassword.current.state.value
    let checkPass = checkPassword.current.state.value

    const reg: RegExp = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$/;
    if (!reg.test(newPass) || !reg.test(checkPass)) {
      message.error('??????????????????1????????????1??????????????????1??????????????????????????????8-16???');
      return;
    }
    if (newPass !== checkPass) {
      message.error('??????????????????????????????');
      return;
    }
    dispatch({
      type: `common/requestData`,
      method: "POST",
      url: "/rbac/fyUser/updatePassword.do",
      payload: {
        oldPassword: oldPass,
        newPassword: newPass,
        checkPassword: checkPass
      },
      callback: (res: string) => {
        if (res === "success") {
          message.success('????????????');
          setVISIBLE(false);
        } else {
          message.error(res);
        }
      }
    });
  };

  return (
    <div className={className}>
      <RightInfo>
        <div className='name' onClick={() => (setVISIBLE(true))}>
          <img src={icon_photo}/>
          <span>{userInfo.userName}</span>
        </div>
        <span>|</span>
        <span className='tx-color' onClick={() => {
          // location.href =`http://10.49.182.67:8013/fyRbac/index.html`;
          var params = rootUrl.split('/loveHome');
          location.href = params[0] + '/rbac/login.html';
        }}>????????????</span>
      </RightInfo>

      <Modal
        title="????????????"
        visible={VISIBLE}
        onOk={handleOk}
        onCancel={() => (setVISIBLE(false))}
        maskClosable={false}
      >
        <ModalContent>
          <div className='item'>
            <label htmlFor="">?????????</label>
            <Input.Password
              placeholder="??????????????????"
              ref={oldPassword}
              // value={oldPassword}
              // onBlur={(e) => (setOldPassword(e.target.value))}
              iconRender={(visible) => (visible ? <EyeTwoTone/> : <EyeInvisibleOutlined/>)}
            />
          </div>
          <div className='item'>
            <label htmlFor="">?????????</label>
            <Input.Password
              placeholder="??????????????????"
              ref={newPassword}
              // value={newPassword}
              // onBlur={(e) => (setNewPassword(e.target.value))}
              iconRender={(visible) => (visible ? <EyeTwoTone/> : <EyeInvisibleOutlined/>)}
            />
          </div>
          <div className='item'>
            <label htmlFor="">????????????</label>
            <Input.Password
              placeholder="????????????????????????"
              ref={checkPassword}
              // value={checkPassword}
              // onBlur={(e) => (setCheckPassword(e.target.value))}
              iconRender={(visible) => (visible ? <EyeTwoTone/> : <EyeInvisibleOutlined/>)}
            />
          </div>
          <p>???????????????????????????1????????????1??????????????????1??????????????????????????????8-16???</p>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default connect(({common}) => ({
  common
}))(UserInfo);
