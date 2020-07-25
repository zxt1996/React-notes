import React from 'react';

interface IHello {
    message?: string
}

const Hello: React.FC<IHello> = (paramse) => {
    return (
        <div>
            {paramse.message}
        </div>
    )
}

// React.FC可以设置默认值
Hello.defaultProps = {
    message: "jojo"
}

export default Hello;