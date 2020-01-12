import React from 'react';
import { renderRoutes } from "react-router-config";
import {Top,
        Tab,
        TabItem,
        Homepage} from './style';
//利用NavLink组件进行路由跳转
import {NavLink} from 'react-router-dom';

function Home(props){
    const {route} = props;
    return (
        <Homepage>
            <Top>
                <span className="iconfont"><i className="iconfont icon-gengduo1"></i></span>
                <span>mysky</span>
                <span className="iconfont"><i className="iconfont icon-search"></i></span>
            </Top>
            <Tab>
                <NavLink to="/recommend" activeClassName="selected">
                    <TabItem><span>推荐</span></TabItem>
                </NavLink>
                <NavLink to="/singers" activeClassName="selected">
                    <TabItem><span>歌手</span></TabItem>
                </NavLink>
                <NavLink to="/rank" activeClassName="selected">
                    <TabItem><span>排行榜</span></TabItem>
                </NavLink>
            </Tab>
            {renderRoutes(route.routes)}
        </Homepage>
    )
}

//React.memo该组件在传入的值不变的前提下是不会被重新渲染
export default React.memo(Home);