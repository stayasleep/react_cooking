import axios from 'axios';


// const BASE = "http://localhost:8080/react_cooking/server/data.php?action=";
const BASE = "/react_cooking/server/data.php?action=";
export const retrieveRecipes = () =>{
    console.log('before retrieve api');
    return axios.get(`${BASE}retrieve`).then((response) => {
        console.log('inside of success retrieve api',response);
        return response.data.data;

    }).catch((err)=>{
        console.log('retrieve err',err);
    })
};

export const addRecipe = (recipe)=>{
    console.log('before api param',recipe);
    return axios.post(`${BASE}create`, recipe).then((response)=>{
        console.log('inside api add',response);
    }).catch((err) =>{
        console.log('add err',err);
    })
};

export const deleteRecipe = (id)=>{
    console.log('before api delete',id);
    return axios.delete(`${BASE}delete`,{headers: id}).then((response)=>{
        console.log('inside api delete',response);
    })
};