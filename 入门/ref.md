# ref
React中的ref是用来操纵React组件实例或者DOM元素的接口  
## React.createRef()
refs是使用React.createRef()属性创建的，并通过ref属性附加到React元素。  

通常在构造函数中，将Refs分配给实例属性，以便在整个组件中引用。
```
import React from 'react';
export default class MyInput extends React.Component{
    constructor(props){
        super(props);
        //分配给实例属性
        this.inputRef = React.createRef(null);
    }

    componentDidMount(){
        //通过this.inputRef.current获取对该节点的引用
        this.inputRef && this.inputRef.current.focus();
    }

    render(){
        //把<input>ref关联到构造函数中创建的`inputRef`上
        return (
            <input type="text" ref={this.inputRef} />
        )
    }
}
```
- 当ref属性用于HTML元素时，构造函数中使用React.createRef()创建的ref接收底层DOM元素作为其current属性
- 当ref属性用于自定义的class组件时，ref对象接收组件的挂载实例作为其current属性
- 不能在函数组件上使用`ref`属性，因为函数组件没有实例

为DOM添加ref,那么我们就可以通过ref获取对该节点的引用。而给React组件添加ref,那么我们可以通过ref获取到该组件的实例【不能在函数组件上使用ref属性，因为函数组件没有实例】

## useRef
> 仅限于在函数组件内使用  

### 创建Refs
使用React.useRef()创建Refs，并通过ref属性附加至React元素上  

```
const refContainer = useRef(initialValue);
```
useRef返回的ref对象在组件的整个生命周期内保持不变

### 访问Refs
当ref被传递给React元素时，对该节点的引用可以在ref的current属性中访问

```
import React from 'react';
export default function MyInput(props){
    const inputRef = React.useRef(null);
    React.useEffect(()=>{
        inputRef.current.focus();
    });
    return (
        <input type="text" ref={inputRef} />
    )
}
```

## React.forwardRef
React.forwardRef()通过接收一个函数来传递refs
```
const FancyButton = React.forwardRef((props,ref)=>(
    <button ref={ref} className="FancyButton">
      {props.children}
    </button>
));

const ref = React.createRef();
<FancyButton ref={ref}>Click me</FancyButton>
```
我们创建一个引用，本来是给外面的FancyButton组件的，但是因为React.forwardRef的处理，这个引用被传递给了内部的button元素。这样ref.current的引用由本来的FancyButton实例传递到了button元素本身。
## 实例
```
<script type="text/babel">
  class CustomTextInput extends React.Component{
      constructor(props){
          super(props);
          //绑定ref
          this.myInput=React.createRef();
          this.myBtn=React.createRef();
      }

      render(){
          return (
              <div>
                <input
                ref={this.myInput}
                type="text" placeholder="请输入内容"
                />
                <input ref={this.myBtn} type="button" value="获取焦点" onClick={()=>this.focusTextInput()} />
            </div>
          )
      }

      focusTextInput(){
          //console.log(this.myInput);
          this.myInput.current.focus(); //获取焦点
          console.log(this.myBtn);
      }
  }

  ReactDOM.render(
      <CustomTextInput/>,
      document.getElementById("app")
  );
</script>
```