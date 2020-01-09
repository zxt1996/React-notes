import React from "react";
import ReactDOM from "react-dom";

import { createStore, combineReducers } from "redux";
import { Provider, connect } from "react-redux";

const reducer = (state = 0, action) => {
  if (action.type === "CLICK") {
    return state + 1;
  }else if(action.type === "DEC"){
    return state - 1;
  }
  return state;
};

const store = createStore(
  combineReducers({
    counter: reducer
  })
);

const mapStateToProps = state => {
  return {
    counter: state.counter
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onClick: () =>
      dispatch({
        type: "CLICK"
      }),
    decnum:()=>{
      dispatch({
        type:'DEC'
      })
    }
  };
};

const App = props => (
  <div>
    Kliknięto {props.counter} razy
    <br/>
    <button onClick={props.onClick}>+1</button>
    <button onClick={props.decnum}>-1</button>
  </div>
);

//第一个参数mapStateToProps是一个参数
//作用：给返回的组件注入props(来自store中的状态)
//负责输入逻辑，将状态数据映射到展示组件的参数props上
//第二个参数mapDispatchToProps
//作用：将dispatch作为props传递给组件
//负责输出逻辑，将用户对展示组件的操作映射成action
const ConnectedApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <ConnectedApp />
  </Provider>,
  rootElement
);