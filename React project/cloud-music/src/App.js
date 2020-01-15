import React from 'react';
import { GlobalStyle } from  './style';
// import routes from './routes/index';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
//renderRoutes 读取路由配置转化为 Route 标签
// import { renderRoutes } from 'react-router-config';
import 'antd/dist/antd.css';
import Home from './application/Home';
import Album from './application/Album';

function App(){
    return (
        <BrowserRouter>
            <GlobalStyle/>
            {/* {renderRoutes(routes)} */}
            <Switch>
                <Route path="/recommend/:id" component={Album}/>
                {/* path="/"的需要放在最下面才能正常加载 */}
                <Route path="/" component={Home}/>
            </Switch>
        </BrowserRouter>
    );
}

export default App;