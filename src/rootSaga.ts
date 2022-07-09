import { all, fork } from "redux-saga/effects";
import loginContainerSaga from './containers/LoginContainer/saga';

export default function* rootSaga() {
  yield all([fork(loginContainerSaga)]);
}
