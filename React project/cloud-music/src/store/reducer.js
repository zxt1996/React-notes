import React,{useReducer} from 'react';

//关于歌手查询的reducer
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

//歌单id
export const songlistidreducer = (nowlistid,action) => {
    if(action.type == 'CHANGE'){
        let temp = {id:''};
        temp['id'] = action.data;
        nowlistid.id = action.data;
        return temp;
    }

    return nowlistid;
}

//关于歌曲列表的reducer
export const songlistreducer = (nowlist,action) => {
    let temp = {};
    if(action.type == "HASCHANGE"){
        for(let nowitem in nowlist){
            nowlist[nowitem] = action.data[nowitem];
            temp[nowitem] = action.data[nowitem];
        }
        return temp;
    }

    return nowlist;
}