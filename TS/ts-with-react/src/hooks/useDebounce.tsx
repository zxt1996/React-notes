import {useState, useEffect} from 'react';

function useDebounce(value:any, delay = 300) {
    const [deboucedValue, setDeboucedValue] = useState(value);

    useEffect(() => {
        const handler = window.setTimeout(() => {
            setDeboucedValue(value);
        }, delay);
        return () => {
            clearTimeout(handler);
        };
    }, [value, delay]);
    return deboucedValue;
}

export default useDebounce;