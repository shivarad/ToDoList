import React from 'react';
import ModeBtn from '../modeButton/modeBtn';
import TextBox from '../textBox/txtBox';
import {HeaderContainer,CenterWrapper,ModeContainer,HeaderTxt} from './headerStyles';

const Header=({isDarkMode,ChangeMode})=>(

    
   //  <div className={`${isDarkMode? 'dark-hdr' :''} header` } >
   <HeaderContainer>
       <CenterWrapper>
         <ModeContainer>
            <HeaderTxt>T O D O</HeaderTxt>
            <ModeBtn isDarkMode={isDarkMode} ChangeMode={ChangeMode}/>
         </ModeContainer>
         <TextBox isDarkMode={isDarkMode}/>
       </CenterWrapper>
   </HeaderContainer>
   //  </div>
       

)

export default Header;