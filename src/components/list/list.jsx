import Item from '../item/item';
import TabBar from '../tab-bar/tabBar'
import {ListContainer,Wrapper} from './listStyles';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectVisibleTasks,getTasks} from '../../redux/List/List-selectors';
import {MoveTask} from '../../redux/List/List-actions'
import {Droppable,DragDropContext} from 'react-beautiful-dnd';

const List=({visibleTasks,UpdateTasks,tasks})=>{

  const onDragEndHanlde=result=> {
    if(!result.destination) return;

    const items = Array.from(tasks);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    UpdateTasks(items);
   

  }


    return(
    <Wrapper>
        <DragDropContext onDragEnd={onDragEndHanlde}>
         <Droppable droppableId="list">
             {provided=>(
            <ListContainer className='list'   ref={provided.innerRef} {...provided.droppableProps}>
                
                        {
                                visibleTasks.map((task,index)=>(<Item key={task.id} task={task} index={index}/>))

                        
                       } 
                {provided.placeholder}
            </ListContainer>
             )}
      </Droppable>
      </DragDropContext>
    <TabBar />

    </Wrapper>
)}

const mapDispatchToProps=dispatch=>({
    UpdateTasks:reorderedTasks=>dispatch(MoveTask(reorderedTasks))
})
const mapStateToProps= createStructuredSelector({
    tasks:getTasks,
    visibleTasks:selectVisibleTasks
});

export default connect(mapStateToProps,mapDispatchToProps)(List);