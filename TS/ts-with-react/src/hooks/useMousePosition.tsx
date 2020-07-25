import {useState, useEffect} from 'react';

const useMousePosition = () => {
    const [position, setPosition] = useState({x: 0, y: 0});

    useEffect(() => {
        const updatePostion = (e: MouseEvent) => {
            setPosition({
                x: e.clientX,
                y: e.clientY
            })
        }

        document.addEventListener("mousemove", updatePostion);
        return () => {
            document.removeEventListener("mousemove", updatePostion);
        };
    }, []);

    return position;
}

export default useMousePosition;