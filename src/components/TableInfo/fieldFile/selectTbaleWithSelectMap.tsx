import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';

import { Modal, Button, Input as AInput, Tag } from 'antd';
import type { Iconf} from '../TableInfo';
import { wrapContext } from '../TableInfo';
import { Form } from 'antd';
import { ShowData } from './_css_comm';
import { PlusCircleOutlined, MinusCircleOutlined } from '@ant-design/icons';
import { Map } from 'react-amap';
import MixinTable from '../../MixinTable/MixinTable';
import { EnvironmentFilled } from '@ant-design/icons';
import type { AProps } from '@/globalTyping';
import { useDynamicList } from 'ahooks';
import { G } from '@/global';

const { amapkey, mapCenter } = G;
const AModal = styled(Modal)`
  && {
    width: 70vw !important;
    .ant-modal {
    }
  }
`;

const WrapMap = styled.div`
  position: relative;
  width: 100%;
  height: 60vh;
`;
const MainMap = styled<any>(Map)`
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
`;

const MapIcon = styled(EnvironmentFilled)`
  color: #ccc;
  cursor: pointer;
  position: absolute;
  right: 10px;
  font-size: 20px;
  top: 10px;
`;

const SelectTableBox = styled.div`
  /* border: 1px solid #ccc; */
  display: flex;
  align-items: center;
  width: 100%;
  .select-main-box {
    display: flex;
    flex-flow: row wrap;
    .select-item-box {
      margin: 1vh;
    }
  }
`;
const NButton = styled(Button)`
  margin: 1vh;
`;

interface IconfInputNumber extends Iconf {
  min?: number;
  max?: number;
  defaultValue?: number;
  decimalSeparator?: string;
  tableSetting: {
    columnsList: any[];
    params: Record<string, string>;
  };
}

interface MProps extends AProps {
  rules: any;
  dispatch?: any;
  conf: IconfInputNumber;
  name: string;
}

const RowMainBox = styled.div`
  padding: 2vh 2vh !important;
  border-right: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  margin: 0 auto !important;
  display: flex;
  align-items: center;
  .left-side-box {
    width: 90%;
  }
  .right-side-box {
    flex: 1;
  }
  .row-select-item-box {
    .ant-form-item-control-input-content {
      border-bottom: 1px solid #ccc;
      border-right: 1px solid #ccc;
    }
  }
`;

const RowBox = styled(Form.Item)`
  display: flex;
  .ant-form-item-control-input-content {
    display: flex;
  }
  .row-item {
    flex: 1;
  }
  .ant-form-item-label {
    width: 7vw;
    background: #ebebeb;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid #ccc;
  }
  .row-select-item {
  }
  .ant-input {
    padding: 1vh;
  }
  .row-select-item {
    .ant-form-item-control-input-content{
      border:none;
    }
  }
`;

