import {ModeBtnContainer,ModeIcon} from './modeButtonStyles';

const ModeBtn=({...props})=>{
return(
        <ModeBtnContainer  {...props} >
            <ModeIcon alt='mode-icon'/>
        </ModeBtnContainer>
)}

export default ModeBtn;