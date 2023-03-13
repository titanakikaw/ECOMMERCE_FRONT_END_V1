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

function* loadProductRequest() {
  yield takeEvery("LOAD_PRODUCTS_REQUEST", loadProductsSuccess);
}

export default function* rootProductSaga() {
  yield all([fork(loadProductRequest)]);
}
