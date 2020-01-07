import React from 'react';

class Map extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name:'jojo'
        };
    }

    render(){
        return (
            <div>
    <h1>{this.state.name}</h1>
            </div>
        )
    }
}

export default Map;