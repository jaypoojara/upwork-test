import {put, call, takeLatest} from 'redux-saga/effects';
import { timeout } from '../../utils';
import {appContainerTypes, appContainerCreators} from '../../AppReducer';

type LoginCallType = {
  username: string;
  password: string;
}

const {
  REQUEST_USER_LOGIN
} = appContainerTypes;

export function* loginApiCall({ username, password  }: LoginCallType) {
  yield call(timeout, 2000);
  if (username === 'upworkTest' && password === '2022') {
    yield put(appContainerCreators.successUserLogin(username))
  } else {
    yield put(appContainerCreators.failureUserLogin('Wrong password or username, please try again'))
  }
}

export default function* loginContainerSaga() {
  // @ts-ignore
  yield takeLatest(REQUEST_USER_LOGIN, loginApiCall);
}
