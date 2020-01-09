import {createStore} from 'redux';
import rootReducer from '../reducers/index';

//reducers produce the state of your application.
//reducers产出你的应用的state
const store = createStore(rootReducer);

export default store;