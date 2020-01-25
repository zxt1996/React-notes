import React from 'react';
import {useFetch} from './fetchdata';

function App() {
  const [data,loading] = useFetch();

  if(loading){
    return <div>loading...</div>
  }

  return (
    <p>
      {data.type}
    </p>
  )
}

export default App;
