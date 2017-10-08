import { fork } from 'redux-saga/effects';
import watchRequestedTab from './watchReqTab';
import watchRequestAdd from './watchReqAdd';

export default function* startForman(){
    yield fork(watchRequestedTab);
    yield fork(watchRequestAdd);
}