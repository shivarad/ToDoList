import Item from '../item/item';
import TabBar from '../tab-bar/tabBar'
import {ListContainer} from './listStyles';
import {connect} from 'react-redux';

const List=({tasks})=>(
   
    <ListContainer className='list'>
        
       {tasks.length?
             tasks.map(task=>(<Item key={task.id} task={task}/>))
        :
        console.log('no task')
       } 
        <TabBar />
    </ListContainer>
)
const mapStateToProps=state=>({
   
    tasks:state.filteredTasks
})

export default connect(mapStateToProps,null)(List);