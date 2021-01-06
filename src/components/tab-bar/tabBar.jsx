import {TabBarContainer,TabBtn,MiddleBtnsContainer} from './tabBarStyles';


const TabBar=({lenght})=>{

    return(
    <TabBarContainer >
        <TabBtn>{lenght} items left</TabBtn>
        <MiddleBtnsContainer>
            <TabBtn>All</TabBtn>
            <TabBtn >Active</TabBtn>
            <TabBtn >Completed</TabBtn>
        </MiddleBtnsContainer>
        <TabBtn>Clear Completed</TabBtn>
    </TabBarContainer>    
)}


export default TabBar;