import React from 'react';
import {connect} from 'react-redux';

const mapStateToProps = state => {
    return {articles:state.articles,count:state.count};
}

//{articles}解构赋值的写法,相当于store.articles
const ConnectedList = ({articles,count}) => (
    <ul>
        {/* {articles.map(el => (
            <li key={el.id}>{el.title}</li>
        ))} */}
        {count}
    </ul>
)

//mapStateToProps:将一部分的Redux state连接到组件上
//使得组件能够从state访问它所需要的数据
//connect的第二个参数是目前的UI组件
//mapDispatchToProps将Redux actions
const List = connect(mapStateToProps)(ConnectedList);

export default List;