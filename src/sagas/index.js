import { fork } from 'redux-saga/effects';
import watchRequestedTab from './watchReqTab';
import watchRequestAdd from './watchReqAdd';
import watchReqGetRec from './watchReqGetRec';


//First we need to create our saga generator and register them

export default function* startForman(){
    yield fork(watchReqGetRec);
    yield fork(watchRequestedTab);
    yield fork(watchRequestAdd);
}