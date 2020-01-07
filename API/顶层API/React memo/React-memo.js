import React from 'react';
//仅当props发生变化时，组件才会重新渲染！ 
//通常，在进行更改时，树中的所有React组件都会经过渲染。 
//使用PureComponent和React.memo()，我们可以只渲染某些组件
//由于仅渲染了需要渲染的内容，因此可以提高性能。

const User = ({avatar,name}) => {
    console.log("Rendering <User />");
    return (
        <div>
<div>avatar：{avatar}</div>
    <div>name：{name}</div>
        </div>
    )
}

//每秒渲染一次
// export default User;

//仅渲染一次
export default React.memo(User);