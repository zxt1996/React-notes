import React, { Suspense } from 'react';
//React.lazy 函数能让你像渲染常规组件一样处理动态引入（的组件）
//React.lazy 接受一个函数，这个函数需要动态调用 import()。
//它必须返回一个 Promise，该 Promise 需要 resolve 一个 defalut export 的 React 组件。
const OtherComponent = React.lazy(()=>import('./lazyloading'));
//React.Suspense
//设置您在等待组件加载时希望呈现的任何React元素
function MyComponent(){
    return (
        <div>
            <Suspense fallback={<div>Loading...</div>}>
                <OtherComponent/>
            </Suspense>
        </div>
    )
}

export default MyComponent;