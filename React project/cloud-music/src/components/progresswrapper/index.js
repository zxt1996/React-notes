import React,{useEffect,useRef,useState,useContext} from 'react';
import {Progress,Slider,Thumb} from './style';
import {changetime} from '../../api/utils';
import {Playcontent} from '../../store/context';

function ProgressWrapper(props){
    const {dt} = props;
    const [starttime, setstarttime] = useState('00:00');
    const [endtime, setendtime] = useState('00:00');
    const audio = document.getElementById('audio');
    const {state,dispatch} = useContext(Playcontent);
    const [temp, settemp] = useState([]);

    useEffect(() => {
        if(state.privileges[state.currentIndex]){
            settemp(state.privileges[state.currentIndex].songs[0]);
        }
        setendtime(temp.dt);
    }, [state['currentIndex']]);

    //利用useRef来捕获页面的DOM元素
    const thumbref = useRef();
    const slider = useRef();

    const diff = useRef();
    //鼠标移动时触发
    const handlemousemove = (event) => {
        let newX = event.touches[0].pageX - diff.current 
                    - slider.current.getBoundingClientRect().left;
        //HTMLElement.offsetWidth 是一个只读属性，返回一个元素的布局宽度。
        const end = slider.current.offsetWidth - thumbref.current.offsetWidth;

        const start = 0;

        if(newX < start){
            newX = 0;
        }

        if(newX > end){
            newX = end;
        }

        const newPercentage = (100*newX)/end;
        //修改音频的进度
        audio.currentTime = audio.duration * newPercentage/100;
        //由于拇指本身的宽度是15px，我们需要通过移除一半大小来居中，以避免拇指向右或向左溢出。
        thumbref.current.style.left = `calc(${newPercentage}% - 7.5px)`;
    }
    //mouseup事件在指针设备按钮抬起时触发。
    const handlemouseup = () => {
        console.log('end');
        document.removeEventListener('touchend', handlemouseup);
        document.removeEventListener('touchmove', handlemousemove);
    }
    //鼠标按下时触发
    const handlemousedown = (event) => {
        // pageX 是一个由MouseEvent接口返回的相对于整个文档的x（水平）坐标以像素为单位的只读属性。
        //Element.getBoundingClientRect()方法返回元素的大小及其相对于视口的位置。
        diff.current = event.touches[0].pageX -
                        thumbref.current.getBoundingClientRect().left;
        //移动端要使用touch而不是mouce鼠标事件
        document.addEventListener('touchmove',handlemousemove);
        document.addEventListener('touchend',handlemouseup);
    }

    useEffect(() => {
        let temp = changetime(dt);
        setendtime(temp);
        let now = (audio.currentTime/audio.duration*100).toFixed(0);
        thumbref.current.style.left = `calc(${now}% - 7.5px)`;
}, [endtime]);

    useEffect(() => {
       console.log(audio.currentTime)
       audio.addEventListener('timeupdate',()=>{
        //当前歌曲总时长
        let duration = audio.duration;
        //当前歌曲已播时长
        let currenttime = audio.currentTime;
        //播放时长所占比例
        let percenttime = parseInt(currenttime/duration*100);
        if(thumbref.current){
            thumbref.current.style.left = `calc(${percenttime}% - 7.5px)`;
        }
    })
    }, [audio]);

    return (
        <Progress>
            <span>
                {starttime}
            </span>
            <Slider  
                ref={slider}>
                <Thumb 
                    ref={thumbref}
                    onTouchStart={handlemousedown}></Thumb>
            </Slider>
            <span>
                {endtime}
            </span>
        </Progress>
    )
}

export default React.memo(ProgressWrapper);