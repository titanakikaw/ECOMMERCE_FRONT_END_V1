import { takeEvery, fork, all, takeLatest, call } from "redux-saga/effects";

import axiosInstance from "../utils/axiosInstance";

function* LOGIN_USER_SUCCESS({ payload }) {
  try {
    const res = yield call(axiosInstance, payload);
    yield put({
        type : "LOGIN_USER_SUCCESS",
        payload : res.data
    })

  } catch (error) {}
}

function LOGUN_USER_REQUEST({ payload }) {
  yield takeEvery("LOGIN_USER_REQUEST", LOGIN_USER_SUCCESS)
}

export default function* rootAuthSaga() {
  yield all([fork(LOGUN_USER_REQUEST)]);
}
