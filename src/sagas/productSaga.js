import {
  fork,
  all,
  call,
  put,
  takeEvery,
  takeLatest,
} from "redux-saga/effects";
import axiosInstance from "../utils/axiosInstance";

function* loadProductsSuccess({ payload }) {
  try {
    const res = yield call(axiosInstance, payload);
    yield put({
      type: "LOAD_PRODUCTS_SUCCESS",
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
}

function* loadMyProductSuccess({ payload }) {
  try {
    const res = yield call(axiosInstance, payload);
    yield put({
      type: "LOAD_MY_PRODUCTS_SUCCESS",
      payload: res.data,
    });
  } catch (error) {}
}

function* loadProductRequest() {
  yield takeEvery("LOAD_PRODUCTS_REQUEST", loadProductsSuccess);
}

function* loadMyProductsRequest() {
  yield takeEvery("LOAD_MY_PRODUCTS_REQUEST", loadMyProductSuccess);
}

export default function* rootProductSaga() {
  yield all([fork(loadProductRequest), fork(loadMyProductsRequest)]);
}
