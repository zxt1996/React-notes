import React from 'react';
import { GlobalStyle } from  './style';
import routes from './routes/index';
import {BrowserRouter} from 'react-router-dom';
//renderRoutes 读取路由配置转化为 Route 标签
import { renderRoutes } from 'react-router-config';
import 'antd/dist/antd.css';

function App(){
    return (
        <BrowserRouter>
            <GlobalStyle/>
            {renderRoutes(routes)}
        </BrowserRouter>
    );
}

export default App;