import {useContext}from 'react';
import ModeBtn from '../modeButton/modeBtn';
import {ModeContainer,HeaderTxt} from './headerStyles';
import {ThemeContext} from '../../providers/theme/theme-provider';

const Header=()=>{
   const {toggleTheme}=useContext(ThemeContext);
   return(
   
         <ModeContainer>
            <HeaderTxt>T O D O</HeaderTxt>
            <ModeBtn name='toggle-theme-button'onClick={toggleTheme}/>
         </ModeContainer>
      

)}

export default Header;