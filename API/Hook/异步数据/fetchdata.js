import React,{useEffect,useState} from 'react';

export const useFetch = () => {
    const [data, setdata] = useState([]);
    const [loading, setloading] = useState(true);

    useEffect(() => {
        fetch(`http://music.couchpotato.fun/song/`).then((res)=>{
                console.log(res);
                setdata(res);
                setloading(false);
            })
    }, []);

    return [data,loading];
}

