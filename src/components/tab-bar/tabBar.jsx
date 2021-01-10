import {TabBarContainer,LeftTabBtn,MiddleBtnsContainer,MiddleTabBtn,RightTabBtn} from './tabBarStyles';
import {connect} from 'react-redux';
import {FilterTasks,ClearCompelete} from '../../redux/List/List-actions';

const TabBar=({tasks,FilterTasks,visibilityFilter,ClearCompelete})=>{
    const unDoneTasks=tasks.filter(task=>!task.isDone)
    return(
    <TabBarContainer >
        <LeftTabBtn>{unDoneTasks.length} items left</LeftTabBtn>
        <MiddleBtnsContainer>
            <MiddleTabBtn onClick={()=>FilterTasks(2)} className={visibilityFilter===2?'active':''}>All</MiddleTabBtn>
            <MiddleTabBtn onClick={()=>FilterTasks(1)} className={visibilityFilter===1?'active':''}>Active</MiddleTabBtn>
            <MiddleTabBtn onClick={()=>FilterTasks(0)} className={visibilityFilter===0?'active':''}>Completed</MiddleTabBtn>
        </MiddleBtnsContainer>
        <RightTabBtn  onClick={()=>ClearCompelete()}>Clear Completed</RightTabBtn>
    </TabBarContainer>    
)}

const mapStateToProps=state=>({
    tasks:state.tasks,
    visibilityFilter:state.visibilityFilter
})
const mapDispatchToProps=dispatch=>({
    FilterTasks:(visibilityFilter)=>dispatch(FilterTasks(visibilityFilter)),
    ClearCompelete:()=>dispatch(ClearCompelete())
})
export default connect(mapStateToProps,mapDispatchToProps)(TabBar);