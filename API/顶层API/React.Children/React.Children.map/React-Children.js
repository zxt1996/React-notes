import React from 'react';

class usereactchildren extends React.Component{
    render(){
        const children = this.props.children;
        return (
            <div>
                {React.Children.map(children,(child,i)=>{
                    if(i < 1)return;
                    return child;
                })}
            </div>
        )
    }
}

export default usereactchildren;