import ListActionTypes from './List-action-types';
import uuid from 'react-uuid';
import {ToggleTask,FilterTasks} from './List-utils';

const INITIAL_STATE={
    tasks:[
        {text:"task1",isDone:true,id:uuid()},
        {text:"task2",isDone:true,id:uuid()},
        {text:"task3",isDone:false,id:uuid()}
    ],
    filteredTasks:[
        {text:"task1",isDone:true,id:uuid()},
        {text:"task2",isDone:true,id:uuid()},
        {text:"task3",isDone:false,id:uuid()}
    ],
    filterType:2, //all:2 complete:0 active:1
    }


const ListReducer=(state=INITIAL_STATE,action)=>{
    switch(action.type){
        case(ListActionTypes.ADD_TASK):
            return {
                ...state,
                tasks:[...state.tasks,{text:action.payload,isDone:false,id:uuid()}],
                filteredTasks:FilterTasks(state.tasks,state.filterType),
                filterType:2
            }
        case (ListActionTypes.REMOVE_TASK):
            return{
                ...state,
                tasks:state.tasks.filter(task=>task.id!==action.payload),
                filteredTasks:FilterTasks(state.tasks,state.filterType)
            }
        case(ListActionTypes.TOGGLE_TASK):
            return{
                ...state,
                tasks:ToggleTask(state.tasks,action.payload),
                filteredTasks:ToggleTask(state.filteredTasks,action.payload)
            }
        case(ListActionTypes.CLEAR_COMPLETE):
            return{
                ...state,
                tasks:state.tasks.filter(task=>task.isDone!==true),
                filteredTasks:state.tasks,
                filterType:2
            }
        case(ListActionTypes.FILTER_TASKS):
            return{
                ...state,
                filteredTasks:FilterTasks(state.tasks,action.payload),
                filterType:action.payload
            }
        default:
            return state;
    }
}


export default ListReducer;