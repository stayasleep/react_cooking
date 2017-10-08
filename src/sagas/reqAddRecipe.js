import { put, call } from 'redux-saga/effects';
import {ADDED_RECIPE} from '../actions/types';
import {addRecipe} from '../actions/api';

export function* requestAddRecipe({payload}){
    console.log('add recipe saga',payload);
    try{
        const added = yield call(addRecipe, payload);
        yield [
            put({type: ADDED_RECIPE, added})
        ]
    }catch(error){
        console.log('add err',error);
    }
}