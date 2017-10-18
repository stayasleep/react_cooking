import { takeLatest } from 'redux-saga/effects';
import {requestDelRecipe} from './reqDelRecipe';
import {REQ_DEL_RECIPE} from '../actions/types';

export default function* watchReqDel(){
    yield takeLatest(REQ_DEL_RECIPE, requestDelRecipe);
}