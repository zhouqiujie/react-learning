import { USER_LOGIN, USER_LOGOUT } from '../actions/user';

const initialState = {
    name: 'NULL',
    email: '',
    id: '',
    detail: '',
    loggedIn: false
};

const UserReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_LOGIN: {
            const res = action.payload;
            return {
                ...state,
                ...res
            }
        }

        case USER_LOGOUT: {
            const res = action.payload;
            return {
                ...state,
                ...res
            }
        }

        default:
            return state;
    }
}

export default UserReducer;