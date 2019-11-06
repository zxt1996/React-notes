# Action
## 三种写法
```
//写法一
store.dispatch({
    type:'ADD_TODO',
    text:'Learn Redux'
});

//写法二
const action = {
    type:'ADD_TODO',
    payload:'Learn Redux'
};
store.dispatch(action);

//写法三
function addTodo(text){
    return {
        type:'ADD_TODO',
        payload:text
    }
}
store.dispatch(addTodo('Learn Redux'))
```