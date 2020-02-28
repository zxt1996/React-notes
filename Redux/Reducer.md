# Reducer
Reducer是一个**纯函数**  

- 不得改写参数
- 不能调用系统I/O的API
- 不能调用Date.now()或Math.random()等不纯的方法，因为每次会得到不一样的结果  

由于 Reducer 是纯函数，就可以保证同样的State，必定得到同样的 View。但也正因为这一点，Reducer 函数里面不能改变 State

## 1.数组操作
### 增加一项
- 使用**concat**,会创建一个新数组

```
let array = [1,2,3];
const addArrayReducer = (array,action) => {
    return array.concat(action.data);
}

let newArray = addArrayReducer(array,{type:'ADD',data:[4]});
console.log(array); //[1,2,3]
console.log(newArray); //[1,2,3,4]
```

### 删除一项
- **slice**的使用

```
let array = [1,2,3];
const removeArrayReducer = (array,index) => {
    return [
        ...array.slice(0,index),
        ...array.slice(index+1)
    ]
}

let newArray = removeArrayReducer(array,1);
console.log(array); //[1,2,3]
console.log(newArray); //[1,3]
```

### 更新一项
```
let array = [1,2,3];
const incrementArrayReducer = (array,index) => {
    return [
        ...array.slice(0,index),
        array[index] + 1,
        ...array.slice(index+1)
    ]
}

let newArray = incrementArrayReducer(array,1);
console.log(array); //[1,2,3]
console.log(newArray); //[1,3,3]
```
## 2.对象操作

### 更新一项
- Object.assign

```
let item = {
    id:0,
    book:'Learn Redux1',
    available:false
}

const setItemAvailble = function (sourceItem){
    return Object.assign({},sourceItem,{
        available:true
    })
}
```

- 对象扩展运算符

```
let item = {
    id:0,
    book:'Learn Redux1',
    available:false
}

const setItemAvailble = function (sourceItem){
    return {
        ...sourceItem,
        available:true
    }
}
```

### 增加一项
- 对象扩展运算符

```
let item = {
    id:0,
    book:'Learn Redux1',
    available:false
}

const setItemAvailble = function (sourceItem){
    return {
        ...sourceItem,
        note:13
    }
}

let newItem = setItemAvailble(item)
```

### 删除一项
- Object.keys及reduce的使用
- Object.keys() 方法会返回一个由一个给定对象的自身可枚举属性组成的数组
- Object.keys(obj)：obj,要返回其枚举自身属性的对象。

```
let item = {
    id:0,
    book:'Learn Redux1',
    available:false,
    note:13
}

let newItem = Object.keys(item).reduce((obj,key) => {
    if(key !== 'note'){
        return {
            ...obj,
            [key]:item[key]
        }
    }
    return obj
},{})
```