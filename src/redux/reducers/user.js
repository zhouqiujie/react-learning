import {
    USER_LOGIN, USER_LOGOUT, UserRoleassignmentsFetched, EnrollFetched,
    SubsFetched
} from 'redux/actions/actionTypes';

const initialState = {
    name: 'NULL',
    email: '',
    profile: '',
    loggedIn: false,
    roleAssignments: [],
    enroll: {},
    subs: []
};

const UserReducer = (state = initialState, action) => {
    const res = action.payload;
    switch (action.type) {
        case USER_LOGIN: {
            return {
                ...state,
                ...res
            }
        }

        case USER_LOGOUT: {
            return {
                ...state,
                ...res
            }
        }

        case UserRoleassignmentsFetched: {
            return {
                ...state,
                roleAssignments: res
            }
        }

        case EnrollFetched: {
            return {
                ...state,
                enroll: res
            }
        }

        case SubsFetched: {
            return {
                ...state,
                subs: res
            }
        }


        default:
            return state;
    }
}

export default UserReducer;