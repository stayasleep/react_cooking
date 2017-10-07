import {takeLatest} from 'redux-saga/effects';
import {requestTabSaga} from './reqTab';
import {REQ_TAB} from '../actions/types';

export default function* watchRequestedTab(){
    yield takeLatest(REQ_TAB, requestTabSaga);
}