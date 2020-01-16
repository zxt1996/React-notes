import React,{useReducer} from 'react';
import { GlobalStyle } from  './style';
// import routes from './routes/index';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
//renderRoutes 读取路由配置转化为 Route 标签
// import { renderRoutes } from 'react-router-config';
import 'antd/dist/antd.css';
import Home from './application/Home';
import Album from './application/Album';
import PlayScreen from './application/Playscreen';
import Playbottom from './components/playbottom';
import {playlistdetail} from './store/index';
import {Playcontent} from './store/context';
import {nowplaysongreducer} from './store/reducer';

function App(){
    const [state,dispatch] = useReducer(nowplaysongreducer,playlistdetail);

    return (
        <BrowserRouter>
            <Playcontent.Provider value={{state,dispatch}}>
                <GlobalStyle/>
                <Playbottom/>
                {/* {renderRoutes(routes)} */}
                <Switch>
                    <Route path="/recommend/:id" component={Album}/>
                    <Route path="/playscreen" component={PlayScreen}/>
                    {/* path="/"的需要放在最下面才能正常加载 */}
                    <Route path="/" component={Home}/>
                </Switch>
            </Playcontent.Provider>
        </BrowserRouter>
    );
}

export default App;