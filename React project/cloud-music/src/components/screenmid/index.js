import React from 'react';
import {Smid} from './style';

function ScreenMid(props){
    const {songimg} = props;

    return (
        <Smid>
            <div>
                <img src={songimg}/>
            </div>
        </Smid>
    )
}

export default React.memo(ScreenMid);