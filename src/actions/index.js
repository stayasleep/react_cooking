import { REQ_TAB, SELECTED_TAB, REQ_ADD_RECIPE, REQ_DEL_RECIPE, REQ_GET_DISHES } from './types';

export const selectNewTab = (letter) => ({
	type: REQ_TAB,
	payload: letter
});


export const addNewRecipe = (recipe) => ({
    type: REQ_ADD_RECIPE,
    payload: recipe
});

export const getAllRecipes = () =>({
    type: REQ_GET_DISHES
});

export const delRecipe = (id)=>({
    type: REQ_DEL_RECIPE,
    payload: id,
});

