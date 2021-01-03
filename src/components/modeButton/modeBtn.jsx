import {ModeBtnContainer,ModeIcon} from './modeButtonStyles';
import {useContext} from 'react';
import {ThemeContext} from '../../providers/theme/theme-provider';

const ModeBtn=({...props})=>{
    const {theme}=useContext(ThemeContext);
return(
        <ModeBtnContainer  {...props} >
            <ModeIcon src={theme.ModeIcon}/>
        </ModeBtnContainer>
)}

export default ModeBtn;