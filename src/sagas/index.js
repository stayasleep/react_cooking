import { fork } from 'redux-saga/effects';
import watchRequestedTab from './watchReqTab';

export default function* startForman(){
    yield fork(watchRequestedTab);
}