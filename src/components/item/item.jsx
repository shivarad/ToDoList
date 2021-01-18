import {ItemContainer,ItemLabel,RemoveBtn,CircularCheckBox,SVGCheckmark} from './itemStyles';
import { connect } from "react-redux";
import {ToggleTask,RemoveTask} from '../../redux/List/List-actions'
import {Draggable} from 'react-beautiful-dnd';
const Item=({task,ToggleTask,RemoveTask,index})=>{

    const handleChecked=()=>{
    ToggleTask(task.id);
    }
    const handleClick=(e)=>{
        e.preventDefault();
        RemoveTask(task.id);
    }

    return( 
        <Draggable draggableId={task.id} index={index} >
            {provided=>(
                <ItemContainer 
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    >
                    <ItemLabel className={task.isDone?'done':''}>
                        <CircularCheckBox name={task.id} checked={task.isDone} onChange={()=>handleChecked()}/>
                        <SVGCheckmark aria-hidden="true"  width="16" height="16" viewBox="0 0 36 36" >
                            <path d="M6 14l8 8L30 6v8L14 30l-8-8v-8z"></path>
                        </SVGCheckmark>
                        {task.text}
                    </ItemLabel>
                    <RemoveBtn className='removeBtn' onClick={(e)=>handleClick(e)}>&#x2715;</RemoveBtn>

                </ItemContainer>
            )}
        </Draggable>
    )}
const mapDispatchToProps=dispatch=>({
    ToggleTask:id=>dispatch(ToggleTask(id)),
    RemoveTask:id=>dispatch(RemoveTask(id))
})

export default connect(null,mapDispatchToProps)(Item);