import React from "react";
import {
    //<BrowserRouter>使用常规的URL路径
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

export default function RouterApp(){
    return (
        <Router>
            <div>
                <div>
                    <h1>路由选择</h1>
                    <Link to='/'>Home</Link>
                    <br/>
                    <Link to='/about'>About</Link>
                    <br/>
                    <Link to='/topics'>topics</Link>
                </div>

                {/* 当<Switch>被渲染，它会搜索其children <Route>内容找到一个其path当前的URL匹配。
            当找到一个对象时，它将渲染该对象，<Route>而忽略所有其他对象。
            我们要将后续的路由放在前面否则不会展示 */}
                <Switch>
                    <Route path="/about">
                        <About/>
                    </Route>
                    <Route path="/topics">
                        <Topics/>
                    </Route>
                    <Route path="/">
                        <Home/>
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

function Home(){
    return (
        <div>
            <h2>根路由</h2>
        </div>
    )
}

function About(){
    return (
        <div>
            <h2>其他路由</h2>
        </div>
    )
}

function Topics(){
    //useRouteMatch允许您在不呈现<Route>组件的情况下访问match属性。它像路由一样匹配URL
    let match = useRouteMatch();

    return (
        <div>
            <h2>嵌套路由</h2>
            <div>
                {/* url会建立相对路由 */}
                <Link to={`${match.url}/components`}>components</Link>
                <br/>
                <Link to={`${match.url}/other`}>other</Link>
            </div>

            <Switch>
                {/* path建立相对于父组件的路径 */}
                <Route path={`${match.path}/:topicId`}>
                    <Topic/>
                </Route>
                <Route path={match.path}>
                    <h3>Please select a topic.</h3>
                </Route>
            </Switch>
        </div>
    )
}

function Topic(){
    //useParams返回URL参数的键/值对的对象。 使用它来访问当前<Route>的match.params。
    let {topicId} = useParams();
    return (
    <h3>Requested topic ID:{topicId}</h3>
    )
}