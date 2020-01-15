import React,{useEffect,useContext,useState} from 'react';
import {List,Listitem} from './style';
import {Myusecontext} from '../../store/context';
import {getSongdetail} from '../../api/request';

function Songlist(){
    const nowdata = useContext(Myusecontext);
    const [songdetail, setsongdetail] = useState([]);

    useEffect(() => {
        if(nowdata){
            let temp = [];
            nowdata.privileges.map((el)=>{
                getSongdetail(el.id).then((res)=>{
                    temp.push(res);
                    if(temp.length === nowdata.privileges.length){
                        setsongdetail(temp);
                    }
                })
            })
            console.log(songdetail)
        }
    }, [nowdata,songdetail.length]);
    return (
        <List>
           {songdetail ? (
               songdetail.map((el,index)=>(
                   <Listitem key={el.songs[0].id}>
                       <div>
                            <div>
                                {index+1}
                            </div>
                            <div>
                                <div>
                                    {el.songs[0].name}
                                </div>
                                <div>
                                    <span>
                                        {el.songs[0].ar[0].name}
                                    </span>
                                    <span>-</span>
                                    <span>
                                        {el.songs[0].al.name}
                                    </span>
                                </div>
                            </div>
                       </div>
                       <div>
                            <div>
                                <i className="iconfont icon-play"></i>
                            </div>
                            <div>
                                <i className="iconfont icon-msnui-more"></i>
                            </div>
                       </div>
                   </Listitem>
               ))
           ) : <div>1</div>}
        </List>
    )
}


export default React.memo(Songlist);