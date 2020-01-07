import React from 'react';

//React.PureComponent可以实现shouldComponentUpdate的功能
class optimisizecount extends React.PureComponent{
    constructor(props){
        super(props);
        this.state = {
            count:0
        }
    }

    //在这个生命周期方法中，可以返回一个布尔值true或false，来控制组件是否被重新呈现
    // shouldComponentUpdate(nextProps,nextState){
    //     if(nextState.count === this.state.count){
    //         return false;
    //     }else{
    //         return true;
    //     }
    // }

    render(){
        return (
            <div>
                <div>
        <span>当前的state{this.state.count}</span>
                </div>
                <h2>通过输入改变state</h2>
                <input onChange={
                    (e)=>{
                        if(e.target.value !== ''){
                            this.setState({
                                count:e.target.value
                            })
                        }
                    }
                }></input>
            </div>
        )
    }
}

export default optimisizecount;