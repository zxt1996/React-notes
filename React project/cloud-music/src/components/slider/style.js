import styled from 'styled-components';
import style from '../../assets/global-style';

export const SliderContent = styled.div`
    height: 160px;
    background: white;
    position: relative;
    .before {
        position: absolute;
        /* top: 0px;
        height: 100px; */
        top: -300px;
        height: 400px;
        width: 100%;
        background: ${style ["theme-color"]};
    }
    .ant-carousel{
        position: absolute;
        top: 0;
        left:4px;
        right:4px;
    }
    &.ant-carousel .slick-slide {
        text-align: center;
        height: 160px;
        line-height: 160px;
        background: #364d79;
        overflow: hidden;
    }

    .banner{
        height: 160px;
        width:100%;
        border-radius:10px;
        img{
            height: 100%;
            width:100%;
            border-radius:10px;
            z-index:999;
        }
    }
`