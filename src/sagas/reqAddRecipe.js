import { put, call } from 'redux-saga/effects';
import {ADDED_RECIPE} from '../actions/types';
import {addRecipe, retrieveRecipes} from '../actions/api';


//we are going to define the sequence of the requestAddRecipe Saga

export function* requestAddRecipe({payload}){
    console.log('add recipe saga',payload);
    try{
        const added = yield call(addRecipe, payload);
        const recipes =yield call(retrieveRecipes);
        yield [
            put({type: ADDED_RECIPE, recipes})
        ]
    }catch(error){
        console.log('add err',error);
    }
}