import {TabBarContainer,TabBtn,MiddleBtnsContainer} from './tabBarStyles';
import {useContext} from 'react';
import {ThemeContext} from '../../providers/theme/theme-provider';

const TabBar=()=>{
    const {darkMode}=useContext(ThemeContext);

    return(
    <TabBarContainer darkMode={darkMode}>
        <TabBtn>3 items left</TabBtn>
        <MiddleBtnsContainer>
            <TabBtn>All</TabBtn>
            <TabBtn >Active</TabBtn>
            <TabBtn >Completed</TabBtn>
        </MiddleBtnsContainer>
        <TabBtn>Clear Completed</TabBtn>
    </TabBarContainer>    
)}


export default TabBar;