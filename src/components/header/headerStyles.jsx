import styled from 'styled-components';

export const HeaderContainer =styled.div`
display: flex;
background-image:${props=>`url(${props.theme.BgImg})`};
height:38vh ;
justify-content: space-around;
`;

export const CenterWrapper=styled.div`
     display: flex;
     flex-direction: column;
     width: 40vw;
     justify-content: center;
     @media screen and (max-width: 375px) {
        width: 90vw;
      }
`;

export const ModeContainer=styled.div`
width: 40vw;
height: fit-content;
display: flex;
margin-top:2%;
justify-content: space-between;
@media screen and (max-width: 375px) {
    width: 90vw;
  }
`;

export const HeaderTxt=styled.h2`
color: white;
    font-family: 'Josefin Sans';
    font-weight: 700;
`;