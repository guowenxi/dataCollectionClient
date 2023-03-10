import fetch from 'dva/fetch';
import {notification, message} from 'antd';
import qs from 'querystring';

function parseJSON(response: any) {
    return response.json();
}

const codeMessage = {
    200: '服务器成功返回请求的数据。',
    201: '新建或修改数据成功。',
    202: '一个请求已经进入后台排队（异步任务）。',
    204: '删除数据成功。',
    400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
    401: '用户没有权限（令牌、用户名、密码错误）。',
    403: '用户得到授权，但是访问是被禁止的。',
    404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
    406: '请求的格式不可得。',
    410: '请求的资源被永久删除，且不会再得到的。',
    422: '当创建一个对象时，发生一个验证错误。',
    500: '服务器发生错误，请检查服务器。',
    502: '网关错误。',
    503: '服务不可用，服务器暂时过载或维护。',
    504: '网关超时。',
};

function checkStatus(response: any) {
    if (response.status >= 200 && response.status < 500) {
        return response;
    }

    const error = new Error(response.statusText);
    error.response = response;
    throw error;
}

function handleHeaders(options: any) {
    const headers = options.headers = options.headers ? options.headers : {};
    const defaultHeaders = {
        'Content-Type': 'application/json'
    };
    options.headers = Object.assign({}, defaultHeaders, headers);

    if (options.method === 'post') {
        const data = options.data ? options.data : {};
        options.body = JSON.stringify(data)
    }
}


/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
export const baseUrl = "http://192.168.1.244:30001";
// export const baseUrl = "http://192.168.1.46:30001"


export const otherUrl = "http://192.168.1.244:8001";


export const wsUrl = 'ws://192.168.1.244:15420';
export const wsUrl_base = "ws://192.168.1.244:3003"



export default function request(url, options = {}) {
    if (options.method === 'GET' || options.method === 'get') {
        url = url + `?${qs.stringify(options.params)}`;
    }
    //处理头部
    handleHeaders(options);

    return fetch(url.indexOf('http') !=-1 ? `${url}` : `${baseUrl}${url}`, options)
        .then(checkStatus)
        .then(parseJSON)
        .then(data => ({data}))
        .catch(err => ({err}));
}
