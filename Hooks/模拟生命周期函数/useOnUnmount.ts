//useOnUnmount 模拟componentWillUnmount
export default function useOnUnmount(fn:Function){
    useEffect(() => {
        return () => {
            fn()
        };
    }, [])
}