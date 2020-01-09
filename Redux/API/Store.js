import {createStore} from 'redux';

// 1.创建reducer
// reducer 是一个 函数，负责更新并返回一个新的 state
//第一个参数表示初始状态
const reducer = (state = {count:0},action)=>{
    switch(action.type){
        case 'INCREASE': return {count: state.count + 1};
        case 'DECREASE': return {count: state.count - 1};
        default: return state;
    }
}

//2.创建action
// action 只是一个包含 type 属性的普通对象
const actions = {
    increase: () => ({type: 'INCREASE'}),
    decrease: () => ({type: 'DECREASE'})
}

// 3.创建的store，使用createStore方法
// store 可以理解为有多个加工机器的总工厂
// 提供subscribe，dispatch，getState这些方法。
const store = createStore(reducer);

//subscribe(listener):for listening on state changes
//订阅页面数据状态，即store中state的变化
store.subscribe(()=>{
	//getState():for reading the current state of the application
    console.log(store.getState());
})

//dispatch(action):for dispatching an action
//会触发 reducer 的执行
store.dispatch(actions.increase()) // {count: 1}
store.dispatch(actions.increase()) // {count: 2}
store.dispatch(actions.increase()) // {count: 3}
