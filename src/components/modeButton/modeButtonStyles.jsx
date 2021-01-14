import styled from 'styled-components';

export const ModeBtnContainer=styled.button`
    background-color: transparent;
    border: none;
    outline: none !important;
    
`;

 export const ModeIcon=styled.img.attrs(props => ({
    src: props.theme.ModeIcon}),{alt:"mode icon"})`
 `;
// export const ModeIcon=styled(${props=>props.theme.ModeIcon})``
