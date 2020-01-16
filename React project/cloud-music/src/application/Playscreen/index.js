import React,{useContext,useEffect,useState} from 'react';
import {Screen} from './style';
import {Playcontent} from '../../store/context';
import Screenhead from '../../components/screenhead';
import ScreenMid from '../../components/screenmid';

function PlayScreen(){
    const {state,dispatch} = useContext(Playcontent);
    const [temp, settemp] = useState([]);

    useEffect(() => {
        if(state.privileges[state.currentIndex]){
            settemp(state.privileges[state.currentIndex].songs[0]);
        }
    }, [state,temp]);
    return (
        <Screen>
            {temp.ar ? <Screenhead songname={temp.name} creator={temp.ar[0].name}/> : null}
            {temp.al ? <ScreenMid songimg={temp.al.picUrl}/> : null}
        </Screen>
    )
}

export default React.memo(PlayScreen);