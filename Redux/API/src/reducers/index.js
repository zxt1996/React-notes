import {ADD_ARTICLE,
    ADD_NUMBER,
    DEC_NUMBER} from "../constants/action-types";

const initialState = {
    articles:[{
        id:1,
        title:'jojo'
    }],
    count:0
};

// Redux reducer is just a JavaScript function
//takes two parameters: the current state and action
function rootReducer(state = initialState,action){
    //Then depending on the action type, 
    //the reducer produces the next state, 
    //eventually merging the action payload into the new state.
    if(action.type === ADD_ARTICLE){
        //keep the original state unaltered. 
        return Object.assign({},state,{
            articles:state.articles.concat(action.payload)
        })
    }else if(action.type == ADD_NUMBER){
        return {count:state.count+1};
    }else if(action.type == DEC_NUMBER){
        return {count:state.count-1};
    }
    
    //the state in redux comes from reducers.
    return state;
}

export default rootReducer;