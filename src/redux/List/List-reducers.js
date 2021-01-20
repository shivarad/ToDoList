import ListActionTypes from './List-action-types';
// import uuid from 'react-uuid';
import {ToggleTask,AddTask} from './List-utils';

const INITIAL_STATE={
    tasks:[
        // {text:"task1",isDone:true,id:uuid()},
        // {text:"task2",isDone:true,id:uuid()},
        // {text:"task3",isDone:false,id:uuid()}
    ],
    
    visibilityFilter:2, //all:2 complete:0 active:1
    }


const ListReducer=(state=INITIAL_STATE,action)=>{
    switch(action.type){
        case(ListActionTypes.ADD_TASK):
            return {
                ...state,
                tasks: AddTask(state.tasks,action.payload),
                visibilityFilter:2
            }
        case (ListActionTypes.REMOVE_TASK):
            return{
                ...state,
                tasks:state.tasks.filter(task=>task.id!==action.payload),
            }
        case(ListActionTypes.TOGGLE_TASK):
            return{
                ...state,
                tasks:ToggleTask(state.tasks,action.payload),
            }
        case(ListActionTypes.CLEAR_COMPLETE):
            return{
                ...state,
                tasks:state.tasks.filter(task=>task.isDone!==true),
                visibilityFilter:2
            }
        case(ListActionTypes.FILTER_TASKS):
            return{
                ...state,
                visibilityFilter:action.payload
            }
        case(ListActionTypes.MOVE_TASK):
            return{
                ...state,tasks:[...action.payload]
            }
        default:
            return state;
    }
}


export default ListReducer;