import { UserRoleassignmentsFetching, EnrollFetching} from 'redux/actions/actionTypes';
import { userRoleassignmentsFetched, enrollFetched } from '../actions/user';
import {
    call, put, takeEvery, takeLatest, take,
    select
} from 'redux-saga/effects';
import { getRoleAssignments, getEnroll } from 'api/api.home';
// import { get } from 'redux'

function* fetchUserRoleAssignments(action) {
    const user = action.payload;
    // yield take(USER_LOGIN);
    // const r = yield select(getUserState)
    // console.log(action)
    const assignments = yield call(() => {
        return getRoleAssignments(user).then(res => {
            // console.log(res)
            return res;
        }, err => {
            console.log(err);
            return [];
        });
    });
    yield put(userRoleassignmentsFetched(assignments))
}

function* fetchEnroll(action) {
    const oid = action.payload;
    
    const enroll = yield call(() => {
        return getEnroll(oid).then(res => {
            // console.log(res)
            return res;
        }, err => {
            console.log(err);
            return [];
        });
    });
    yield put(enrollFetched(enroll))
}

function* userSaga() {
    yield takeLatest(UserRoleassignmentsFetching, fetchUserRoleAssignments)
    yield takeLatest(EnrollFetching, fetchEnroll)
}

export { fetchUserRoleAssignments, userSaga }