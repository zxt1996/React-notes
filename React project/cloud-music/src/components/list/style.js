import styled from 'styled-components';
import style from '../../assets/global-style';

export const ListRecommend = styled.div`
    margin-top:10px;
    .title{
        font-size:16px;
        font-weight:400;  
        border-left:2px solid ${style ["theme-color"]}; 
        padding-left:6px; 
    }
`

export const List = styled.div`
    display:flex;
    flex-wrap:wrap;
    justify-content:space-around;
    width:100%;
`

export const ListItem = styled.div`
    width:32%;
    .img_wrapper{
        position: relative;
        .imgdecorate{
            width: 100%;
            height: 120px;
            >img{
                width:100%;
                height: 100%;
            }
        }
        .playcount{
            position:absolute;
            top:0;
            right:3px;
            font-size:12px;
            /* 文字加上阴影，防止白色背景看不清 */
            color: white; text-shadow: black 0.1em 0.1em 0.2em
        }
    }
    .desc{
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        margin-top: 2px;
        padding: 5px 2px;
        height: 50px;
        text-align: left;
    }
`