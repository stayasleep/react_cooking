import {ADDED_RECIPE, GET_DISHES} from '../actions/types';
const defaultState= {all:[]}; //will get an array full of objects

export default function(state=defaultState, action){
    switch(action.type){
        case ADDED_RECIPE:
            console.log('reducer for added recipe',action);
            return {...state, all: action.recipes};
        case GET_DISHES:
            return {...state, all: action.recipes};
        default:
            return state;
    }
}