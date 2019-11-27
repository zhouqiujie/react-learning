import { SubsFetching } from 'redux/actions/actionTypes';
import { subsFetched } from '../actions/user';
import {
    call, put, takeEvery, takeLatest, take,
    select
} from 'redux-saga/effects';
import { getSubs } from 'api/api.home';


function* fetchSubs(action) {

    const subs = yield call(() => {
        return getSubs().then(res => {
            // console.log(res)
            return res;
        }, err => {
            console.log(err);
            return [];
        });
    });
    yield put(subsFetched(subs))
}

function* subSaga() {
    yield takeLatest(SubsFetching, fetchSubs)
}

export { subSaga }