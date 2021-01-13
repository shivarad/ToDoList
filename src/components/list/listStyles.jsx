import styled from 'styled-components';

export const ListContainer=styled.div`
display: flex;
flex-direction: column;

`;
export const Wrapper=styled.div`
display: flex;
flex-direction: column;
width: 40vw;
height: fit-content;
justify-content: center;
position: relative;
border-radius: 10px;
box-shadow:  0px 35px 50px -15px rgba(194,195,214,0.5);
margin: 0 auto;
top:-20px;
@media screen and (max-width: 375px) {
    width: 90vw;
  }
`;