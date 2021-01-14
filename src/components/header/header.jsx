import {useContext}from 'react';
import ModeBtn from '../modeButton/modeBtn';
import TextBox from '../textBox/txtBox';
import {HeaderContainer,CenterWrapper,ModeContainer,HeaderTxt} from './headerStyles';
import {ThemeContext} from '../../providers/theme/theme-provider';

const Header=()=>{
   const {toggleTheme}=useContext(ThemeContext);
   return(
   <HeaderContainer >
       <CenterWrapper>
         <ModeContainer>
            <HeaderTxt>T O D O</HeaderTxt>
            <ModeBtn name='toggle-theme-button'onClick={toggleTheme}/>
         </ModeContainer>
         <TextBox />
       </CenterWrapper>
   </HeaderContainer>

)}

export default Header;