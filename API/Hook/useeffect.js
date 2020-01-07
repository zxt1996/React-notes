import React,{Fragment,useState,useEffect} from 'react';
import axios from 'axios';

//组件内的每一个函数（包括事件处理函数，effects，定时器或者API调用等等）
//会捕获定义它们的那次渲染中的props和state。
function Apps(){
    const [data, setData] = useState({hits:[]});
    const [query, setquery] = useState('redux');
    const [url, setUrl] = useState(
        `https://hn.algolia.com/api/v1/search?query=redux`
    );
    //加载指示器
    const [isLoading, setisLoading] = useState(false);
    //进行错误处理
    const [isError, setIsError] = useState(false);

    //effect 函数本身在每一次渲染中都不相同。
    //React会记住你提供的effect函数，
    //并且会在每次更改作用于DOM并让浏览器绘制屏幕后去调用它。
    //闭包的体现
    useEffect(() => {
        const fetchData = async ()=>{
            setIsError(false);
            setisLoading(true);

            try{
                const result = await axios(url);
                setData(result.data);
            }catch(error){
                setIsError(true);
            }
            setisLoading(false);
        };

        fetchData();
    }, [url]);
    //当设置useEffect的第二个参数时，只有第二个参数发生改变时才会重新渲染

    return (
        <Fragment>
            <form onSubmit={(e)=>{
                    setUrl(`http://hn.algolia.com/api/v1/search?query=${query}`);
                    e.preventDefault();
                }}>
                <input
                    type="text"
                    value={query}
                    onChange={event=>setquery(event.target.value)}
                />
                <button type="submit">
                    Search
                </button>
            </form>

            {isError && <div>Something went wrong...</div>}

            {
                isLoading ? (
                    <div>Loading...</div>
                ) : (
                    <ul>
                        {data.hits.map(item => (
                            <li key={item.objectID}>
                        <a href={item.url}>{item.title}</a>
                            </li>
                        ))}
                    </ul>
                )
            }
        </Fragment>
    )
}

export default Apps;
