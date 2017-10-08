import axios from 'axios';

const BASE = "http://localhost:8080/react_cooking/server/data.php?action=";

export const retrieveRecipes = () =>{
    return axios.get(`${BASE}retrieve`).then((response) => {
        console.log('success retrieve api',response);
    }).catch((err)=>{
        console.log('retrieve err',err);
    })
};

export const addRecipe = (recipe)=>{
    console.log('api param',recipe);
    return axios.post(`${BASE}create`, recipe).then((response)=>{
        console.log('api add',response);
    }).catch((err) =>{
        console.log('add err',err);
    })
};