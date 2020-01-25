interface State{
    value:number
}

type Action = 
    | {type:'increment'}
    | {type:'decrement'}
    | {type:'incrementAmount';amount:number};

export const counterReducer = (state:State,action:Action)=>{
    switch (action.type) {
        case 'increment':
          return { value: state.value + 1 };
        case 'decrement':
          return { value: state.value - 1 };
        case 'incrementAmount':
          return { value: state.value + action.amount };
        default:
          throw new Error();
      }
}