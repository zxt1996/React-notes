import React from "react";
import { render } from "react-dom";
import Counter from "./Counter";
import "./index.css";
import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';

const initialState = {
  count:0
}

//不能执行 state.count = 0、state.items.push(newItem)、state.count++ 及其他类型的变动 
//—— 不要改变 state 本身，及其任何子属性
function reducer(state = initialState,action){
  console.log('reducer',state,action);
  
  switch(action.type){
    case 'INCREMENT':
      return {
        count:state.count + 1
      };
    case 'DECREMENT':
      return {
        count:state.count - 1
      };
    case 'RESET':
      return {
        count:0
      };
    default:
      return state;
  }
}

const store = createStore(
  reducer,
  //必须确保 thunk 包装在 applyMiddleware 调用里面，否则不会生效
  //thunk它是一个返回值为函数而非简单 action 对象的 action 生成器
  applyMiddleware(thunk)
);
store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "DECREMENT" });
store.dispatch({ type: "RESET" });

const App = () => (
  // 通过用 Provider 组件包装整个应用，应用树里的每一个组件都可以访问 Redux store。
  <Provider store={store}>
    <Counter />
  </Provider>
);

render(<App />, document.getElementById("root"));
