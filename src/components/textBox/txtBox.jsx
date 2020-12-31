import {TextBoxContainer,TextInput,Circle} from './textBoxStyles';
import {useContext} from 'react';
import {ThemeContext} from '../../providers/theme/theme-provider';

const TextBox =()=>{
    const {darkMode}=useContext(ThemeContext);

    return(

    <TextBoxContainer >
        <Circle darkMode={darkMode}/>
        <TextInput darkMode={darkMode}/>
    </TextBoxContainer>
)
}
export default TextBox;