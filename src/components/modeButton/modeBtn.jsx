import {ModeBtnContainer,ModeIcon} from './modeButtonStyles';

const ModeBtn=({...props})=>{
return(
        <ModeBtnContainer  {...props} >
            <ModeIcon />
        </ModeBtnContainer>
)}

export default ModeBtn;