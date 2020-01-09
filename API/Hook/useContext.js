import React,{useContext} from 'react';

const colors = {
    blue: "#03619c",
    yellow: "#8c8f03",
    red: "#9c0312"
  };

const ColorContext = React.createContext(colors.blue);

const Home = () => {
    //useContext is the same as static contextType = ColorContext
    const colors = useContext(ColorContext);
    return <div style={{backgroundColor:colors.blue}}>...</div>
}

function usecontextapp(){
    return (
        <ColorContext.Provider value={colors}>
            <Home/>
        </ColorContext.Provider>
    )
}

export default usecontextapp;