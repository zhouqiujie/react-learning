import AxiosInstance from './axios-core';

export const Login = (params) => {
    return AxiosInstance.get('/url', { ...params })
}