import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
 
function App() {
  //useSelector（）将状态作为参数并返回Redux存储状态
  const counter = useSelector(state => state);
  const dispatch = useDispatch();
 
  return (
    <div className="App">
      
      <button
        onClick={() =>
          dispatch({
            type: "Car"
          })
        }
      >
    Car
    </button> &nbsp;&nbsp;&nbsp;
    <h1>{counter.vehicle}</h1>
    <button
        onClick={() =>
          dispatch({
            type: "Bike"
          })
        }
      >
    Bike
      </button>  
    </div>
   
  );
}
 
export default App;