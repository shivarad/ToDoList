export const ToggleTask=(tasks,id)=>{

    const task=tasks.find(task=>task.id===id);
    return task?
      tasks.map(task=>task.id===id? {...task,isDone:!task.isDone}:task ) 
      :
     [...tasks]
}

