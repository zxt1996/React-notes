//useOnMount模拟componentDidMount
import React,{useEffect} from 'react';
export default function useOnMount(fn:Function){
    //第二个参数设置为[],表示不必对任何数据，所以只在首次渲染时调用
    useEffect(() => {
        fn()
    }, [])
}

function Demo(){
    useOnMount(async () => {
        try{
            await loadList();
        }catch{
            //log
        }
    })
}