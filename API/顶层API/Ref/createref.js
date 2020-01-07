import React from 'react';

class usecreateref extends React.Component{
    constructor(props){
        super(props);
        this.inputField = React.createRef();
        this.toggleInputCase = this.toggleInputCase.bind(this);
        this.state = {uppercase:false}
    }

    toggleInputCase(){
        const isUpper = this.state.uppercase;

        //利用ref的current的属性可以访问该节点的引用
        const value = this.inputField.current.value;

        this.inputField.current.value = isUpper ? value.toLowerCase() : value.toUpperCase();

        this.setState({
            uppercase: !isUpper
        });
    }

    render(){
        return (
            <div>
                <input ref={this.inputField}/> 

                <button type="buttong" onClick={
                    this.toggleInputCase
                }>Toggle Case</button>
            </div>       
        );
    }
}

export default usecreateref;