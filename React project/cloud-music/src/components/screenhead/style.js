import styled from 'styled-components';

export const Shead = styled.div`
    display:flex;
    align-items:center;
    padding:5px 10px;
    >div:first-of-type{
        margin-right:20px;
        >i{
            font-size:22px;
        }
    }
    >div:last-of-type{
        display:flex;
        flex-direction:column;
    }
`