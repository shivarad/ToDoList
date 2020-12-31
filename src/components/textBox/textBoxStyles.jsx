import style from 'styled-components';
import {LightTheme,DarkTheme} from '../../asset/styles/theme';


export const TextBoxContainer=style.span`
width: 50vw;
height: fit-content;
padding: 0;
margin-top: -30px;

`;

export const TextInput=style.input.attrs({placeholder:'Create a todo...',type:"text"})`
    width: 100%;
    height: 40px;
    border-radius: 5px;
    border: none;
    box-sizing: border-box;
    outline: none !important;  
    font-family: 'Josefin Sans';
    font-size: 18px;
    padding-left:45px;
    background-color:${({ darkMode }) => darkMode?DarkTheme.ItemBackground:LightTheme.ItemBackground};
    color: ${({ darkMode }) => darkMode?DarkTheme.ItemTextColor:LightTheme.ItemTextColor};
`;

export const Circle=style.input.attrs({type:"radio" ,disabled:'disabled'})`
-webkit-appearance: none;
-moz-appearance: none;
appearance: none;
background-clip: content-box;
border: 1px solid ${({ darkMode }) => darkMode?DarkTheme.BorderColor:LightTheme.BorderColor};
background-color:${({ darkMode }) => darkMode?DarkTheme.ItemBackground:LightTheme.ItemBackground};
border-radius: 50%;
height: 20px;
width: 20px;
position: relative;
left:10px;
top:35px;
`;