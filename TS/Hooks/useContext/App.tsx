import React,{useContext, createContext} from 'react';

type Theme = 'light' | 'dark';
const ThemeContext = createContext<Theme>('dark');

const App: React.FC = () => {
  return (
    <ThemeContext.Provider value="dark">
        <MyComponent/>
    </ThemeContext.Provider>
  );
}

const MyComponent = () => {
    const theme = useContext(ThemeContext);
    return (
        <div>
            the theme is {theme}
        </div>
    )
}

export default App;
