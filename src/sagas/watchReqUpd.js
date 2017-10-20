import { takeLatest } from 'redux-saga/effects';
import { REQ_UPDATE_RECIPE } from '../actions/types';
import { requestUpdRecipe } from './reqUpdRecipe';

export default function* watchReqUpd(){
    yield takeLatest(REQ_UPDATE_RECIPE, requestUpdRecipe);
}