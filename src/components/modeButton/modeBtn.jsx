import sunIcon from "../../asset/images/icon-sun.svg";
import moonIcon from "../../asset/images/icon-moon.svg";
import './modeBtn.css'
const ModeBtn=({isDarkMode,ChangeMode})=>(


    <button  onClick={ChangeMode} className='mode-btn'><img src={`${isDarkMode? sunIcon:moonIcon}`} alt="mode icon"/></button>

)

export default ModeBtn;