# 1.元素渲染
- ReactDOM.render()  
  利用ReactDOM.render()将一个React元素渲染到根DOM节点中。
```
const element = <h1>Hello, world</h1>;
ReactDOM.render(element, document.getElementById('root'));
```
# 2.JSX
将HTML标记转换为react元素
- 可以在大括号内放置任何有效的JS表达式
```
function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Harper',
  lastName: 'Perez'
};

const element = (
  <h1>
    Hello, {formatName(user)}!
  </h1>
);

ReactDOM.render(
  element,
  document.getElementById('root')
);
```