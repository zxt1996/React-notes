import React,{useEffect} from 'react';
import {gettopics} from './api/request';

const App: React.FC = () => {
  useEffect(() => {
    gettopics().then((res)=>{
      console.log(res);
    });
  }, []);
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
