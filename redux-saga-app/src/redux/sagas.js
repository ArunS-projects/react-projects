import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { FETCH_USERS_REQUEST, fetchUsersSuccess, fetchUsersFailure } from './Actions';

// Fake API URL

const API_URL = 'https://jsonplaceholder.typicode.com/users';

function* fetchUsers() {
    try{
        const response = yield call(axios.get, API_URL);
        yield put(fetchUsersSuccess(response.data));
    }catch(error){
        yield put(fetchUsersFailure(error.message));
    }
}

function* rootSaga() {
    yield takeLatest(FETCH_USERS_REQUEST, fetchUsers);
}

export default rootSaga;
//npm install redux react-redux redux-saga axios