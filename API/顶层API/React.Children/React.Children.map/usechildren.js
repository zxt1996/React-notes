import React from 'react';
import Userreactchildren from './React-Children';

class usechildren extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <Userreactchildren>
                <div>one</div>
                <div>two</div>
                <div>three</div>
            </Userreactchildren>
        )
    }
}

export default usechildren;