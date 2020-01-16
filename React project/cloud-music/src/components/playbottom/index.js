import React,{useEffect,useContext,useState} from 'react';
import {Play} from './style';
// import {playlistdetail} from '../../store/index';
import {Playcontent} from '../../store/context';
import {useHistory} from 'react-router-dom';

function Playbottom(){
    const {state,dispatch} = useContext(Playcontent);
    const [nowsong, setnowsong] = useState(null);

    const audio = document.getElementById('audio');

    const history = useHistory();
    //切换为大屏
    let topalyscreen = () => {
        history.push('/playscreen');
        let bottompaly = document.getElementsByClassName('bottompaly');
        bottompaly[0].style.display = 'none';
    }
    //收起底部的播放器
    let noplay = () => {
        let bptemp = document.getElementsByClassName('bottompaly');
        bptemp[0].style.display = 'none';
    }
    //是否播放
    let whetherpaly = () => {
        dispatch({
            type:'PLAYING',
            data:!state['playing']
        })
    }
    //下一首
    let nextsong = () => {
        if(state['currentIndex'] < state.playList.length){
            dispatch({
                type:'CURRENTINDEX',
                data:state['currentIndex'] + 1
            })
       }else{
            dispatch({
                type:'CURRENTINDEX',
                data:0
            })
       }
    }
    //点击列表中其他歌曲时保持当前的播放暂停状态
    useEffect(() => {
        if(state.privileges[state.currentIndex]){
            setnowsong(state.privileges[state.currentIndex].songs[0]);
            setTimeout(()=>{
                if(state['playing']){
                    audio.play();
                }else{
                    audio.pause();
                }
            },0)
        }
    }, [state,state['playing'],state.currentIndex]);

    useEffect(() => {
        //播放结束时直接播放下一首
        //加上if判断防止audio还没被加载完成时该语句出错
        if(audio){
            audio.addEventListener('ended',()=>{
               console.log(state['currentIndex']);
               if(state['currentIndex'] !== -1){
                    nextsong();
               }
            })
            let temp = state.playList[state.currentIndex];
            audio.src = temp;
        }
    }, [state['currentIndex']]);

    return (
        <Play className="bottompaly">
            <div>
                {   
                    nowsong ?  
                        <div onClick={()=> topalyscreen()}>
                            <img src={nowsong.al.picUrl}/>
                        </div> : null
                }
                {
                    nowsong ?   
                        <div onClick={()=>noplay()}>
                            <p>{nowsong['name']}({nowsong.al.name})</p>
                            <p>{nowsong.ar[0].name}</p>
                        </div> : null
                }
            </div>
            <div>
                <span><i className="iconfont icon-left"></i></span>
                <span onClick={()=>whetherpaly()}>
                    {state['playing'] ? 
                        <i className="iconfont icon-pause"></i>
                        : <i className="iconfont icon-play1"></i>
                    }
                </span>
                <span><i className="iconfont icon-arrow-right"></i></span>
                <span><i className="iconfont icon-gengduo1"></i></span>
            </div>
            <audio id="audio"/>
        </Play>
    )
}

export default React.memo(Playbottom);