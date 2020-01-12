import React,{useState,useRef, createRef} from 'react';

const Test = () => {
    const [index, setindex] = useState(0);
    //useRef可以在它的.current属性中保存一个值，并且可以在组件重新渲染之后保持该值
    //useRef 返回一个可变的ref对象，其.current属性被初始化为传入的参数（initialValue）。
    //返回的 ref 对象在组件的整个生命周期内保持不变。
    const myuseref = useRef();
    const mycreateRef = createRef();

    if(!myuseref.current){
        myuseref.current = index;
    }

    if(!mycreateRef.current){
        mycreateRef.current = index;
    }

    return (
        <div>
            <p>current：{index}</p>
                <p>myuseref：{myuseref.current}</p>
            <p>mycreateRef：{mycreateRef.current}</p>

            <button onClick={
                ()=>setindex(index+1)
            }>+1</button>
        </div>
    )
}

export default Test;