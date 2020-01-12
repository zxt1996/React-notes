import React from 'react';
import {Redirect} from 'react-router-dom';
import Home from '../application/Home';
import Recommend from '../application/Recommend';
import Singers from '../application/Singers';
import Rank from '../application/Rank';

export default [
    {
        path:"/",
        component:Home,
        routes:[
            {
                path:"/",
                // 如果为true，则仅在位置完全匹配时才应用活动的类/样式。
                exact:true,
                render:() => (
                    <Redirect to={"/recommend"}/>
                )
            },
            {
                path:"/recommend",
                component:Recommend
            },
            {
                path:"/singers",
                component:Singers
            },
            {
                path:"/rank",
                component:Rank
            }
        ]
    }
]