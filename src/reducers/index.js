import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import tabReducer from './tab_reducer';
import dishReducer from './dish_reducer';

const rootReducer = combineReducers({
    form: formReducer,
    tab: tabReducer,
    dishes: dishReducer
});

export default rootReducer;
