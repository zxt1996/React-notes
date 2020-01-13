import React,{useEffect,useRef} from 'react';
import {List,ListItem} from './style';
import Scroll from '../scroll/index';
import Nowsinger from '../../store/context';

function Horizen(props){
    let {title,content,aboutclass} = props;
    const Category = useRef(null);
    const {state,dispatch} = React.useContext(Nowsinger);

    //加入初始化内容宽度的逻辑
    useEffect(() => {
        console.log(state)
        let categoryDOM = Category.current;
        let tagElems = categoryDOM.getElementsByClassName(aboutclass);
        let totalWidth = 0;
        Array.from(tagElems).forEach(ele => {
            totalWidth += ele.offsetWidth;
            
        });
        categoryDOM.style.width = `${totalWidth}px`;
    }, [state]);

    //点击选中歌手类型和首字母
    let getkey = (key)=>{
        //设置到时歌手查询的参数
        let atoz = /[A-Z]/;
        if(atoz.test(key)){
            dispatch({type:"singerinitial",data:key});
        }else{
            dispatch({type:"singercat",data:key});
        }
        let categoryDOM = Category.current;
        let temp = categoryDOM.querySelectorAll('.myselected');
        temp.forEach((el)=>{
            el.classList.remove('selected');
        })
        let one = categoryDOM.getElementsByClassName(key);
        one[0].classList.add('selected')
    }
    return (
        <Scroll direction={"horizental"}>
            {/* 注入ref */}
            <List ref={Category}>
                <span className={aboutclass}>{title}</span>
                {
                    content.map((el)=>(
                        <ListItem
                         key={el.key}
                         onClick={()=>getkey(el.key)}
                         className={["myselected",el.key,aboutclass]}>
                            <span>{el.name}</span>
                        </ListItem>
                    ))
                }
            </List>
        </Scroll>
    )
}

export default Horizen;