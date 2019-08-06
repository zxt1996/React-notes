# 1.元素渲染
- ReactDOM.render()  
  利用ReactDOM.render()将一个React元素渲染到根DOM节点中。
```
const element = <h1>Hello, world</h1>;
ReactDOM.render(element, document.getElementById('root'));
```
# 2.JSX
- 在javaScript代码中直接写HTML标记
```
const name = 'zxt'
const element = <h1>Hello,{name}</h1>;
```
## 在JSX中使用表达式
- JSX本身也是表达式
  ```
  const element = <h1>Hello world</h1>;
  ```
- 在属性中使用表达式
  ```
  <Mycomponent foo={1+2+3+4}/>
  ```
- 延展属性
  ```
  const props = {firstName:'Ben',lastName:'Hector'};
  const greeting = <Greeting {...props} />
  ```
- 表达式作为子元素
  ```
  const element = <li>{props.message}</li>;
  ```

## 约定：自定义组件以大写字母开头
1. React认为小写的tag是原生DOM节点,如div  
2. 大写字母开头为自定义组件
3. JSX标记可以直接使用属性语法，例如\<menu.Item />