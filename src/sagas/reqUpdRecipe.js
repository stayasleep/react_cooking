import { put, call } from 'redux-saga/effects';
import { UPDATE_SUCCESS } from '../actions/types';
import { updateRecipe, retrieveRecipes} from '../actions/api';

export function* requestUpdRecipe({payload}){
    try{
        yield call(updateRecipe, payload);
        const recipes = yield call(retrieveRecipes);
        yield[
            put({type: UPDATE_SUCCESS, recipes})
        ]
    }catch(error){
        console.log('upd err',error);
    }
}