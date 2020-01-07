import React from 'react';

//只有当组件所处的树中没有匹配到 Provider 时，其 defaultValue 参数才会生效。
// 1. 将初始状态传递给 React.createContext。这个方法会返回一个带有 Provider 和 Consumer 的对象。
const ThemeContext = React.createContext('light');

class ThemeProvider extends React.Component{
    state = {
        theme:'light'
    }

    toggleTheme = () => {
        this.setState(({theme}) => ({
            theme : theme === 'light' ? 'dark' : 'light'
        }))
    }

    render(){
        return (
            // 2. 使用 Provider 组件包裹在组件树的最外层，并接收一个 value 属性。value 属性可以是任何值。
            <ThemeContext.Provider value={this.state.theme}>
                <button onClick={this.toggleTheme}>toggle theme</button>
                {this.props.children}
            </ThemeContext.Provider>
        )
    }
}

// 3. 使用 Consumer 组件，在组件树中 Provider 组件内部的任何地方都能获取到状态的子集。
const ThemeConsumer = ThemeContext.Consumer;

class contextapp extends React.Component{
    render(){
        return (
            <ThemeProvider>
                <ThemeConsumer>
        {theme => <div style={styles[theme]}>{theme}</div>}
                </ThemeConsumer>
            </ThemeProvider>
        )
    }
}

const styles = {
    dark: {
      backgroundColor: 'black',
      color: 'white',
    },
    light: {
      backgroundColor: 'white',
      color: 'black',
    },
  }

export default contextapp;

