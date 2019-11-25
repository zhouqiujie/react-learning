import { authContext, adalConfig } from './adalConfig';

export const isLogin = () => {
    return authContext.getCachedUser() ? true : false;
}

export const ID_TOKEN = () => {
    return authContext.getCachedToken(adalConfig.clientId) || '';
}