import {useContext} from 'react';
import {ModeBtnContainer} from './modeButtonStyles';
import {ThemeContext} from '../../providers/theme/theme-provider';
import {LightTheme,DarkTheme} from '../../asset/styles/theme';

const ModeBtn=({...props})=>{
    const {darkMode}=useContext(ThemeContext);
    
return(
        <ModeBtnContainer  {...props} >
            <img src={darkMode? DarkTheme.ModeIcon:LightTheme.ModeIcon} alt="mode icon"/>
        </ModeBtnContainer>
)}

export default ModeBtn;