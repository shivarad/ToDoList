import { useContext } from "react";
import List from "../list/list";
import {BodyContainer,InfoTxt} from './bodyStyles';
import {ThemeContext} from '../../providers/theme/theme-provider';


const Body=()=>{
    const {darkMode}=useContext(ThemeContext);
    
    return(
    <BodyContainer darkMode={darkMode}>
        <List/>
        <InfoTxt>Drag and drop to reorder list</InfoTxt>
    </BodyContainer>
 )
}


export default Body;