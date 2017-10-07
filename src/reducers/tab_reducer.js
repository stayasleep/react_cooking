
const defaultState = {
    letters:["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","Add"],
    selected: null
};

export default function(state=defaultState, action){
    switch (action.type){
        default:
            return state;
    }
}
