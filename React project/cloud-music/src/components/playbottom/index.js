import React,{useEffect,useContext,useState} from 'react';
import {Play} from './style';
// import {playlistdetail} from '../../store/index';
import {Playcontent} from '../../store/context';

function Playbottom(){
    const {state,dispatch} = useContext(Playcontent);
    const [nowsong, setnowsong] = useState(null);

    useEffect(() => {
        if(state.privileges[state.currentIndex]){
            console.log(state.privileges[state.currentIndex].songs[0]);
            setnowsong(state.privileges[state.currentIndex].songs[0]);
        }
    }, [state]);

    return (
        <Play className="bottompaly">
            <div>
                {   
                    nowsong ?  
                        <div>
                            <img src={nowsong.al.picUrl}/>
                        </div> : null
                }
                {
                    nowsong ?   
                        <div>
                            <p>{nowsong['name']}({nowsong.al.name})</p>
                            <p>{nowsong.ar[0].name}</p>
                        </div> : null
                }
            </div>
            <div>
                <span><i className="iconfont icon-play1"></i></span>
                <span><i className="iconfont icon-gengduo1"></i></span>
            </div>
        </Play>
    )
}

export default React.memo(Playbottom);