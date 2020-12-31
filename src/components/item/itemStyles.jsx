import style from 'styled-components';
import {LightTheme,DarkTheme} from '../../asset/styles/theme';

export const RemoveBtn=style.button`
background: none;
outline: none;
border: none;
padding: 15px;
font-size: 25px;
font:  normal 1em/1 Arial, sans-serif;
cursor: pointer;
display: none;
color:${({ darkMode }) => darkMode?DarkTheme.BorderColor:LightTheme.BorderColor};
`;

export const ItemContainer=style.div`
height: 40px;
background-color:${({ darkMode }) => darkMode?DarkTheme.ItemBackground:LightTheme.ItemBackground};
border-bottom: 1px solid ${({ darkMode }) => darkMode?DarkTheme.BorderColor:LightTheme.BorderColor};
font-family: 'Josefin Sans';
font-size: 18px;
display: flex;
justify-content: space-between;
color: ${({ darkMode }) => darkMode?DarkTheme.ItemTextColor:LightTheme.ItemTextColor};
    &:first-child{
      border-radius: 5px 5px 0 0 }
    &:hover ${RemoveBtn} {
        display: block;
    }
`;

export const ItemLabel=style.label`
cursor: pointer;
border:none;
`;

export const CircularCheckBox=style.input.attrs({type:'checkbox'})`
-webkit-appearance: none;
-moz-appearance: none;
appearance: none;
outline: none;
border: 1px solid ${({ darkMode }) => darkMode?DarkTheme.BorderColor:LightTheme.BorderColor};
background-color:${({ darkMode }) => darkMode?DarkTheme.ItemBackground:LightTheme.ItemBackground};
border-radius: 50%;
height: 20px;
width: 20px;
position: relative;
top:20%;
cursor: pointer;
margin-left: 15px;
        &:checked {
            background-image: linear-gradient(135deg,hsl(192, 100%, 67%) , hsl(280, 87%, 65%));
          
        }
    //    &:checked+label{
    //     text-decoration: line-through;
    //     color:${({ darkMode }) => darkMode?DarkTheme.DeletedTextColor:LightTheme.DeletedTextColor};
    //    }
`;



export const SVGCheckmark=style.svg`
fill:${({ darkMode }) => darkMode?DarkTheme.ItemBackground:LightTheme.ItemBackground};
position: relative;
left: -21px;
top:3px;
`;