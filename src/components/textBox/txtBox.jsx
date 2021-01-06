import {TextBoxContainer,TextInput,Circle} from './textBoxStyles';
import {connect} from 'react-redux';
import {AddTask} from '../../redux/List/List-actions'

const TextBox =({addTask})=>{
    
    const handleKey=(e)=>{
        if (e.key === "Enter")
            addTask(e.target.value)
        }
   
    return(
    <TextBoxContainer >
        <Circle />
        <TextInput onKeyUp={handleKey}/>
    </TextBoxContainer>
   
)
}

const mapDispatchToProps=dispatch=>({
    addTask: text=>dispatch(AddTask(text))
})
export default connect(null,mapDispatchToProps)(TextBox);