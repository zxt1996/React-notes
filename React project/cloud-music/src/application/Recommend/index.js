import React,{useState,useEffect} from 'react';
import Slider from '../../components/slider';
import DayRecommend from '../../components/list';
import Scroll from '../../baseUI/scroll';
import {Content} from './style';
import {getRecommendlist,getBanner} from '../../api/request';
import {forceCheck} from 'react-lazyload';

function Recommend(){
    const [dayrecommend, setdayrecommend] = useState([]);
    const [mybanner, setmybanner] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await getBanner();
            console.log(result);
            if(result){
                setmybanner(result.banners);
            }
        };

        fetchData();
    },[]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await getRecommendlist();
            if(result){
                setdayrecommend(result.result);
            }
        };

        fetchData();
    },[]);

    return (
       <Content>
           <Scroll onScroll={forceCheck}>
                <div className="one">
                    <Slider mybanner={mybanner}></Slider>
                    <DayRecommend dayrecommend={dayrecommend}/>
                </div>
           </Scroll>
           {/* { renderRoutes(route.routes) } */}
       </Content>
    )
}

export default React.memo(Recommend);