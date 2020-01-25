import React,{useState,useMemo} from 'react';

export default function CalculatePlus():JSX.Element{
    const [one, setone] = useState(0);
    const [two, settwo] = useState(0);

    const secondAdd = useMemo(():number => one + two + Math.random(), [one,two]);

    return (
        <>
            {one}
            <button onClick={()=>setone(one+1)}>one:+1</button>
            <br/>
            {two}
            <button onClick={()=>settwo(two+1)}>two:+1</button>
            <br/>
            {secondAdd}
        </>
    )
}