import React from 'react';
import ModeBtn from '../modeButton/modeBtn';
import TextBox from '../textBox/txtBox';
import './header.css';

const Header=({isDarkMode,ChangeMode})=>(

    
    <div className={`${isDarkMode? 'dark-hdr' :''} header` } >
       <div className='wrapper'>
         <div className='mode-container'>
            <h2 className='header-txt'>T O D O</h2>
            <ModeBtn isDarkMode={isDarkMode} ChangeMode={ChangeMode}/>
         </div>
         <TextBox isDarkMode={isDarkMode}/>
       </div>
    </div>
       

)

export default Header;