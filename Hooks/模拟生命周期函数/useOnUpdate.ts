//useOnUpdate 模拟componentDidUpdate
function useOnUpdate(fn:()=>void,dep?:any[]){
    const ref = useRef({fn,mounted:false});
    ref.current.fn = fn;

    useEffect(() => {
        //首次渲染不执行
        if(!ref.current.mounted){
            ref.current.mounted = true;
        }else{
            ref.current.fn();
        }
    }, def)
}

function Demo(props){
    useOnUpdate(()=>{
        dosomethingwith(props.a);
    },[props.a])

    return <div>...</div>
}