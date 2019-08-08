# React Context API
The React Context API 提供了一种通过组件树传递数据的方法，而不必通过 props 属性一层层的传递。在 React 中，数据通常会作为一个属性从父组件传递到子组件。  
使用最新的 React Context API 需要三个关键步骤：

1. 将初始状态传递给 React.createContext。这个方法会返回一个带有 Provider 和 Consumer 的对象。
2. 使用 Provider 组件包裹在组件树的最外层，并接收一个 value 属性。value 属性可以是任何值。
3. 使用 Consumer 组件，在组件树中 Provider 组件内部的任何地方都能获取到状态的子集。
