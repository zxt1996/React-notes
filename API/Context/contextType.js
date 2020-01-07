import React from 'react';

const ThemeContext = React.createContext('light');

class contextTypeApp extends React.Component{
    state = {
        name:'real'
    };

    handleClick = () => {
        this.setState({
            name:Math.random()
        })
    }

    render(){
        const {name} = this.state;
        return (
            <ThemeContext.Provider value={{name:name}}>
                <Toolbar/>
                <button onClick={this.handleClick}>app button</button>
            </ThemeContext.Provider>
        )
    }
}

function Toolbar(props){
    return (
        <div>
            <ThemedButton/>
        </div>
    )
}

Toolbar = React.memo(Toolbar);

//挂载在 class 上的 contextType 属性会被重赋值为一个由 React.createContext() 创建的 Context 对象。
//这能让你使用 this.context 来消费最近 Context 上的那个值。
//你可以在任何生命周期中访问到它，包括 render 函数中。
class ThemedButton extends React.Component{
    static contextType = ThemeContext;
    render(){
        console.log('a',ThemeContext);
        return (
            <div>
                {this.context.name}
            </div>
        )
    }
}

export default contextTypeApp;