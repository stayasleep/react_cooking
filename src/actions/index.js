import { REQ_TAB, REQ_UPDATE_RECIPE, REQ_ADD_RECIPE, REQ_DEL_RECIPE, REQ_GET_DISHES } from './types';

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

// export const delRecipe = (id)=>({
//     type: REQ_DEL_RECIPE,
//     payload: id,
// });

export const delRecipe= (id) =>{
    console.log('del recipe index',id);
    return{
        type:REQ_DEL_RECIPE,
        payload: id,
    }
};

export const updRecipe = (recipe)=>{
    return{
        type: REQ_UPDATE_RECIPE,
        payload: recipe
    }
};
