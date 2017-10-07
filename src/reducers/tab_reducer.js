import {SELECTED_TAB} from '../actions/types';
const defaultState = {
    letters:["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","Add"],
    selected: null
};

export default function(state=defaultState, action){
    switch (action.type){
        case SELECTED_TAB:
            console.log('action tab',action);
            return {...state, selected:action.payload};
        default:
            return state;
    }
}
