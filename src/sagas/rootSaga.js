import { all, fork } from "redux-saga/effects";
import rootCartSaga from "./cartSaga";
import rootProductSaga from "./productSaga";

export default function* rootSaga() {
  yield all([fork(rootProductSaga), fork(rootCartSaga)]);
}
