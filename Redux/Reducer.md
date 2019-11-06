# Reducer
Reducer是一个**纯函数**  

- 不得改写参数
- 不能调用系统I/O的API
- 不能调用Date.now()或Math.random()等不纯的方法，因为每次会得到不一样的结果  

由于 Reducer 是纯函数，就可以保证同样的State，必定得到同样的 View。但也正因为这一点，Reducer 函数里面不能改变 State，必须返回一个全新的对象
```
//State是一个对象
function reducer(state,action){
    return Object.assign({},state,{thingToChange});
    //或者
    return {...state,...newState};
}

//State是一个数组
function reducer(state,action){
    return [...state,newItem];
}
```
最好把 State 对象设成只读。你没法改变它，要得到新的 State，唯一办法就是生成一个新对象。这样的好处是，任何时候，与某个 View 对应的 State 总是一个不变的对象。