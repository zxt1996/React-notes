## Components
```
import React from 'react'

//written as a function declaration
//返回一个节点
function Heading():React.ReactNode {
    return <h1>My Website Heading</h1>
}

// Written as a function expression
//返回一个函数
const OtherHeading: React.FC = () => <h1>My Website Heading</h1>
```

## Props
```
import React from 'react'

interface Props {
  name: string;
  color: string;
}

type OtherProps = {
  name: string;
  color: string;
}

// Notice here we're using the function declaration with the interface Props
function Heading({ name, color }: Props): React.ReactNode {
  return <h1>My Website Heading</h1>
}

// Notice here we're using the function expression with the type OtherProps
const OtherHeading: React.FC<OtherProps> = ({ name, color }) =>
  <h1>My Website Heading</h1>
```

```
import React from 'react'

type Props = {
  /** color to use for the background */
  color?: string;
  /** standard children prop: accepts any valid React Node */
  children: React.ReactNode;
  /** callback function passed to the onClick handler*/
  onClick: ()  => void;
}

const Button: React.FC<Props> = ({ children, color = 'tomato', onClick }) => {
   return <button style={{ backgroundColor: color }} onClick={onClick}>{children}</button>
}
```

## Hooks

```
type User = {
  email: string;
  id: string;
}

// the generic is the < >
// the union is the User | null
// together, TypeScript knows, "Ah, user can be User or null".
const [user, setUser] = useState<User | null>(null);
```

```
type AppState = {};
type Action =
  | { type: "SET_ONE"; payload: string }
  | { type: "SET_TWO"; payload: number };

export function reducer(state: AppState, action: Action): AppState {
  switch (action.type) {
    case "SET_ONE":
      return {
        ...state,
        one: action.payload // `payload` is string
      };
    case "SET_TWO":
      return {
        ...state,
        two: action.payload // `payload` is number
      };
    default:
      return state;
  }
}
```

## 处理表单事件
```
import React from 'react'

const MyInput = () => {
  const [value, setValue] = React.useState('')

  // The event type is a "ChangeEvent"
  // We pass in "HTMLInputElement" to the input
  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value)
  }

  return <input value={value} onChange={onChange} id="input-example"/>
}
```

## Extending Component Props
```
import React from 'react';

type ButtonProps = {
    /** the background color of the button */
    color: string;
    /** the text to show inside the button */
    text: string;
}

type ContainerProps = ButtonProps & {
    /** the height of the container (value used with 'px') */
    height: number;
}

const Container: React.FC<ContainerProps> = ({ color, height, width, text }) => {
  return <div style={{ backgroundColor: color, height: `${height}px` }}>{text}</div>
}
```

```
import React from 'react';

interface ButtonProps {
    /** the background color of the button */
    color: string;
    /** the text to show inside the button */
    text: string;
}

interface ContainerProps extends ButtonProps {
    /** the height of the container (value used with 'px') */
    height: number;
}

const Container: React.FC<ContainerProps> = ({ color, height, width, text }) => {
  return <div style={{ backgroundColor: color, height: `${height}px` }}>{text}</div>
}
```