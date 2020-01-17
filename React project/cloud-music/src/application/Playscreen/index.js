import React,{useContext,useEffect,useState} from 'react';
import {Screen} from './style';
import {Playcontent} from '../../store/context';
import Screenhead from '../../components/screenhead';
import ScreenMid from '../../components/screenmid';
import ScreenFooter from '../../components/screenfooter';

function PlayScreen(){
    const {state,dispatch} = useContext(Playcontent);
    const [temp, settemp] = useState([]);

    const audio = document.getElementById('audio');

    useEffect(() => {
        if(state.privileges[state.currentIndex]){
            settemp(state.privileges[state.currentIndex].songs[0]);
        }
    }, [state['currentIndex']]);
    return (
        <Screen>
            {temp.ar ? <Screenhead songname={temp.name} creator={temp.ar[0].name}/> : null}
            {temp.al ? <ScreenMid songimg={temp.al.picUrl}/> : null}
            {temp ? <ScreenFooter whether={state.playing}/> : null}
        </Screen>
    )
}

export default React.memo(PlayScreen);