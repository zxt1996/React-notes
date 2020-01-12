import React,{forwardRef,useState,useEffect,useRef,useImperativeHandle} from 'react';
//类型检查
import PropTypes from 'prop-types';
import BScroll from 'better-scroll';
import styled from 'styled-components';

const ScrollContainer = styled.div`
    width:100%;
    height:100%;
    overflow:hidden;
`

//Scroll可以接收上层组件传递下来的ref，并将它传递给自己的子组件
const Scroll = forwardRef((props,ref)=>{
    const [bScroll, setbScroll] = useState();

    //useRef可以在它的.current属性中保存一个值，并且可以在组件重新渲染之后保持该值
    const scrollContainerRef = useRef();

    const { direction, click, refresh, bounceTop, bounceBottom } = props;

    const {pullUp,pullDown,onScroll} = props;

    useEffect(() => {
        //better-scroll 提供了一个类，实例化的第一个参数是一个原生的 DOM 对象。
        //如果传递的是一个字符串，better-scroll 内部会尝试调用 querySelector 去获取这个 DOM 对象
        const scroll = new BScroll(scrollContainerRef.current,{
            //当设置为 true 的时候，可以开启横向滚动。
            scrollX:direction === "horizental",
            scrollY:direction === "vertical",
            //当 probeType 为 3 的时候，不仅在屏幕滑动的过程中，
            //而且在 momentum 滚动动画运行过程中实时派发 scroll 事件。
            probeType:3,
            click:click,
            //当滚动超过边缘的时候会有一小段回弹动画。
            bounce:{
                top:bounceTop,
                bottom:bounceBottom
            }
        });

        setbScroll(scroll);

        return () => {
            setbScroll(null);
        };
    }, []);

    useEffect(() => {
        if(!bScroll || !onScroll)return;
        //on监听当前实例上的自定义事件。
        bScroll.on('scroll',(scroll)=>{
            onScroll(scroll);
        })
        //移除自定义事件监听器。只会移除这个回调的监听器。
        return () => {
            bScroll.off('scroll');
        };
    }, [onScroll,bScroll]);

    useEffect(() => {
        if(!bScroll || !pullUp)return;
        bScroll.on('scrollEnd',()=>{
            //判断是否滑动到了底部
            if(bScroll.y <= bScroll.maxScrollY + 100){
                pullUp();
            }
        });

        return () => {
            bScroll.off('scrollEnd');
        };
    }, [pullUp,bScroll]);

    useEffect(() => {
        if(!bScroll || !pullDown)return;
        bScroll.on('touchEnd',(pos)=>{
            //判断用户的下拉动作
            if(pos.y > 50){
                pullDown();
            }
        });

        return () => {
            bScroll.off('touchEnd');
        };
    }, [pullDown,bScroll]);

    //每次重新渲染都要刷新实例，防止无法滑动
    useEffect(() => {
        if(refresh && bScroll){
            bScroll.refresh();
            // console.log(bScroll);
            // let temp = bScroll;
            // temp.hasVerticalScroll = true;
            // setbScroll(temp);
        }
    });

    //// 一般和 forwardRef 一起使用，ref 已经在 forWardRef 中默认传入
    useImperativeHandle(ref,()=>({
        //// 给外界暴露 refresh 方法
        //scrollRef.current.refresh ();
        refresh(){
            if(bScroll){
                bScroll.refresh();
                bScroll.scrollTo(0,0);
            }
        },
        getBScroll(){
            if(bScroll){
                return bScroll;
            }
        }
    }));

    return (
        <ScrollContainer ref={scrollContainerRef}>
            {props.children}
        </ScrollContainer>
    )
});

Scroll.defaultProps = {
    direction: "vertical",
    click: true,
    refresh: true,
    onScroll:null,
    pullUpLoading: false,
    pullDownLoading: false,
    pullUp: null,
    pullDown: null,
    bounceTop: true,
    bounceBottom: true,
    mouseWheel: true,//开启鼠标滚轮
    bindToWrapper: true
  };
  

  Scroll.propTypes = {
    direction: PropTypes.oneOf (['vertical', 'horizental']),// 滚动的方向
    refresh: PropTypes.bool,// 是否刷新
    onScroll: PropTypes.func,// 滑动触发的回调函数
    pullUp: PropTypes.func,// 上拉加载逻辑
    pullDown: PropTypes.func,// 下拉加载逻辑
    pullUpLoading: PropTypes.bool,// 是否显示上拉 loading 动画
    pullDownLoading: PropTypes.bool,// 是否显示下拉 loading 动画
    bounceTop: PropTypes.bool,// 是否支持向上吸顶
    bounceBottom: PropTypes.bool// 是否支持向下吸底
  };
  
  export default Scroll;

