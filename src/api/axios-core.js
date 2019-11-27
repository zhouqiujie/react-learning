import axios, { AxiosRequestConfig } from 'axios';
import { notification } from 'antd';
import { createHashHistory } from 'history';
import { getIdToken } from 'auth/adalAuth';

const AxiosInstance = axios.create({
    xsrfCookieName: 'xsrf-token'
});

AxiosInstance.interceptors.request.use((config) => {
    // console.log(config)
    /*  notification.warning({
         message: 'System notification',
         description: 'start request'
     }); */

    const { headers, data, url } = config;

    const ID_TOKEN = getIdToken();

    return {
        ...config,
        headers: {
            ...headers,
            'Authorization': ID_TOKEN
        }
    };
}, (error) => {
    return Promise.reject(error);
});

AxiosInstance.interceptors.response.use((res) => {
    // console.log(res)
    return res.data;
}, (error) => {
    return Promise.reject(error);
});

export default AxiosInstance;