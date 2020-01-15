import React,{useEffect} from 'react';
import {Singerlist,Singeritem} from './style';
import LazyLoad from 'react-lazyload';

function Esingerlist(props){
    const {aboutsinger} = props;

    useEffect(() => {
        let temp = document.getElementsByClassName('singerlisthei');
        let temptwo = document.getElementsByClassName('singresulthei');
        console.log(temp.length * 100);
        let tempheigh = temp.length * 110 - 50;
        console.log(temptwo[0])
        temptwo[0].style.height = `${tempheigh}px`;
    }, [aboutsinger]);

    return (
        <Singerlist className="singresulthei">
            {
                aboutsinger.map((res)=>(
                    <Singeritem key={res.img1v1Id} className="singerlisthei">
                        <div>
                            <LazyLoad placeholder={<img width="100%" height="100%" src={require('./music.png')}/>}>
                                <img src={`${res.img1v1Url}?param=300x300`}></img>
                            </LazyLoad>
                        </div>
                        <div>
                            {res.name}
                        </div>
                    </Singeritem>
                ))
            }
        </Singerlist>
    )
}

export default Esingerlist;