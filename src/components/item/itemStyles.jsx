import style from 'styled-components';

export const ItemContainer=style.div`
height: 40px;
background-color:white;
border-bottom: 1px solid #e7e6e7;
font-family: 'Josefin Sans';
font-size: 18px;
display: flex;
justify-content: space-between;
color: hsl(235, 19%, 35%);
    &:first-child{
      border-radius: 5px 5px 0 0 }
    &:hover .removeBtn{
        display: block;
    }
`;

export const ItemLabel=style.label`
cursor: pointer;
`;

export const CircularCheckBox=style.input.attrs({type:'checkbox'})`
-webkit-appearance: none;
-moz-appearance: none;
appearance: none;
outline: none;
border: 1px solid #e7e6e7 ;
background-color :white;
border-radius: 50%;
height: 20px;
width: 20px;
position: relative;
top:20%;
cursor: pointer;
margin-left: 15px;
text-decoration: line-through;
        &:checked{
            background-image: linear-gradient(135deg,hsl(192, 100%, 67%) , hsl(280, 87%, 65%));

        }
`;

export const RemoveBtn=style.button`
background: none;
outline: none;
border: none;
padding: 15px;
font-size: 25px;
font:  normal 1em/1 Arial, sans-serif;
cursor: pointer;
display: none;
`;

export const SVGCheckmark=style.svg`
fill: white;
position: relative;
left: -21px;
top:3px;
`;