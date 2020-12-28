import style from 'styled-components';

export const TabBarContainer=style.div`
padding:0 10px ;
    height: 40px;
    background-color:white;
    border-bottom: 1px solid #e7e6e7;
    font-family: 'Josefin Sans';
    font-size: 18px;
    display: flex;
    justify-content: space-between;
    &:hover{
        color: hsl(220, 98%, 61%);
    }
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