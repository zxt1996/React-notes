import styled from 'styled-components';

export const Singerlist = styled.div`
    margin-top: 80px;
    overflow:scroll;
`

export const Singeritem = styled.div`
    display:flex;
    overflow:scroll;
    align-items:center;
    margin-bottom:10px;
    padding-bottom:10px;
    padding-left:10px;
    border-bottom:1px solid gray;
    height: 90px;
    >div:first-of-type{
        width:20%;
        margin-right:20px;
        >img{
            width:100%;
            height: 100%;
            border-radius:10px;
        }
    }
`