# getInitialProps
> 因为static getInitialProps()这个生命周期是可以在服务端运行的，当页面第一次加载时，服务器收到请求，getInitialProps()会执行，getInitialProps()返回的数据，会序列化后添加到 window.\_\_NEXT_DATA__.props上，写入HTML源码里，类似于。这样服务端的getInitialProps()就实现了把数据传送给了客户端。当我们通过Next.js的路由Link来进行页面跳转的时候，客户端就会从window.__NEXT_DATA__里获取数据渲染页面，就无需重新获取数据

> getInitialProps receives a context object with the following properties:
> - **pathname**: path section of URL
> - **query**: query string section of URL parsed as an object
> - **asPath**: string of the actual path(including the query) shows in the browser
> - **req**: HTTP request object (server only)
> - **res**: HTTP response object (server only)
> - **jsonPageRes**: Fetch Response object (client only)
> - **err**: Error object if any error is encountered during the rendering

```
import fetch from 'isomorphic-unfetch';

function Homepage({stars}){
return <div>Next stars:{stars}</div>
}

Homepage.getInitialProps = async () => {
    const res = await fetch(`https://api.github.com/repos/zeit/next.js`);
    const json = await res.json();
    return {
        stars:json.stargazers_count
    }
}

export default Homepage;
```
