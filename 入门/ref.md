# ref
React中的ref是用来操纵React组件实例或者DOM元素的接口  
## React.createRef()
refs是使用React.createRef()属性创建的，并通过ref属性附加到React元素。
```
class MyComponent extends React.Component{
    constructor(props){
        super(props);
        this.myRef = React.createRef();
    }

    componentDidMount(){
        console.log(this.myRef.current);
    }

    render(){
        return <div ref={this.myRef} />;
    }
}
```
**真实的DOM是通过current属性来引用的**
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