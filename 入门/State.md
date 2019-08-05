# 4.State
存储属于该组件的属性值
```
export default class ItemList extends React.Component{
  constructor(){
    super();
    this.state = {
      itemList:'一些数据',
    }
  }
  render(){
    return (
      {this.state.itemList}
    )
  }
}
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
