import {call, put, takeLatest} from 'redux-saga/effects';
import api from "./Api";
import {GET_LIST_REQUEST, getListFailure, getListSuccess} from "../redux/home/Actions";


const getListRequest = function* (action) {
    const response = yield call(api.getList);
    if (response) {
        yield put(getListSuccess(response));
    }
    else {
        yield put(getListFailure());
    }
};

const HomeSaga = function* () {
    yield takeLatest(GET_LIST_REQUEST, getListRequest);
};

export default HomeSaga;