import React,{useContext,useEffect,useState} from 'react';
import {SLContent} from './style';
import {Myusecontext} from '../../store/context';

function Scontentdetail(){
    const nowdata = useContext(Myusecontext);
    const [nowlist, setnowlist] = useState(null);
    
    useEffect(() => {
        setnowlist(nowdata);
    }, [nowdata]);
    return (
        <SLContent>
            {nowdata ? (
                <div>
                    <div className="intbackimg">
                        <img src={nowdata.coverImgUrl + "?param=300x300"}/>
                    </div>
                    <div className="introduction">
                        <div className="intimg">
                            <img src={nowdata.coverImgUrl + "?param=300x300"}/>
                        </div>
                        <div className="intcreator">
                            <div className="intcreatorhead">
                                {nowdata.name}
                            </div>
                            <div className="intcreatormid">
                                <div>
                                    <img src={nowdata.avatarUrl + "?param=300x300"}/>
                                </div>
                                <div>
                                    {nowdata.nickname}
                                </div>
                            </div>
                            <div className="intcreatorfoot">
                                <p>
                                    {nowdata.description}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                
            ) : <div>b</div>}
        </SLContent>
    )
}

export default React.memo(Scontentdetail);