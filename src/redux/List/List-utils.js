export const ToggleTask=(tasks,id)=>{

    const task=tasks.find(task=>task.id===id);
    return task?
      tasks.map(task=>task.id===id? {...task,isDone:!task.isDone}:task ) 
      :
     [...tasks]
}

export const FilterTasks=(tasks,filterType)=>{ //all:2 complete:0 active:1

  switch(filterType){
    case(0):
      return tasks.filter(task=>task.isDone);
    case(1):
      return tasks.filter(task=>!task.isDone);
    default:
      return tasks
}
}