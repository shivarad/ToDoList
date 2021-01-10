import styled from 'styled-components';

export const TabBarContainer=styled.div`
padding:0 10px ;
    height: 40px;
    background-color:${props => props.theme.ItemBackground};
    font-family: 'Josefin Sans';
    font-size: 18px;
    display: flex;
    justify-content: space-between;
    
`;
 export const LeftTabBtn=styled.button`
outline:none;
border:none;
background: none;
color:hsl(236, 9%, 61%);
font-weight: 700;
`
export const RightTabBtn=styled(LeftTabBtn)`
cursor:pointer;
&:hover{
    color: hsl(220, 98%, 61%);
}
`;
export const MiddleTabBtn=styled(RightTabBtn)`
&.active{
    color: hsl(220, 98%, 61%);
}
`;


export const MiddleBtnsContainer=styled.div`
display: flex;
justify-content: center;
`;