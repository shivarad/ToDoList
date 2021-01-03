
 import style from 'styled-components';

 export const BodyContainer=style.div`
 background-color: ${props=>props.theme.BodyColor};
 height: 60vh; 
 `;

 export const InfoTxt=style.div`
 color:  hsl(236, 9%, 61%);
 margin: 0 auto;
 width: 50%;
 font-size:12px;
 padding-top: 30px;
 text-align: center;
 `;