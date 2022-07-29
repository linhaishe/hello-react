import { call, takeEvery, put } from "redux-saga/effects";
import { GET_INIT_LISTS } from "./actionTypes";
import { initialListAction } from "./actionCreators";
import axios from "axios";

export function* getInitList() {
  try {
    const { data } = yield axios.get("/api");
    yield put(initialListAction(data));
  } catch (e) {
    console.log(e);
  }
}

export default function* mySaga() {
  yield takeEvery(GET_INIT_LISTS, getInitList);
}
