import React,{useReducer} from 'react';
import { playlistdetail } from '.';

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
    if(action.type === "HASCHANGE"){
        for(let nowitem in nowlist){
            nowlist[nowitem] = action.data[nowitem];
            temp[nowitem] = action.data[nowitem];
        }
        return temp;
    }

    return nowlist;
}

//设置当前的播放情况
export const nowplaysongreducer = (palydetail,action) => {
    if(action.type === 'FULLSCREEN'){
        palydetail['fullScreen'] = action.data;
        return Object.assign({},palydetail,{'fullScreen':action.data});
    }else if(action.type === 'PLAYING'){
        palydetail['playing'] = action.data;
        return Object.assign({},palydetail,{'playing':action.data});
    }else if(action.type === 'PLAYLIST'){
        action.data.map((el)=>{
            palydetail['playList'].push(el);
        })
        return Object.assign({},palydetail,{'playList':action.data});
    }else if(action.type === 'MODE'){
        palydetail['mode'] = action.data;
        return Object.assign({},palydetail,{'mode':action.data});
    }else if(action.type === 'CURRENTINDEX'){
        palydetail['currentIndex'] = action.data;
        return Object.assign({},palydetail,{'currentIndex':action.data});
    }else if(action.type === 'SHOWPLAYLIST'){
        palydetail['showPlayList'] = action.data;
        return Object.assign({},palydetail,{'showPlayList':action.data});
    }else if(action.type === 'HASBOTTOM'){
        palydetail['hasbottom'] = action.data;
        return Object.assign({},palydetail,{'hasbottom':action.data});
    }else if(action.type === 'PLAYWHO'){
        palydetail['currentIndex'] = action.data['currentIndex'];
        palydetail['hasbottom'] = action.data['hasbottom'];
        return Object.assign({},palydetail);
    }else if(action.type === 'PRIVILEGES'){
        palydetail['privileges'] = action.data;
        return Object.assign({},palydetail,{'privileges':action.data});
    }
    else{
        return palydetail;
    }
}