import styled from 'styled-components';

export const Play = styled.div`
    position:fixed;
    bottom:0;
    left: 0;
    right:0;
    z-index: 999;
    background-color:white;
    display:none;
    height: 80px;
    justify-content: space-between;
    align-items: center;
    padding:0 15px;
    >div:first-of-type{
        display:flex;
        width:350px;
        >div:first-of-type{
            height: 60px;
            width:20%;
            margin-right:5px;
            >img{
                width:100%;
                height: 100%;
                border-radius:50%;
            }
        }
        >div:last-of-type{
            >p{
                width:150px;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
        }
    }
    >div:last-of-type{

        >span:first-of-type{
            margin-right:10px;
        }
    }
`