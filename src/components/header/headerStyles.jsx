import styled from 'styled-components';

export const HeaderContainer =styled.div`
height:37vh;
background-image:${props=>`url(${props.theme.BgImg})`};
background-size:100% 100%;
@media screen and (max-width: 375px) {
  background-image:${props=>`url(${props.theme.BgImgMobile})`};

}
`;

export const CenterWrapper=styled.div`
     max-width: 500px;
     margin:0 auto;
     @media screen and (max-width: 375px) {
        width: 90vw;
      }
`;

export const ModeContainer=styled.div`
height: fit-content;
display: flex;
padding-top:4vh;
justify-content: space-between;
`;

export const HeaderTxt=styled.h2`
    color: white;
    font-family: 'Josefin Sans';
    font-weight: 700;
    font-size:40px;

`;