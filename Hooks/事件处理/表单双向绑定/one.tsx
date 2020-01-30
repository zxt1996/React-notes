import React,{useState,useCallback} from 'react';

function useChange<S>(initial?:S | (()=>S)){
    const [value, setValue] = useState<S | undefined>(initial);
    const onChange = useCallback(e => setValue(e.target.value),[]);

    return {
        value,
        setValue,
        onChange,
        //绑定到原生事件
        bindEvent:{
            onChange,
            value
        },
        //绑定到自定义组件
        bind:{
            onChange:setValue,
            value
        }
    }
}

function Demo(){
    const userName = useChange('');
    const password = useChange('');

    return (
        <div>
            <div>
                {userName.value}
                <input {...userName.bindEvent}/>
            </div>
            <div>
                {password.value}
                <input {...password.bindEvent}/>
            </div>
        </div>
    )
}

export default Demo;
