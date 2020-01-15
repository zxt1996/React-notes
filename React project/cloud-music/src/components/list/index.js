import React,{useReducer} from 'react';
import {ListRecommend,
        List,
        ListItem} from './style';
import { getCount } from "../../api/utils";
import LazyLoad from 'react-lazyload';
import {useHistory} from 'react-router-dom';
import {songlistid} from '../../store/index';
import {songlistidreducer} from '../../store/reducer';

function DayRecommend(props){
   let {dayrecommend} = props;
   const [state,dispatch] = useReducer(songlistidreducer,songlistid);

   let history = useHistory();
   //获取key值跳转到相应的歌单详情页
   let toalbum = (key) => {
       history.push(`/recommend/${key}`);
       dispatch({type:'CHANGE',data:key});
       console.log(state);
   }

    return (
        <ListRecommend>
            <h1 className="title">推荐歌单</h1>
            <List>
                {
                    dayrecommend.map((res)=>(
                        <ListItem key={res.id} onClick={() => toalbum(res.id)}>
                            <div className="img_wrapper">
                                <div className="imgdecorate">
                                    {/* img 标签外部包裹一层 LazyLoad实现图片的懒加载 */}
                                    <LazyLoad placeholder={<img width="100%" height="100%" src={require('./music.png')} alt="music"/>}>
                                        {/* 加此参数可以减小请求的图片资源大小 */}
                                        <img src={res.picUrl + "?param=300x300"} alt="music"/>
                                    </LazyLoad>
                                </div>
                                <div className="playcount">
                                    <i className="iconfont icon-erji"></i>
                                    <span>{getCount(res.playCount)}</span> 
                                </div>
                            </div>
                            <div className="desc">{res.name}</div>
                        </ListItem>
                    ))
                }
            </List>
        </ListRecommend>
    )
}

export default DayRecommend;