# PropTypes
- 使用propTypes进行类型检查
```
import PropTypes from 'prop-types';
class Greeting extends React.Component{
    render(){
        return(
            <h1>Hello {this.props.name}</h1>
        );
    }
}

Greeting.propTypes={
    name:PropTypes.string
};
```
- 限制单个子元素  
  使用PropTypes.element可以指定只有一个子元素可以被传递给组件
  ```
  //将children限制为单个子元素
  Greeting.propTypes={
      name:PropTypes.string,
      children:PropTypes.element.isRequired
  };
  ```
  引用Greeting组件:
  ```
  <Greeting name={'world'}>
    <span>子元素1</span>
    <span>子元素2</span>
  </Greeting>
  ```
- 指定默认属性值  
  利用defaultProps属性
  ```
  //给Greeting属性中的name值指定默认值，当组件引用时，没有传入name属性时，会使用默认值。
  Greeting.defaultProps={
      name:'Stranger'
  };
  ```
  ES6写法
  ```
  class Greeting extends React.Component{
      static defaultProps ={
          name:'stranger'
      }

      render(){
          return(
              <div>Hello {this.props.name}</div>
          )
      }
  }
  ```
## props和state混合使用
```
// 1. 组件类
    class Dog extends React.Component{
        constructor(props){
            super(props);

            // 狗： 姓名， 性别， 年龄， 狗友
            // 2. 初始化state
            this.state = {
                 age: 1, //年龄
                 dogFriends: [] // 狗友
            }
        }

        // 3. 设置props属性的默认值
        static defaultProps = {
            name: '旺财',
            gender: '公'
        };

        // 4. 设置props属性的类型
        static propTypes = {
            name: PropTypes.string.isRequired,
            gender: PropTypes.string.isRequired
        };

        render(){
            const {name, gender} = this.props;
            const {age, dogFriends} = this.state;
            return (
                <div>
                    <p>狗名：{name}, 性别：{gender}</p>
                    <p>我今年{age}岁了</p>
                    <p>我有很多狗友：</p>
                    <ul>
                        {dogFriends.map((friend, index)=>(
                            <li key={index}>{friend}</li>
                        ))}
                    </ul>
                    <button onClick={()=>this.addYear()}>增一岁</button>
                </div>
            )
        }
        addYear(){
           // 1. 增加狗友
           let tempArr = this.state.dogFriends;
           tempArr.push('狗友'+Math.floor(Math.random()*100));

           // this.props.name = '哈哈哈';
          /* this.setProps({
               name: '哈哈哈哈'
           });*/

           // 2. 更新状态
            this.setState({
                age: this.state.age + 1,
                dogFriends: tempArr
            })
        }
    }

    ReactDOM.render(
        <Dog/>,
        document.getElementById('app')
    );
```