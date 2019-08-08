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

## JSX常见的界面操作
- 多重标签嵌套
```
<script type="text/html">
  ReactDOM.render(
      <div>
        <h2>多层标签嵌套</h2>
        <img src="img/logo.jpg" alt="撩课" width="300"/>
        <p>测试</p>
    </div>
    ,document.getElementById('app')
  );
</script>
```
- js中的变量，表达式要写在{}中
```
const str = 'zxt';
ReactDOM.render(
    <div>
      <span>{str}</span>
      <p>100+20*2/5*3={100+20*2/5*3}</p>
    </div>,document.getElementById('app')
);
```
- 内联样式通过对象方式引入
```
const myStyle={
    backgroundColor:'purple',
    color:'yellow',
    fontSize:30
};

ReactDOM.render(
    <div>
    {/*JSX注释的用法*/}
    <h2>颜色</h2>
    <div style={myStyle}>颜色来了</div>,document.getElementById('app')
);
```
- 数组遍历
```
// 1. 数据
    /**/
    const dataArr = [
        {name: '周杰伦', age: 38},
        {name: '谢霆锋', age: 40},
        {name: '刘德华', age: 48},
        {name: '撩课学院', age: 2}
    ];

    // 2. 创建虚拟DOM
    const vDOM = (
        <ul>
         {
             dataArr.map((data,index)=><li key={index}>{index+1}---姓名：{data.name}---年龄：{data.age}岁)</li>
         }
        </ul>
    );

    ReactDOM.render(
        vDOM,document.getElementById('app')
    );
```