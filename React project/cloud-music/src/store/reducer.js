import React,{useReducer} from 'react';

export const reducer = (whosinger,action) => {
    if(action.type == "singercat"){
        whosinger.singercat = action.data;
        //必须返回新对象，否则地址不会改变
        return {
            singerinitial:whosinger.singerinitial,
            singercat : action.data
        };
    }

    if(action.type == "singerinitial"){
        whosinger.singerinitial = action.data;
        return {
            singerinitial:action.data,
            singercat : whosinger.singercat
        };
    }
    
    return whosinger;
}