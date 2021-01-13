import ListActionTypes from './List-action-types';

export const AddTask=(text)=>({
    type:ListActionTypes.ADD_TASK,
    payload:text
});

export const RemoveTask=(id)=>({
    type:ListActionTypes.REMOVE_TASK,
    payload:id
});


export const ToggleTask=(id)=>({
    type:ListActionTypes.TOGGLE_TASK,
    payload:id
});

export const ClearCompelete=()=>({
    type:ListActionTypes.CLEAR_COMPLETE
});

export const FilterTasks=(visibilityFilter)=>({
    type:ListActionTypes.FILTER_TASKS,
    payload:visibilityFilter
})

export const MoveTask=(reorderedTasks)=>({
    type:ListActionTypes.MOVE_TASK,
    payload:reorderedTasks
})