import React,{useReducer} from 'react';
//useReducer和reduce函数类似

const people = [
    {name: 'Jay', alive: true},
    {name: 'Kailee', alive: true},
    {name: 'John', alive: true},
    {name: 'Mia', alive: true}
  ]

  //Reducer函数接收两个参数，
  //第一个参数是当前的最新状态值，
  //第二参数则用于告诉Reducer当前执行了什么操作。
const reducer = (people,action) => {
    if(action.type == 'chomp'){
        return people.map(person => {
            if(person.name == action.payload){
                person.alive = false;
            }
            return person;
        })
    }

    if(action.type == 'revive'){
        return people.map(person => {
            if(person.name == action.payload){
                person.alive = true;
            }
            return person;
        })
    }
}




function Usereducerapp(){
  //将初始 state 作为第二个参数传入 useReducer 
    const [state,dispatch] = useReducer(reducer,people);

    function devour(name) {
        dispatch({ type: 'chomp', payload: name });
      }
      
      function spitOut(name) {
        dispatch({ type: 'revive', payload: name });
      }
    return (
        <div>
            {state.map((person,idx)=>(
                <div key={idx} style={{display:'flex',width:'50%',justifyContent:'space-around'}}>
                    <div>{person.name}</div>
                    {person.alive ?
          <div> ✨✨ ALIVE! ✨✨ <button onClick={() => devour(person.name)}> 🐊 DEVOUR 🐊 </button> </div> :
          <div> ☠ ☠ DEAD ☠ ☠ <button onClick={() => spitOut(person.name)}> 🥵 SPIT OUT 🥵 </button> </div>}
                </div>
            ))}
        </div>
    )
}

export default Usereducerapp;


