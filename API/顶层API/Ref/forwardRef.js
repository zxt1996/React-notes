import React from 'react';

//Ref forwarding是一种将ref钩子自动传递给组件的子孙组件的技术。

//通过React.forwardRef的赋能，
//它可以接收上层组件传递下来的ref，并将它传递给自己的子组件-一个原生的DOM元素
const Child = React.forwardRef((props,ref)=>{
    return (
    <div ref={ref}>{props.txt}</div>
    )
})

//通过这种方式，
//使用了<Child>的组件就能通过挂载ref到<Child>组件的身上来访问到对应的底层的原生DOM元素了
//就像直接访问这个DOM元素一样
class Parent extends React.Component{
    constructor(){
        super();
        this.myChild = React.createRef();
    }

    componentDidMount(){
        console.log(this.myChild.current);
    }

    render(){
        return <Child ref={this.myChild} txt="parent props txt"/>
    }
}

export default Parent;