import styled from 'styled-components';
import style from '../../assets/global-style';

export const List = styled.div`
    display:flex;
    height:35px;
    >span{
        flex: 0 0 auto;
        padding:4px;
    }
    .selected{
        border: 1px solid ${style["theme-color"]};
        color:${style["theme-color"]};
        border-radius:8px;
    }
`


export const ListItem = styled.div`
    flex: 0 0 auto;
    > span{
        display:inline-block;
        padding:4px 6px;
    }
`