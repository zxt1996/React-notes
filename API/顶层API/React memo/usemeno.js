import React, { Component } from 'react';
import User from './React-memo';

class Usermeno extends Component{
    state = {
        date:new Date(),
        user:{
            avatar:'jojo',
            name:'Rob'
        }
    };

    componentDidMount(){
        setInterval(()=>{
            this.setState({
                data:new Date()
            })
        },1000)
    }

    render(){
        const { date, user } = this.state;

    return (
      <div>
        <p>
          The time is <strong>{date.toLocaleTimeString()}</strong>
        </p>
        <User {...user} />
      </div>
    );
    }
}

export default Usermeno;