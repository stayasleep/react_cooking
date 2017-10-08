import { put, call } from 'redux-saga/effects';
import { GET_DISHES } from '../actions/types';
import {retrieveRecipes} from '../actions/api';

export function* reqGetRecipesSaga(){

    try{
        const recipes = yield call(retrieveRecipes);
        yield put({type: GET_DISHES, recipes});
    }catch(error){
        console.log('error retrieving dishes',error);
    }
}