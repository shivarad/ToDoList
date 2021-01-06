import ListActionTypes from './List-action-types';
import uuid from 'react-uuid';
import {ToggleTask} from './List-utils';

const INITIAL_STATE={
    tasks:[
        {text:"task1",isDone:true,id:uuid()},
        {text:"task2",isDone:true,id:uuid()},
        {text:"task3",isDone:false,id:uuid()}
    ]
}

const ListReducer=(state=INITIAL_STATE,action)=>{
    switch(action.type){
        case(ListActionTypes.ADD_TASK):
            return {
                ...state,tasks:[...state.tasks,{text:action.payload,isDone:false,id:uuid()}]
            }
        case (ListActionTypes.REMOVE_TASK):
            return{
                ...state,tasks:state.tasks.filter(task=>task.id!==action.payload)
            }
        case(ListActionTypes.TOGGLE_TASK):
            return{
                ...state,tasks:ToggleTask(state.tasks,action.payload)
            }
        case(ListActionTypes.CLEAR_COMPLETE):
            return{
                ...state,tasks:state.tasks.filter(task=>task.isDone!==true)
            }
        default:
            return state;
    }
}


export default ListReducer;