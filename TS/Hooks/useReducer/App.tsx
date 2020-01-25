import React,{useReducer} from 'react';
import {counterReducer} from './components/Test/index';

const App: React.FC = () => {
  const [state, dispatch] = useReducer(counterReducer,{value:0});
  return (
    <div>
      {state.value}
      <button onClick={()=>dispatch({
        type:'increment'
      })}>+1</button>
      <button onClick={()=>dispatch({
        type:'decrement'
      })}>-1</button>
      <button onClick={()=>dispatch({
        type:'incrementAmount',
        amount:10
      })}>+10</button>
    </div>
  );
}


export default App;
