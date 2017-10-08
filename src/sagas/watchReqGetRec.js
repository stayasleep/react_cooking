import { takeLatest } from 'redux-saga/effects';
import {reqGetRecipesSaga} from './reqGetRecipes';
import {REQ_GET_DISHES} from '../actions/types';

export default function* watchReqGetRec(){
    yield takeLatest(REQ_GET_DISHES, reqGetRecipesSaga);
}