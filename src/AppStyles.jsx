import styled from 'styled-components';
 // background-image:${props=>
    // props.darkMode? "url('asset/images/bg-desktop-dark.jpg')": "url('asset/images/bg-desktop-light.jpg')"};

export const Header=styled.div`
    display: flex;
    height:33vh;
    justify-content: center;
    background-image: url("asset/images/bg-desktop-dark.jpg");
    `;
export const Container=styled.div`
width: 50vw;
  height: fit-content;
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
`;

export const HeaderTxt=styled.h2`
color: white;
  font-family: 'Josefin Sans';
  font-weight: 700;
`;

export const ModeBtn=styled.button`
background-color: transparent;
border: none;
outline: none !important;
`;