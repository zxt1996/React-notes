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
            setmybanner(result.banners);
        };

        fetchData();
    },[]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await getRecommendlist();
            setdayrecommend(result.result);
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
       </Content>
    )
}

export default React.memo(Recommend);