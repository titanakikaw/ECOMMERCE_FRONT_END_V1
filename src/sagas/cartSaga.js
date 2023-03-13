import {
  fork,
  all,
  call,
  put,
  takeEvery,
  takeLatest,
} from "redux-saga/effects";
import axiosInstance from "../utils/axiosInstance";

function* LOAD_CART_SUCCESS({ payload }) {
  try {
    const res = yield call(axiosInstance, payload);

    yield put({
      type: "LOAD_CART_SUCCESS",
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
}

function* ADD_CART_SUCCESS({ payload }) {
  try {
    const { productId, qty, ...rest1 } = payload;
    const { data: cartItems } = yield call(axiosInstance, {
      method: "get",
      url: `cart?productId=${productId}`,
    });

    const cartItem = cartItems?.find((x) => {
      const { qty, id, ...rest } = x;
      if (JSON.stringify(rest) === JSON.stringify({ ...rest1, productId })) {
        return x;
      }
    });

    if (!cartItem) {
      const res = yield call(axiosInstance, {
        method: "post",
        url: "cart",
        data: payload,
      });
      yield put({
        type: "ADD_CART_SUCCESS",
        payload: res.data,
      });
    } else {
      yield put({
        type: "UPDATE_CART_REQUEST",
        payload,
        cartItem,
      });
    }
  } catch (error) {
    console.log(error.message);
  }
}

function* UPDATE_CART_SUCCESS({ cartItem, payload }) {
  const updatedItem = { ...payload, qty: payload.qty + cartItem.qty };

  const res = yield call(axiosInstance, {
    method: "put",
    url: `cart/${cartItem.id}`,
    data: updatedItem,
  });
  yield put({
    type: "UPDATE_CART_SUCCESS",
    payload: res.data,
  });
}

function* ADD_CART_REQUEST() {
  yield takeLatest("ADD_CART_REQUEST", ADD_CART_SUCCESS);
}

function* UPDATE_CART_REQUEST() {
  yield takeLatest("UPDATE_CART_REQUEST", UPDATE_CART_SUCCESS);
}

function* LOAD_CART_REQUEST() {
  yield takeEvery("LOAD_CART_REQUEST", LOAD_CART_SUCCESS);
}

export default function* rootCartSaga() {
  yield all([
    fork(LOAD_CART_REQUEST),
    fork(ADD_CART_REQUEST),
    fork(UPDATE_CART_REQUEST),
  ]);
}
