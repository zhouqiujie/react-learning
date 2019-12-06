import AxiosInstance from './axios-core';

export class API {

    constructor(){
        console.log(process.env)
    }

    get() {
        AxiosInstance.get()
    }
}