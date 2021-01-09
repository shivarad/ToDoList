import styled from 'styled-components';

export const RemoveBtn=styled.button`
background: none;
outline: none;
border: none;
padding: 15px;
font-size: 25px;
font:  normal 1em/1 Arial, sans-serif;
cursor: pointer;
display: none;
color:${props => props.theme.BorderColor};
`;

export const ItemContainer=styled.div`
height: 40px;
background-color:${props =>props.theme.ItemBackground};
border-bottom: 1px solid ${props => props.theme.BorderColor};
font-family: 'Josefin Sans';
font-size: 18px;
display: flex;
justify-content: space-between;
color: ${props => props.theme.ItemTextColor};
    &:first-child{
      border-radius: 5px 5px 0 0 }
    &:hover ${RemoveBtn} {
        display: block;
    }
`;

export const ItemLabel=styled.label`
cursor: pointer;
border:none;
&.done{
    text-decoration:line-through;
}
`;

export const CircularCheckBox=styled.input.attrs({type:'checkbox'})`
-webkit-appearance: none;
-moz-appearance: none;
appearance: none;
outline: none;
border: 1px solid ${props => props.theme.BorderColor};
background-color:${props => props.theme.ItemBackground};
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
      
`;



export const SVGCheckmark=styled.svg`
fill:${props => props.theme.ItemBackground};
position: relative;
left: -21px;
top:3px;
`;