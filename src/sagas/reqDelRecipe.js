import {put, call} from 'redux-saga/effects';
import {DEL_SUCCESS} from '../actions/types';
import {deleteRecipe, retrieveRecipes} from '../actions/api';

export function* requestDelRecipe({payload}){
    try{
        yield call(deleteRecipe, payload);
        const recipes = yield call(retrieveRecipes);
        yield[
            put({type: DEL_SUCCESS, recipes})
        ]
    }catch(error){
        console.log('del err',error);
    }
}