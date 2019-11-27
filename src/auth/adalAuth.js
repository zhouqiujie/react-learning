import { authContext, adalConfig } from './adalConfig';

export const getLoginState = () => {
    return Boolean(authContext.getCachedToken(adalConfig.clientId));
}

// console.log(authContext.getCachedToken(adalConfig.clientId))

// const isLogin = getLoginState();
export const getUser = () => {
    return getLoginState() ? authContext.getCachedUser() : {};
}


export const getIdToken = () => {
    const id_token = authContext.getCachedToken(adalConfig.clientId);
    return id_token ? `Bearer ${id_token}` : '';
}