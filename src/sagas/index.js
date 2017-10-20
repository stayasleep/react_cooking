import { fork } from 'redux-saga/effects';
import watchRequestedTab from './watchReqTab';
import watchRequestAdd from './watchReqAdd';
import watchReqGetRec from './watchReqGetRec';
import watchReqDel from './watchReqDel';
import watchReqUpd from './watchReqUpd';


//First we need to create our saga generator and register them

export default function* startForman(){
    yield fork(watchReqGetRec);
    yield fork(watchRequestedTab);
    yield fork(watchRequestAdd);
    yield fork(watchReqDel);
    yield fork(watchReqUpd);
}