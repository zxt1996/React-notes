import React from 'react';

class clock extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            time:new Date()
        }
    }

    componentDidMount(){
        this.interval = setInterval(() => {
            this.tick();
        }, 1000);
    }

    componentWillUnmount(){
        clearInterval(this.interval);
    }

    tick(){
        this.setState({
            time:new Date()
        })
    }

    render(){
        return (
            <div>
                <h1>实时刷新的时钟</h1>
                {this.state.time.toLocaleTimeString()}
            </div>
        )
    }
}

export default clock;