import styled from 'styled-components';

export const SLContent = styled.div`
    >div{
        position: relative;
        .intbackimg{
            filter:blur(10px);
            height:220px;
            >img{
                width:100%;
                height:100%;
            }
        }
        .introduction{
            position:absolute;
            top:15%;
            display:flex;
            justify-content:space-around;
            z-index:999;
            color: white; 
            ext-shadow: black 0.1em 0.1em 0.2em;
            .intimg{
                width:35%;
                height:125px;
                >img{
                    width:100%;
                    height:100%;
                }
            }
            .intcreator{
                width:55%;
                height:100px;
                .intcreatorhead{
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }
                .intcreatormid{
                    display:flex;
                    align-items:center;
                    margin-top:5px;
                    margin-bottom:5px;
                    >div:first-of-type{
                        width:12%;
                        height:12%;
                        margin-right:5px;
                        >img{
                            width:100%;
                            height:100%;
                            border-radius:50%;
                        }
                    }
                }
                .intcreatorfoot{
                    margin-top:20px;
                    >p{
                        overflow : hidden;
                        text-overflow: ellipsis;
                        display: -webkit-box;
                        -webkit-line-clamp: 2;
                        -webkit-box-orient: vertical;
                        font-size:12px;
                    }
                }
            }
        }
    }
`