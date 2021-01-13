import styled from 'styled-components';

export const TabBarContainer=styled.div`
    padding:0 10px ;
    height: 8vh;
    background-color:${props => props.theme.ItemBackground};
    font-family: 'Josefin Sans';
    font-size: 18px;
    display: flex;
    justify-content: space-between;
    border-radius: 0 0 10px 10px;
    @media screen and (max-width: 375px) {
        flex-wrap:wrap;
        padding:15px 0;
        
    }

    
`;
 export const LeftTabBtn=styled.button`
outline:none;
border:none;
background: none;
color:hsl(236, 9%, 61%);
font-weight: 700;
@media screen and (max-width: 375px) {
    font-size: 12px;
    padding: 0 10px;
}
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
@media screen and (max-width: 375px) {
    padding:0 10px ;
    height: 8vh;
    width:100vw;
    border-radius: 10px;
    box-shadow:  0px 35px 50px -15px rgba(194,195,214,0.5);
    background-color:${props => props.theme.ItemBackground};
    margin-top:35px;
    font-size: 18px;
    order:4;
  }
`;