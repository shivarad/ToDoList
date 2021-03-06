import LightBg from '../images/bg-desktop-light.jpg';
import DarkBg from '../images/bg-desktop-dark.jpg';
import sunIcon from "../images/icon-sun.svg";
import moonIcon from '../images/icon-moon.svg';
import MobileLightBg from '../images/bg-mobile-light.jpg';
import MobileDarkBg from '../images/bg-mobile-dark.jpg';


export const LightTheme = {
    BodyColor: 'hsl(0, 0%, 98%)',
    ItemBackground:'white',
    DeletedTextColor: 'hsl(236, 33%, 92%)',
    BorderColor: 'hsl(233, 11%, 84%)',
    TextBoxTextColor: 'hsl(236, 9%, 61%)',
    ItemTextColor: 'hsl(235, 19%, 35%)',
    BgImg:LightBg,
    BgImgMobile:MobileLightBg,
    ModeIcon:moonIcon,
}
  
  export const DarkTheme = {
    BodyColor: 'hsl(235, 21%, 11%)',
    ItemBackground: 'hsl(235, 24%, 19%)', 
    DeletedTextColor: 'hsl(234, 11%, 52%)',
    ItemTextColor: 'hsl(234, 39%, 85%)',
    CheckBoxHover : 'hsl(236, 33%, 92%)', 
    BorderColor: 'hsl(233, 14%, 35%)',
    BgImg:DarkBg,
    BgImgMobile:MobileDarkBg,
    ModeIcon:sunIcon,

  }
  