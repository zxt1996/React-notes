import React,{FunctionComponent} from 'react';

type CardProps = {
    title:string,
    paragraph:string
}

//FunctionComponent 接口定义函数组件
//对于函数组件，需要使用FunctionComponent的泛型来获取children
//FC是FunctionComponent的简写
//这个类型定义了默认的 props(如 children)以及一些静态属性(如 defaultProps)
export const Card:FunctionComponent<CardProps> = ({title,paragraph,children}) => (
    <div>
        <h2>
            {title}
        </h2>
        <p>
            {paragraph}
        </p>
        {children}
    </div>
)
