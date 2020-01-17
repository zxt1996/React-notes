import React,{useEffect,useContext,useState} from 'react';
import {List,Listitem} from './style';
import {Myusecontext,Playcontent} from '../../store/context';
import {getSongdetail,playurl} from '../../api/request';

function Songlist(){
    const nowdata = useContext(Myusecontext);
    const {state,dispatch} = useContext(Playcontent);
    const [songdetail, setsongdetail] = useState([]);

    const audio = document.getElementById('audio');
    //点击歌单列表
    let whether = (who) => {
        dispatch({
            type:"PLAYWHO",
            data:{
                'currentIndex':who,
                'hasbottom':true
            }
        });

        dispatch({
            type:"PRIVILEGES",
            data:songdetail
        });

        dispatch({
            type:"PLAYING",
            data:state['playing']
        });

        setTimeout(()=>{
            let bptemp = document.getElementsByClassName('bottompaly');
            if(bptemp){
                bptemp[0].style.display = 'flex';
            }
            console.log(state);
        },0)
    }

    useEffect(() => {
        if(nowdata){
            let temp = [];
            let songpalyid = [];
            nowdata.privileges.map((el)=>{
                getSongdetail(el.id).then((res)=>{
                    temp.push(res);
                    if(res){
                        songpalyid.push(playurl(res.songs[0].id));
                    }
                    if(temp.length === nowdata.privileges.length){
                        setsongdetail(temp);
                        dispatch({
                            type:"PLAYLIST",
                            data:songpalyid
                        });
                    }
                })
            });
        }
    }, [nowdata,songdetail.length]);

    return (
        <List>
           {songdetail ? (
               songdetail.map((el,index)=>(
                   (
                    el ? <Listitem key={el.songs[0].id} onClick={()=>whether(index)}>
                                    <div>
                                        <div>
                                            {index+1}
                                        </div>
                                        <div>
                                            <div>
                                                {el.songs[0].name}
                                            </div>
                                            <div>
                                                <span>
                                                    {el.songs[0].ar[0].name}
                                                </span>
                                                <span>-</span>
                                                <span>
                                                    {el.songs[0].al.name}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div>
                                            <i className="iconfont icon-play"></i>
                                        </div>
                                        <div>
                                            <i className="iconfont icon-msnui-more"></i>
                                        </div>
                                    </div>
                                </Listitem> : null
                   )
               ))
           ) : <div>1</div>}
        </List>
    )
}


export default React.memo(Songlist);