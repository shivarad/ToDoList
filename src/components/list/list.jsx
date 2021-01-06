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
        <TabBar lenght={tasks.length?tasks.length:0}/>
    </ListContainer>
)
const mapStateToProps=state=>({
   
    tasks:state.tasks
})

export default connect(mapStateToProps,null)(List);