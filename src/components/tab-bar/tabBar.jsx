import {TabBarContainer,TabBtn,MiddleBtnsContainer} from './tabBarStyles';

const TabBar=()=>(
    <TabBarContainer>
        <TabBtn>3 items left</TabBtn>
        <MiddleBtnsContainer>
            <TabBtn>All</TabBtn>
            <TabBtn >Active</TabBtn>
            <TabBtn >Completed</TabBtn>
        </MiddleBtnsContainer>
        <TabBtn>Clear Completed</TabBtn>
    </TabBarContainer>    
)


export default TabBar;