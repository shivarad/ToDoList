import styled from 'styled-components';

export const HeaderContainer =styled.div`

display: flex;
background-image:${props=>`url(${props.theme.BgImg})`};
height:40vh ;
justify-content: center;

`;

export const CenterWrapper=styled.div`
     display: flex;
     flex-direction: column;
     width: 50vw;
     justify-content: center;
`;

export const ModeContainer=styled.div`
width: 50vw;
height: fit-content;
display: flex;
justify-content: space-between;
`;

export const HeaderTxt=styled.h2`
color: white;
    font-family: 'Josefin Sans';
    font-weight: 700;
`;