import AxiosInstance from './axios-core';
import API from './api';

const API_URL = 'http://api:81/';
const API_VERSION = '2018-09-01-preview'

export const Login = (params) => {
    return AxiosInstance.get('/url', { ...params })
}

export const getRoleAssignments = (upn) => {
    const params = { 'api-version': API_VERSION };
    return AxiosInstance.get(`${API_URL}Roles/Assignments/Upns/${upn}`, { params });
}

export const getEnroll = (oid) => {
    const params = { 'api-version': API_VERSION };
    return AxiosInstance.get(`${API_URL}/Payment/Accounts/${oid}`, { params });
}

export const getSubs = () => {
    const params = { 'api-version': API_VERSION };
    return AxiosInstance.get(`${API_URL}/subscriptions`, { params });
}