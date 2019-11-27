
import {
    USER_LOGIN, USER_LOGOUT, UserRoleassignmentsFetched,
    UserRoleassignmentsFetching, EnrollFetched, EnrollFetching,
    SubsFetched, SubsFetching
} from 'redux/actions/actionTypes';

export const userLogin = res => ({
    type: USER_LOGIN,
    payload: {
        ...res,
        loggedIn: true
    }
});


export const userLogout = () => ({
    type: USER_LOGOUT,
    payload: {
        name: '',
        email: '',
        profile: '',
        loggedIn: false
    }
});

export const userRoleassignmentsFetched = res => ({
    type: UserRoleassignmentsFetched,
    payload: res
});

export const userRoleassignmentsFetching = res => ({
    type: UserRoleassignmentsFetching,
    payload: res
});

export const enrollFetched = res => ({
    type: EnrollFetched,
    payload: res
});

export const enrollFetching = res => ({
    type: EnrollFetching,
    payload: res
});

export const subsFetched = res => ({
    type: SubsFetched,
    payload: res
});

export const subsFetching = res => ({
    type: SubsFetching,
    payload: res
});