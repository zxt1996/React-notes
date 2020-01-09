import React from 'react';
import {connect} from 'react-redux';

const mapDispatchToProps = dispatch => {
    return {
        decrement: () => dispatch({ type: "DEC_NUMBER" }),
        addnumber: () => dispatch({ type: "ADD_NUMBER" })
    }
}

const Counter = props => {
    return (
      <div>
        <button onClick={props.decrement}>-</button>
        <button onClick={props.addnumber}>+</button>
      </div>
    );
  }

  const Num = connect(
    null,
    mapDispatchToProps
  )(Counter);
  export default Num;