import { takeLatest } from 'redux-saga/effects';
import {requestAddRecipe} from './reqAddRecipe';
import {REQ_ADD_RECIPE} from '../actions/types';

export default function* watchReqAdd(){
    yield takeLatest(REQ_ADD_RECIPE, requestAddRecipe);
}