import React,{FunctionComponent,MouseEvent} from 'react';

type CardProps = {
    title:string,
    paragraph:string
}

//绑定事件类型为MouseEvent
//通过泛型将事件处理程序限制为特定的元素(HTMLButtonElement)
//通过"|"来使用联合类型(HTMLButtonElement按钮元素，HTMLAnchorElement超链接元素)
const handleClick = (event:MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    event.preventDefault();
    alert(event.currentTarget.tagName);
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
        <button onClick={handleClick}>点击事件绑定</button>
        {children}
    </div>
)
