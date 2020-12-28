import sunIcon from "../../asset/images/icon-sun.svg";
import moonIcon from "../../asset/images/icon-moon.svg";
import {ModeBtnContainer} from './modeButtonStyles'
const ModeBtn=({isDarkMode,ChangeMode})=>(


    <ModeBtnContainer  onClick={ChangeMode} className='mode-btn'><img src={`${isDarkMode? sunIcon:moonIcon}`} alt="mode icon"/></ModeBtnContainer>

)

export default ModeBtn;