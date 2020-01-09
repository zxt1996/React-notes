export default one = (state=0,action)=>state;

export default two = (state=1,action)=>state;

export default three = (state=2,action)=>state;

import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    one,
    two,
    three
});

export default rootReducer;
