import styled from 'styled-components';


export const TextBoxContainer=styled.div`
max-width:500px;
padding: 0;
margin:0;
align-items:center;
position:relative;
top:-20px;
@media screen and (max-width: 375px) {
    width: 90vw;
  }
`;

export const TextInput=styled.input.attrs({placeholder:'Create a todo...',type:"text"})`
    width: 100%;
    height: 50px;
    border-radius: 5px;
    border: none;
    outline: none !important;  
    font-family: 'Josefin Sans';
    font-size: 18px;
    padding-left:45px;
    background-color:${props => props.theme.ItemBackground};
    color: ${props=> props.theme.ItemTextColor};

`;

export const Circle=styled.input.attrs({type:"radio" ,disabled:'disabled'})`
-webkit-appearance: none;
-moz-appearance: none;
appearance: none;
background-clip: content-box;
border: 1px solid ${props => props.theme.BorderColor};
background-color:${props => props.theme.ItemBackground};
border-radius: 50%;
height: 20px;
width: 20px;
position:relative;
top:40px;
left:10px;
`;