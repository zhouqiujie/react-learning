import {
    AuthenticationContext, adalFetch, withAdalLogin,
    adalGetToken
} from 'react-adal';

export const adalConfig = {
    instance: '***',
    tenant: '***',
    clientId: '***',
    /*  endpoints: {
         api: '',
     }, */
    cacheLocation: 'localStorage',
    redirectUri: 'http://localhost:3000',
    navigateToLoginRequestUrl: false

};

export const authContext = new AuthenticationContext(adalConfig);

// export const adalApiFetch = (fetch, url, options) => adalFetch(authContext, adalConfig.endpoints.api, fetch, url, options);

// export const withAdalLoginApi = withAdalLogin(authContext, adalConfig.endpoints.api);

// export const getToken = adalGetToken(authContext, adalConfig.clientId);
