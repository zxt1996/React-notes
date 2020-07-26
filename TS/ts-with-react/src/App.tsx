import React, {useState} from 'react';
import './App.css';
import Hello from './components/Hello';
import useMousePosition from './hooks/useMousePosition';
import useURLLoader from './hooks/useURLLoader';
import "./styles/index.scss"
import {Button} from './components/Button/button';

interface IShowDog {
  message: string,
  status: string
}

function App() {
  const position = useMousePosition();
  const [update, setUpdate] = useState(false);
  const [data, loading] = useURLLoader("https://dog.ceo/api/breeds/image/random", update);

  const dogData = data as IShowDog;
  return (
    <div className="App">
      <h3>
        X: {position.x}
        Y: {position.y}
      </h3>
      <Hello message="hello"/>
      {/* <button onClick={()=>setUpdate(!update)}>更新图片</button> */}
      <Button btnType='primary' onClick={()=>setUpdate(!update)}>更新图片</Button>
      <div>
      {
        loading ? <h3>正在加载中</h3> : <img src={dogData && dogData.message}/>
      }
      </div>
    </div>
  );
}

export default App;
