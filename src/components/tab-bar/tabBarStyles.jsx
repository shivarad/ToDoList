import style from 'styled-components';

export const TabBarContainer=style.div`
padding:0 10px ;
    height: 40px;
    background-color:${props => props.theme.ItemBackground};
    font-family: 'Josefin Sans';
    font-size: 18px;
    display: flex;
    justify-content: space-between;
    
`;

export const TabBtn=style.button`
outline:none;
border:none;
background: none;
color:hsl(236, 9%, 61%);
font-weight: 700;
&:hover{
    color: hsl(220, 98%, 61%);
}
`;

export const MiddleBtnsContainer=style.div`
display: flex;
justify-content: center;
`;