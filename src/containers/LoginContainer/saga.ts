import {put, call, takeLatest} from 'redux-saga/effects';
// import { timeout } from '../../utils';
import {homeContainerTypes, homeContainerCreators} from './reducer';

type ExampleCallType = {
  name: string;
}

const {
  REQUEST_GET_DEMO
} = homeContainerTypes;

export function* exampleCall({ name }: ExampleCallType) {
  // yield call(timeout, 2000);
  yield put(homeContainerCreators.successGetDemo(name))
}

export default function* homeContainerSaga() {
  // @ts-ignore
  yield takeLatest(REQUEST_GET_DEMO, exampleCall);
}
