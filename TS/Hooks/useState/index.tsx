import React,{FunctionComponent,useState} from 'react';

export const Counter:FunctionComponent<{initial?:number}> = ({initial = 0})=>{
    const [clicks, setClicks] = useState(initial);
    const [one, setone] = useState<number | undefined>(undefined);
    const [two, settwo] = useState<Array<number>>([1]);

    interface MyObject {
        foo:string;
        bar?:number;
    }

    const [three, setthree] = useState<MyObject>({foo:'hello'});

    return (
        <>
            <p>
                Clicks:{clicks}
            </p>
            <button onClick={()=>setClicks(clicks+1)}>+1</button>
            <button onClick={()=>setClicks(clicks-1)}>-1</button>
            {one ? <h2>
                {one}
                </h2> : <h2>one:'undefined'</h2>}
            <button onClick={()=>setone(1)}>给one赋值</button>
            <h2>two:
                {two}
            </h2>
            <h2>three:
                {three.foo}
            </h2>
        </>
    )
}