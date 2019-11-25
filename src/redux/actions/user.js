export const USER_LOGIN = "USER_LOGIN";
export const USER_LOGOUT = "USER_LOGOUT";

export const userLogin = res => ({
    type: USER_LOGIN,
    payload: {
        ...res,
        loggedIn: true
    }
});


export const userLogout = res => ({
    type: USER_LOGOUT,
    payload: {
        name: '',
        email: '',
        id: '',
        detail: '',
        loggedIn: false
    }
});