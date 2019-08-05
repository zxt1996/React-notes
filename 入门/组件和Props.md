# 3.组件 & Props
## 组件
- class
```
class Clock extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.props.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
```
- function
```
function Clock(props) {
  return (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {props.date.toLocaleTimeString()}.</h2>
    </div>
  );
}

function tick() {
  ReactDOM.render(
    <Clock date={new Date()} />,
    document.getElementById('root')
  );
}

setInterval(tick, 1000);
```
**注意： 组件名称必须以大写字母开头。**
### 将函数组件转换成 class 组件
- 1. 创建一个同名的 ES6 class，并且继承于 React.Component
- 2. 添加一个空的 render() 方法。
- 3. 将函数体移动到 render() 方法之中。
- 4. 在 render() 方法中使用 this.props 替换 props。
- 5. 删除剩余的空函数声明。
## Props
props是一个从外部传进组件的参数，主要作为就是从父组件向子组件传递数据，它具有可读性和不变性，只能通过外部组件主动传入新的props来重新渲染子组件，否则子组件的props以及展现形式不会改变。
```
<Component data="测试props"/>
```
在Component组件中使用this.props.data就可以取得data中的值(其中data这个字段可以任意指定但是组件中的和获取props要对应就好了)  
- 只读性