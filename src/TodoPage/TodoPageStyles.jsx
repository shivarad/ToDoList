import styled from 'styled-components';

export const Container=styled.div`
background-color: ${props=>props.theme.BodyColor};
height:100vh;
}
`;

export const BackGroundImage=styled.div`
height:37vh;
background-image:${props=>`url(${props.theme.BgImg})`};
@media screen and (max-width: 375px) {
background-image:${props=>`url(${props.theme.BgImgMobile})`};
z-index:-1;

`;


export const CenterWrapper=styled.div`
     max-width: 500px;
     margin:0 auto;
     padding:10px;
     @media screen and (max-width: 375px) {
        width: 90vw;
      }
`;

export const InfoTxt=styled.div`
 color:  hsl(236, 9%, 61%);
 margin: 0 auto;
 width: 50%;
 font-size:12px;
 margin-top: 30px;
 text-align: center;
 @media screen and (max-width: 375px) {
  margin-top: 120px;

 }
 `;