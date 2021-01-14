
 import styled from 'styled-components';

 export const BodyContainer=styled.div`
 background-color: ${props=>props.theme.BodyColor};
 height: 63vh; 
 `;

 export const InfoTxt=styled.div`
 color:  hsl(236, 9%, 61%);
 margin: 0 auto;
 width: 50%;
 font-size:12px;
 margin-top: 30px;
 text-align: center;
 @media screen and (max-width: 375px) {
     margin-top:12vh;
 }
 `;