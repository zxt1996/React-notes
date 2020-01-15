import React,{useState,useEffect,useReducer} from 'react';
import Horizen from '../../baseUI/horizen-item';
import {categoryTypes,alphaTypes} from '../../api/config';
import {Navcontent,ListContainer} from './style';
import Nowsinger from '../../store/context';
import {getSongerlist} from '../../api/request';
import Esingerlist from '../../components/singerlist';
import {reducer} from '../../store/reducer';
import {buswhosinger} from '../../store/index';
import Scroll from '../../baseUI/scroll/index';
import {forceCheck} from 'react-lazyload';

function Singers(){
    //将初始数据作为第二个参数传入 useReducer 
    let [state,dispatch] = useReducer(reducer,buswhosinger);

    const [singerlist, setsingerlist] = useState([]);

    useEffect(() => {
        console.log(state.count)
        getSongerlist(state.singercat,state.singerinitial).then((res)=>{
            console.log(res.artists);
            setsingerlist(res.artists);
        })
    },[state]);

    return (
        <Nowsinger.Provider value={{state,dispatch}}>
            <Navcontent>
                <Horizen
                    title="分类："
                    content={categoryTypes} 
                    aboutclass="navone" 
                />
                <Horizen 
                title="首字母：" 
                content={alphaTypes} 
                aboutclass="navtwo"/>
            </Navcontent>
            <ListContainer>
                <Scroll onScroll={forceCheck}>
                    <Esingerlist aboutsinger={singerlist}/>
                </Scroll>
            </ListContainer>
        </Nowsinger.Provider>
    )
}

export default React.memo(Singers);