import React,{useState,useCallback} from 'react';

function useLocalStorage(key,initialValue){
    //将初始状态函数传递给useState，这样逻辑只执行一次
    const [storageValue, setStorageValue] = useState(()=>{
        try {
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        }catch (error){
            console.log(error);
            return initialValue;
        }
    });

    const setValue = value => {
        try{
            const valueToStore = value instanceof Function ? value(storageValue) : value;
            setStorageValue(valueToStore);
            window.localStorage.setItem(key,JSON.stringify(valueToStore));
        }catch(error){
            console.log(error);
        }
    }

    const clear = useCallback(()=>{
        window.localStorage.removeItem(key);
    },[])

    return [storageValue,setValue,clear];
}

function UselocalStorage(){
    const [name,setName,clear] = useLocalStorage('name','Bob');

    return (
        <div>
            <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange = {e => setName(e.target.value)}
            />
            <button onClick={()=>clear()}>清除缓存</button>
        </div>
    )
}

export default UselocalStorage;