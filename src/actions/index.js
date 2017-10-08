import { REQ_TAB, SELECTED_TAB, REQ_ADD_RECIPE } from './types';

export const selectNewTab = (letter) => ({
	type: REQ_TAB,
	payload: letter
});


export const addNewRecipe = (recipe) => ({
    type: REQ_ADD_RECIPE,
    payload: recipe
});

