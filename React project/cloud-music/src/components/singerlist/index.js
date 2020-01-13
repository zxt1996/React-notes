import React,{useEffect} from 'react';
import {Singerlist,Singeritem} from './style';

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
                            <img src={res.img1v1Url}></img>
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