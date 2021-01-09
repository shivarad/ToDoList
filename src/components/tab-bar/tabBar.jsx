import {TabBarContainer,LeftTabBtn,MiddleBtnsContainer,MiddleTabBtn,RightTabBtn} from './tabBarStyles';
import {connect} from 'react-redux';
import {FilterTasks,ClearCompelete} from '../../redux/List/List-actions';

const TabBar=({tasks,FilterTasks,filterType,ClearCompelete})=>{
    const unDoneTasks=tasks.filter(task=>!task.isDone)
    return(
    <TabBarContainer >
        <LeftTabBtn>{unDoneTasks.length} items left</LeftTabBtn>
        <MiddleBtnsContainer>
            <MiddleTabBtn onClick={()=>FilterTasks(2)} className={filterType===2?'active':''}>All</MiddleTabBtn>
            <MiddleTabBtn onClick={()=>FilterTasks(1)}>Active</MiddleTabBtn>
            <MiddleTabBtn onClick={()=>FilterTasks(0)}>Completed</MiddleTabBtn>
        </MiddleBtnsContainer>
        <RightTabBtn  onClick={()=>ClearCompelete()}>Clear Completed</RightTabBtn>
    </TabBarContainer>    
)}

const mapStateToProps=state=>({
    tasks:state.tasks,
    filterType:state.filterType
})
const mapDispatchToProps=dispatch=>({
    FilterTasks:(filterType)=>dispatch(FilterTasks(filterType)),
    ClearCompelete:()=>dispatch(ClearCompelete())
})
export default connect(mapStateToProps,mapDispatchToProps)(TabBar);