import styled from 'styled-components';

export const Smid = styled.div`
    flex-grow:1;
    display:flex;
    justify-content:center;
    align-items:center;
    >div:first-of-type{
        display:flex;
        justify-content:center;
        align-items:center;
        >img{
            width:70%;
            height:100%;
            border-radius:50%;
        }
    }
`