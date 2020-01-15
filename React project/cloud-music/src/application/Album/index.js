import React,{useState,useEffect,useReducer} from 'react';
import {Albumcontent} from './style';
import Songlisthead from '../../components/songlisthead';
import Scontentdetail from '../../components/songlistcontent';
import {songlistid,songlistdetail} from '../../store/index';
import {songlistreducer} from '../../store/reducer';
import {getplaylistdetail} from '../../api/request';
import {Myusecontext} from '../../store/context';
import Songlist from '../../components/songlist';

function Album(){
    const [state,dispatch] = useReducer(songlistreducer,songlistdetail);
    const [nowlist, setnowlist] = useState(null);

    useEffect(() => {
        getplaylistdetail(songlistid.id).then((res)=>{
            let temp = null;
            if(res){
                temp = {
                    name:res.playlist.name,
                    coverImgUrl:res.playlist.coverImgUrl,
                    tags:res.playlist.tags,
                    description:res.playlist.description,
                    nickname:res.playlist.creator.nickname,
                    avatarUrl:res.playlist.creator.avatarUrl,
                    privileges:res.privileges
                }
                setnowlist(temp);
                dispatch({type:"HASCHANGE",data:temp});
            }
        })
    }, []);

    return (
        <Myusecontext.Provider value={nowlist}>
            <Albumcontent>
                <Songlisthead/>
                <Scontentdetail/>
                <Songlist/>
            </Albumcontent>
        </Myusecontext.Provider>
    )
}

export default Album;