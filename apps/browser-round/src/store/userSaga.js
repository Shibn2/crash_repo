import { put, call, takeLatest } from "redux-saga/effects";
import {
  FETCH_USER_REQUEST,
  fetchUserFailed,
  fetchUserSuccess,
} from "./actions";

function fetchUserApi() {
  new Promise((res) => {
    setTimeout(() => {
      res({ name: "Shibin", age: 34 });
    }, 1000);
  });
}

function* fetchUserWorker() {
  try {
    const user = yield call(fetchUserApi);
    yield put(fetchUserSuccess(user));
  } catch (err) {
    yield put(fetchUserFailed(err.message));
  }
}

export function* userSaga() {
  yield takeLatest(FETCH_USER_REQUEST, fetchUserWorker);
}
