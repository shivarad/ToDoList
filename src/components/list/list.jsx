import Item from '../item/item';
import TabBar from '../tab-bar/tabBar'
import {ListContainer} from './listStyles';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectVisibleTasks} from '../../redux/List/List-selectors';
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
const mapStateToProps= createStructuredSelector({
  
    tasks:selectVisibleTasks
});

export default connect(mapStateToProps,null)(List);