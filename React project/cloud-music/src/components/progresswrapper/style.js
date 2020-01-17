import styled from 'styled-components';

export const Progress = styled.div`
    display:flex;
    justify-content:center;
`

export const Slider = styled.div`
    border-radius: 10px;
    background: #E0E0E0;
    position: relative;
    background: linear-gradient(left top, #E0E0E0, #EEEEEE);
    width: 70%;
    height: 10px;
    margin: 5px;
`

export const Thumb = styled.div`
    width: 15px;
    height: 15px;
    border-radius: 50%;
    position: relative;
    left: 0px;
    top: -2.5px;
    opacity: 0.5;
    background: #00ff6a;
    cursor: pointer;
`