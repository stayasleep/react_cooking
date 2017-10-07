import { put, call } from 'redux-saga/effects';
import {SELECTED_TAB} from '../actions/types';

export function* requestTabSaga({payload}){
    console.log('this is req tab saga',payload);
    try{
        yield put({type: SELECTED_TAB, payload});
    }catch(error){
        console.log('tab err',error);
    }
}