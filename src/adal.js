
import { runWithAdal } from 'react-adal';
import { authContext } from './auth/adalConfig';

const DO_NOT_LOGIN = false;

runWithAdal(authContext, () => {
    require('./index');
}, DO_NOT_LOGIN);