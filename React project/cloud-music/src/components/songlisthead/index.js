import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom'

const Songhead = styled.div`
    display:flex;
    width:100%;
    justify-content:space-between;
    align-items:center;
    padding:3% 4%;
    >div{
        >span{
            font-size:15px;
            >i{
                font-size:22px;
            }
        }
        >span:first-of-type{
            margin-right:15px;
        }
    }
`
function Songlisthead(){
    let history = useHistory();
    return (
        <Songhead>
            <div>
                <span onClick={()=>history.goBack()}>
                    <i className="iconfont icon-LeftArrow"></i>
                </span>
                <span>歌单</span>
            </div>
            <div>
                <span><i className="iconfont icon-search"></i></span>
                <span><i className="iconfont icon-msnui-more"></i></span>
            </div>
        </Songhead>
    )
}

export default Songlisthead;

