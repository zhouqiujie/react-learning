import { userSaga } from './user';
import { subSaga } from './sub';
import { takeEvery, fork } from 'redux-saga/effects';

function* rootSaga() {
    yield fork(userSaga)
    yield fork(subSaga)
}

export default rootSaga;