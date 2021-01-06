import {ItemContainer,ItemLabel,RemoveBtn,CircularCheckBox,SVGCheckmark} from './itemStyles';
import { connect } from "react-redux";
import {ToggleTask} from '../../redux/List/List-actions'

const Item=({task,ToggleTask})=>{
const handleChecked=()=>{
   ToggleTask(task.id);
}
    return( 
    <ItemContainer >

        <ItemLabel >
            <CircularCheckBox checked={task.isDone} onChange={()=>handleChecked()}/>
            <SVGCheckmark aria-hidden="true"  width="16" height="16" viewBox="0 0 36 36" >
                <path d="M6 14l8 8L30 6v8L14 30l-8-8v-8z"></path>
            </SVGCheckmark>
            {task.text}
        </ItemLabel>
        <RemoveBtn className='removeBtn' >&#x2715;</RemoveBtn>

    </ItemContainer>

)}
const mapDispatchToProps=dispatch=>({
    ToggleTask:id=>dispatch(ToggleTask(id))
})

export default connect(null,mapDispatchToProps)(Item);