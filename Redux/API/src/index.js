import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './store/index';
import App from './components/App';


ReactDOM.render(
    <div>
        {/* Provider封装你的程序,子组件则可以调用store的数据 */}
        <Provider store={store}>
            <App/>
        </Provider>
    </div>
    , document.getElementById('root'));

