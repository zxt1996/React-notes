import React,{useContext} from 'react';
import {Footer} from './style';
import {Playcontent} from '../../store/context';

function ScreenFooter(props){
    const {whether} = props;

    const {state,dispatch} = useContext(Playcontent);

    //是否播放
    let whetherpaly = () => {
        dispatch({
            type:'PLAYING',
            data:!state['playing']
        })
    }

    //当前歌曲在播放列表的索引位置置为下一首
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
    //跳到上一首
    let clickback = () => {
        if(state['currentIndex'] === 0){
            dispatch({
                type:'CURRENTINDEX',
                data:state.playList.length - 1
            })
       }else{
            dispatch({
                type:'CURRENTINDEX',
                data:state['currentIndex'] - 1
            })
       }
    }

    return (
        <Footer>
            <span>
                <i className="iconfont icon-xunhuanbofang"></i>
            </span>
            <span onClick={()=>clickback()}>
                <i className="iconfont icon-left"></i>
            </span>
            <span onClick={()=>whetherpaly()}>
                {!whether ? <i className="iconfont icon-play1"></i> 
                        : <i className="iconfont icon-pause"></i>
                } 
            </span>
            <span onClick={()=>nextsong()}>
                <i className="iconfont icon-arrow-right"></i>
            </span>
            <span>
                <i className="iconfont icon-gengduo1"></i>
            </span>
        </Footer>
    )
}

export default React.memo(ScreenFooter);