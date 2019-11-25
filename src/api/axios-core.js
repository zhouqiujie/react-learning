import axios from 'axios';
import { notification } from 'antd';
import { createHashHistory } from 'history';

const AxiosInstance = axios.create({
    xsrfCookieName: 'xsrf-token'
});

AxiosInstance.interceptors.request.use((config) => {
    console.log(config)
    notification.warning({
        message:'System notification',
        description: 'start request'
    })

    const {headers, data, url} = config;
    return config;
}, (error) =>{
    return Promise.reject(error);
});

AxiosInstance.interceptors.response.use((res) => {
    console.log(res)
    return res.data;
}, (error) => {
    return Promise.reject(error);
});

export default AxiosInstance;