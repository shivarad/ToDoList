import styled from 'styled-components';

export const ListContainer=styled.div`
display: flex;
flex-direction: column;

`;
export const Wrapper=styled.div`
display: flex;
flex-direction: column;
justify-content: center;
margin: 0 auto;
max-width:500px;
height: fit-content;
border-radius: 10px;
box-shadow:  0px 35px 50px -15px rgba(194,195,214,0.5);
@media screen and (max-width: 375px) {
    width: 90vw;
  }
`;