import React,{FunctionComponent} from 'react';

type CardProps = {
    title:string,
    paragraph:string
}

//FunctionComponent 接口定义函数组件
//对于函数组件，需要使用FunctionComponent的泛型来获取children
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
