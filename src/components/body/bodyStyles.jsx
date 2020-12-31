
 import style from 'styled-components';
import {LightTheme,DarkTheme} from '../../asset/styles/theme';

 export const BodyContainer=style.div`
 background-color: ${({ darkMode }) =>darkMode?DarkTheme.BodyColor:LightTheme.BodyColor};
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