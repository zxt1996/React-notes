# hook模拟React的生命周期
- constructor:函数组件不需要构造函数。可以通过useState来初始化state
- componentDidMount:useEffect传入第二个参数为[]实现
- componentDidUpdate:useEffect传入第二个参数为空或者为值变动的数组
- componentWillUnmount:主要用来清除副作用。通过useEffect函数return一个函数来模拟
- shouldComponentUpdate:可以用React.memo包裹一个组件来对它的props进行浅比较。来模拟是否更新组件。