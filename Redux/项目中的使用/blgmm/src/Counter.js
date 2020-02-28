import React from "react";
import {connect} from 'react-redux';
import {reset ,increment, decrement} from './actions';

function mapStateToProps(state){
  return {
    count:state.count
  }
}

// 在这个对象中, 属性名会成为 prop 的 names,
// 属性值应该是 action 生成器函数.
// 它们跟 `dispatch` 绑定起来.
const mapDispatchToProps = {
  reset,
  increment,
  decrement
}

class Counter extends React.Component {
  increment = () => {
    // this.props.dispatch({type:'INCREMENT'})
    this.props.increment();
  };

  decrement = () => {
    // this.props.dispatch({type:'DECREMENT'})
    this.props.decrement();
  };

  reset = () => {
    this.props.reset();
  };

  render() {
    return (
      <div className="counter">
        <h2>Counter</h2>
        <div>
          <button onClick={this.decrement}>-</button>
          <span className="count">{this.props.count}</span>
          <button onClick={this.increment}>+</button>
        </div>
        <button onClick={this.reset}>reset</button>
      </div>
    );
  }
}

//Connect 做的是在 Redux 内部 hook，
//取出整个 state，然后把它传进你提供的 mapStateToProps 函数。
//mapStateToProps 返回的对象以 props 形式传给了你的组件
//定义从 state 到 props 的映射。
export default connect(mapStateToProps,mapDispatchToProps)(Counter);
