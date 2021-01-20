import styled,{ keyframes } from 'styled-components';

const Loading=keyframes`
 0% { height: 20px; transform: scaleY(); background-color: #9B59B6; }
50% { height: 20px; transform: scaleY(3.4); background-color: #3498D6; }
100% { height: 20px; transform: scaleY(); background-color: #9B59B6; }
` 

export const Bars=styled.span`
width: 24px;
height: 20px;
position: absolute;
bottom: 0;
left: 0;
display: block;
background-color: #9B5986;
 animation: ${Loading} 3s infinite ease-in-out;
`;
export const Container=styled.div`
    top:20vh;
    width: 164px;
    height: 120px;
    position: relative;
    margin: 0 auto;
    & ${Bars}:nth-child(1){left: 0px; animation-delay: 0s;}
    & ${Bars}:nth-child(2){left: 30px; animation-delay: .2s;}
    & ${Bars}:nth-child(3){left: 60px; animation-delay: .4s;}
    & ${Bars}:nth-child(4){left: 90px; animation-delay: .6s;}
    & ${Bars}:nth-child(5){left: 120px; animation-delay: .8s;}
`;



