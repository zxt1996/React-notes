# 4.State
存储属于该组件的属性值
```
// 1. 创建组件类
    class Liao extends React.Component{
        constructor(props){
            super(props);

            // 2. 初始化状态
            this.state = {
                name: '周杰伦',
                gender: '男',
                intro: '七里香'
            };

            // this.dealClick = this.dealClick.bind(this);
        }
        render(){
            const {name, gender, intro} = this.state;
            return (
                <div>
                    <h3>我叫：{name}, 性别：{gender}, 代表作：{intro}</h3>
                    <button onClick={()=>this.dealClick()}>换一个</button>
                </div>
            )
        }

        dealClick(){
           //  alert('点了'+ this);
            this.setState({
                name: '王菲',
                gender: '女',
                intro: '因为爱情'
            });
        }
    }

    // 2. 渲染到DOM容器
    ReactDOM.render(
        <Liao/>,
        document.getElementById('app')
    );
```
在组件初始化的时候，通过this.state给组件设定一个初始的state，在第一次render的时候就会用这个数据来渲染组件。
## setState
通过this.setState()方法来修改state。
```
componentDidMount(){
  fetch('url')
    .then(response => response.json())
    .then((data) => {
      this.setState({itemList:item});  
    }
}
```
