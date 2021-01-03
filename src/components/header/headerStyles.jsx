import style from 'styled-components';

export const HeaderContainer =style.div`

display: flex;
background-image:${props=>`url(${props.theme.BgImg})`};
height:40vh ;
justify-content: center;

`;

export const CenterWrapper=style.div`
     display: flex;
     flex-direction: column;
     width: 50vw;
     justify-content: center;
`;

export const ModeContainer=style.div`
width: 50vw;
height: fit-content;
display: flex;
justify-content: space-between;
`;

export const HeaderTxt=style.h2`
color: white;
    font-family: 'Josefin Sans';
    font-weight: 700;
`;