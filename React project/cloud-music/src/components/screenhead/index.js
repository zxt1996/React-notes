import React from 'react';
import {Shead} from './style';
import { useHistory } from 'react-router-dom';

function Screenhead(props){
    let {songname,creator} = props;
    const history = useHistory();
    let back = () => {
        history.goBack();
        let bottompaly = document.getElementsByClassName('bottompaly');
        bottompaly[0].style.visibility = 'initial';
    }

    return (
        <Shead>
            <div onClick={()=>back()}><i className="iconfont icon-LeftArrow"></i></div>
            <div>
                <span>
                    {songname}
                </span>
                <span>
                    {creator}
                </span>
            </div>
        </Shead>
    )
}

export default React.memo(Screenhead);