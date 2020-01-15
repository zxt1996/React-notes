import styled from 'styled-components';

export const List = styled.div`

`

export const Listitem = styled.div`
    display:flex;
    justify-content:space-around;
    align-items:center;
    background-color:white;
    padding: 5px 0;
    >div{
        display:flex;
        align-items:center;
    }
    >div:first-of-type{
        width:70%;
        >div:first-of-type{
            width:30px;
        }
        >div:last-of-type{
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
    }
    >div:last-of-type{
        width:10%;
    }
`