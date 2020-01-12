import React,{useState,useEffect} from 'react';
import { Carousel } from 'antd';
import {SliderContent} from './style';


function Slider(props){
    let {mybanner} = props;

    return (
        <SliderContent>
            <div className="before"></div>
            <Carousel autoplay>
                {
                    mybanner.map((res)=>(
                        <div key={res.targetId}
                            className="banner">
                            <img src={res.imageUrl}></img>
                        </div>
                    ))
                }
            </Carousel>
        </SliderContent>
    )
}

//React.memo使得该组件在传入的值不变的前提下是不会被重新渲染的
export default React.memo(Slider);