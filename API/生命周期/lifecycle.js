import React from 'react';
import { render } from 'react-dom';
// 生命周期
// 阶段一：Mounting
//这个阶段只发生一次。在这个阶段，组件的props和state被定义和配置。

//阶段二：Update
//在这个阶段，我们得到新的props，改变state，处理用户交互，并进行组件层次的通信。

//阶段三：Unmount
//此阶段发生在从本机UI卸载组件实例时。当用户导航时可能会发生这种情况

class mycomponent extends React.Component{
  //挂载阶段
  //1.constructor()
  //通常，在构造函数方法中初始化状态和绑定事件处理程序方法。
    constructor(props){
        super(props);
        this.state = { customer : { type: '',age:0 ,name:''} } ;
        // this.handlePoints = this.handlePoints.bind(this);
    }

    // state = { customer : { type: '',age:0 ,name:''} } ;

    //2.static getDerivedStateFromProps()
    //在初始挂载将组件呈现到DOM之前调用(或调用)此方法。

    //3.Render
    //render是类组件唯一需要的方法
    //返回组件JSX
    //渲染方法是渲染函数应该是纯函数
    //不要尝试使用setstate或与外部api交互。
    render() {
        return (
          <div>
            <span className="aftermouted">
            { this.state.customer.name } (age: { this.state.customer.age })
            </span>
          </div>
        );
      }

      //4.componentDidMount()
      //调用render之后，组件挂载到DOM后，componentDidMount方法会立即被触发
      componentDidMount(){
        let aftermouted = document.querySelector('.aftermouted');
        window.console.log(aftermouted);
      }

      //更新阶段
      //1. static getDerivedStateFromProps()
      //最先被触发

      //2.shouldComponentUpdate()
      //在这个生命周期方法中，可以返回一个布尔值true或false，来控制组件是否被重新呈现

      //3.render()

      //4.getSnapshotBeforeUpdate()
      //在DOM真正刷新前，该方法可以获取在DOM更新前的数据
      // getSnapshotBeforeUpdate(prevProps, prevState) {
      //     return value || null // where 'value' is a  valid JavaScript value    
      // }

      //5.componentDidUpdate()
      //第三个参数是getSnapshotBeforeUpdate()返回的数据
      // componentDidUpdate(prevProps, prevState, snapshot) {
 
      // }

      //卸载阶段
      // componentWillUnmount()
      //在卸载和销毁组件之前被立即调用。这是执行任何必要清理的理想场所，
      //例如清除计时器、取消网络请求或清除在componentDidMount()中创建的任何订阅
      // e.g add event listener
      // componentDidMount() {
      //   el.addEventListener()
      // }

      // // e.g remove event listener 
      // componentWillUnmount() {
      //   el.removeEventListener()
      // }
}


export default mycomponent;