let map: any = {};
let polyEditor: any;
// var PolygonEditor: any;
// var polygonData = '';
let selItemIndx = 0;
let ts_polygon: any[] = [];
/*
**???????????????amap2.0???????????? ???????????????react-amap 1.0??????
?????????????????????????????????
*/
interface AInputArr{
  option: any;
  wgName: string;
  points: any;
  unit: any;
}
const InputNumber = (props: MProps) => {

  const [ list, remove, push ,resetList] = useDynamicList([{ option: [], wgName: '??????1', points: [] ,unit:[]}]);
  const theme = useContext(wrapContext);
  const [OPTION, setOPTION] = useState([]);
  const [VISIBLE, setVISIBLE] = useState(false);
  // const [polyginList, setPolyginList] = useState([]); /* ??????????????? */
  const [SENTER] = useState(mapCenter);
  const [, setgeocoder] = useState({});
  const [tableVISIBLE, setTableVISIBLE] = useState(false); /* ???????????? */
  const [VAL, setVAL] = useState();
  const [SELECTROWKEYS, setSELECTROWKEYS] = useState<[]>([]);
  const [mapPolygonEditState, setMapPolygonEditState] = useState('edit'); /* ?????????????????? */
  const [savePolygonData, setSavePolygonData] = useState<any>([]); /* ??????????????????????????? */
  const [optionIndex, setOptionIndex] = useState<number>(0); /* ??????????????? */

  const _ = props.conf;
  const {name} = props;
  let __: any;
  if(_.tableSetting) __ =_.tableSetting ;
  useEffect(() => {
    const _list: any = theme.form.getFieldValue([name]) || list;
    resetList(_list);
  }, []);



  /* ?????????????????? */
  const mapEvents = (status: any)=>{
    return {
      created: (ins: {}) => {
        // setmap(ins)
        map = ins;

        AMap.plugin('AMap.Geocoder', () => {
          setgeocoder(
            new AMap.Geocoder({
              city: '010', // ??????????????????????????????
            }),
          );
        });
        AMap.plugin('AMap.PolygonEditor', () => {
          let polygon;
          polyEditor = new AMap.PolygonEditor(map);
          polyEditor.on('add', function (data: { target: any; }) {
            console.log(data);
            polygon = data.target;
            polyEditor.addAdsorbPolygons(polygon);
            //  polygon.on('dblclick', (data) => {
            //   setMapPolygonEditState('edit')
            //   polyEditor.setTarget(data.target);
            //   polyEditor.open();
            // })
            // ???????????? ??????????????????????????????????????????
            ts_polygon[selItemIndx] = polygon;
          });
          // ??????????????????????????????
          // polyEditor.setTarget();
          // polyEditor.open();


          const pointsList = list;
          const _list: any[] | ((prevState: never[]) => never[]) = [];
          if (Array.isArray(pointsList)) {
            pointsList.map((item01: any) => {
              const positiveList: any=[];
              if(Array.isArray(item01.points)&&item01.points.length){
                item01.points.map((item02: any)=>{
                  positiveList.push([Number(item02.x), Number(item02.y)]);
                })
                list.push(new AMap.Polygon({
                  path: positiveList,
                }))
              }
            });
          }
          map.clearMap();
          if(_list.length){
            map.add(_list);
          }
          setSavePolygonData(_list);
          ts_polygon=_list;
          if (status != 'disabled') {
            if (status === 'edit') {
              polyEditor.setTarget(_list[selItemIndx]);
            } else {
              polyEditor.setTarget();
            }
            polyEditor.open();
          } 
        });
        

  
         

      },
      click: () => {},
     
    }
  };

  const selAddress = async (index: number) => {
    // const data = theme.form.getFieldsValue();
    
    
    selItemIndx = index;
    // if (savePolygonData) {
    //   ts_polygon[selItemIndx] = savePolygonData[selItemIndx];
    // }
   

    setVISIBLE(true);
    setMapPolygonEditState('edit');
    savePolygonData &&
      savePolygonData.map(function (item: any) {
        map.add(item);
      });
    if (polyEditor) {
      if (polyEditor && savePolygonData.length > selItemIndx) {
        // ??????????????????????????????
        polyEditor.setTarget(savePolygonData[selItemIndx]);
      } else {
        // ????????????????????????????????????????????????????????????
        polyEditor.setTarget();
      }
      polyEditor.open();
    }
  };

  const handleOk = () => {
    // polyEditor.close();
    // ????????????
    const _savePolygonData = savePolygonData;
    _savePolygonData[selItemIndx] = ts_polygon[selItemIndx];
    if (_savePolygonData[selItemIndx]) {
      const path = _savePolygonData[selItemIndx].getPath();
      const polygonList: { x: any; y: any; }[] = [];
      if (Array.isArray(path)) {
        path.map((item01: any) => {
          polygonList.push({
            x: item01.lng,
            y: item01.lat,
          });
        });
      }
      // let _polyginList = polyginList;
      // _polyginList[selItemIndx] = polygonList;
      // setPolyginList(_polyginList);
      list[optionIndex].points = polygonList;
      theme.form.setFieldsValue({ [name]: list });
    }
    polyEditor.close();
    setTimeout(()=>{
      setSavePolygonData(_savePolygonData);
      map.clearMap();
      setVISIBLE(false);
      setTableVISIBLE(false);
    },500)

     
    // theme.form.setFieldsValue({
    //   [name]:ADDRESS,
    // });
    // ????????????lnglat ?????????????????????
  };

  const handleCancel = () => {
    polyEditor.removeAdsorbPolygons(savePolygonData[selItemIndx]);
    map.clearMap();
    setVISIBLE(false);
    setTableVISIBLE(false);
  };

  /* ???????????? */
  const editPolygon = () => {
    if (!polyEditor) {
      return;
    }
    switch (mapPolygonEditState) {
      case 'edit':
        polyEditor.close();
        break;
      case 'disabled':
        polyEditor.open();
        break;
    }
    setMapPolygonEditState(mapPolygonEditState == 'edit' ? 'disabled' : 'edit');
  };

  /* ???????????????????????????????????? */
  const delPolygon = () => {
    ts_polygon[selItemIndx] = '';
    polyEditor.removeAdsorbPolygons(savePolygonData[selItemIndx]);
    map.clearMap();
    polyEditor.setTarget();
    polyEditor.open();
  };

  return (
    <wrapContext.Consumer>
      {(_data) => {
        switch (_data.state) {
          case 'default':
            return <ShowData>{_.defaultValue || '???'}</ShowData>;
            break;
          case 'edit':
          case 'new':
          case 'disabled':
            return (
              <Form.Item
                name={name}
                rules={[
                  () => ({
                    validator(value: any, callback: any) {
                      if (props.rules[0].required) {
                        for (let i = 0; i < value.length; i++) {
                          if (
                            value[i].wgName == '' ||
                            !value[i].points.length ||
                            !value[i].option.length
                          ) {
                            return Promise.reject(props.rules[0].message);
                          }
                        }
                        if (!value.length) {
                          return Promise.reject(props.rules[0].message);
                        }
                      }
                      callback();
                    },
                  }),
                ]}
              >
                {list.map((item: any, index: number) => (
                  <RowMainBox>
                    <div className="left-side-box">
                      <RowBox>
                        <Form.Item
                          rules={[{ required: true, message: '??????????????????' }]}
                          className="row-item"
                          label={`??????${index + 1}??????`}
                          // key={item.wgName}
                        >
                          <AInput
                            style={_.style}
                            disabled={_data.state === 'disabled'}
                            placeholder={`?????????${index + 1}??????`}
                            size={_.size}
                            value={item.wgName}
                            onChange={(value: any) => {
                              item.wgName = value.target ? value.target.value : value.target;
                              resetList(list)
                              theme.form.setFieldsValue({ [name]: list });
                            }}
                          />
                        </Form.Item>
                        <Form.Item
                          rules={[{ required: true, message: '???????????????' }]}
                          className="row-map-item"
                          key={String(item.points)}
                        >
                          <MapIcon
                            onClick={() => {
                              selAddress(index);
                              setOptionIndex(index);
                            }}
                            style={{
                              position: 'absolute',
                              color: ' #ccc',
                              cursor: 'pointer',
                              right: '10px',
                              fontSize: '20px',
                              top: '10px',
                            }}
                          />
                        </Form.Item>
                      </RowBox>

                      <RowBox className="row-select-item-box">
                        <Form.Item
                          rules={[{ required: true, message: '???????????????????????????' }]}
                          className="row-select-item"
                          label={`??????${index + 1}????????????`}
                          key={String(item.unit)}
                        >
                          <SelectTableBox>
                            <div className="select-main-box">
                              {Array.isArray(item.option)
                                ? item.option.map((item: { name: React.ReactNode; }) => {
                                    return (
                                      <Tag
                                        className="select-item-box"
                                        // closable
                                        // onClose={e => {
                                        //   e.preventDefault();
                                        //   deleteTableData(item,idx)
                                        // }}
                                      >
                                        {item.name}
                                      </Tag>
                                    );
                                  })
                                : ''}
                            </div>
                          </SelectTableBox>
                        </Form.Item>
                        <NButton
                          type="primary"
                          onClick={() => {
                            setTableVISIBLE(true);
                            setOPTION(item.option);
                            setOptionIndex(index);
                            setVAL(item.unit);
                          }}
                        >
                          ??????
                        </NButton>
                      </RowBox>
                    </div>

                    <Form.Item className="right-side-box">
                      {_data.state === 'disabled' ? null : (
                        <div
                          style={{
                            padding: '0 1vw',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                          }}
                          className="contentItem_twoInput"
                        >
                          {list.length == index + 1 ? (
                            <PlusCircleOutlined
                              onClick={() => {
                                push({
                                  option: [],
                                  wgName: `??????${list.length + 1}`,
                                  points: [],
                                })
                                theme.form.setFieldsValue({
                                  [name]:list
                                });
                              }}
                              style={{ fontSize: '30px', color: '#08c', cursor: 'pointer' }}
                            />
                          ) : (
                            <MinusCircleOutlined
                              onClick={() => {
                                remove(index)
                                const _savePolygonData = savePolygonData;
                                _savePolygonData.splice(index, 1);
                                setSavePolygonData(_savePolygonData);
                                theme.form.setFieldsValue({ [name]: list });
                              }}
                              style={{ fontSize: '30px', color: '#08c', cursor: 'pointer' }}
                            />
                          )}
                        </div>
                      )}
                    </Form.Item>
                  </RowMainBox>
                ))}

                <AModal title="??????" visible={VISIBLE} onOk={handleOk} onCancel={handleCancel} destroyOnClose={true}>
                  {_data.state === 'disabled' ? null : (
                    <NButton
                      type="primary"
                      onClick={() => {
                        editPolygon();
                      }}
                    >
                      {mapPolygonEditState === 'disabled' ? '????????????' : '????????????'}
                    </NButton>
                  )}

                  {_data.state === 'disabled' ? null : (
                    <NButton
                      type="primary"
                      onClick={() => {
                        delPolygon();
                      }}
                    >
                      ??????
                    </NButton>
                  )}

                  {/* <MapBox id="container"></MapBox> */}
                  <WrapMap>
                    <MainMap
                      version="2.0"
                      events={mapEvents(_data.state)}
                      center={SENTER}
                      zoom={13}

                      amapkey={amapkey}
                    ></MainMap>
                  </WrapMap>
                </AModal>

                <AModal
                  title="????????????"
                  visible={tableVISIBLE}
                  onOk={() => {
                    const ids: any[] = [];
                    const data = SELECTROWKEYS.map((item: { [x: string]: any; id: any; name: any; }) => {
                      ids.push(__.idKey ? item[__.idKey] : item.id);
                      return {
                        ...item,
                        name: __.nameKey ? item[__.nameKey] : item.name,
                        id: __.idKey ? item[__.idKey] : item.id,
                      };
                    });

                    list[optionIndex].option = data;
                    list[optionIndex].unit = ids;
                    resetList(list);
                    theme.form.setFieldsValue({
                      [name]: list,
                    });
                    setTableVISIBLE(false);
                  }}
                  onCancel={() => setTableVISIBLE(false)}
                >
                  <MixinTable
                    url={__.url}
                    changeKey={tableVISIBLE}
                    params={__.params}
                    columns={__.columnsList}
                    rowSelection={(res: any[], data: any) => {
                      res.map((item01: any, index01: string | number) => {
                        OPTION.map((item02: any) => {
                          if (item01 === item02.id) {
                            data[index01] = item02;
                          }
                        });
                      });
                      setSELECTROWKEYS(data);
                      // setOPTION(data);
                      // setVAL(data)
                    }}
                    rowKey="item"
                    defaultValue={VAL}
                  ></MixinTable>
                </AModal>
              </Form.Item>
            );
            break;
        }
      }}
    </wrapContext.Consumer>
  );
};

export default InputNumber;
// export default connect(({  }: ConnectState) => ({

// }))(Input);


