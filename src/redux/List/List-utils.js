import uuid from 'react-uuid';

export const ToggleTask=(tasks,id)=>{

    const task=tasks.find(task=>task.id===id);
    return task?
      tasks.map(task=>task.id===id? {...task,isDone:!task.isDone}:task ) 
      :
     [...tasks]
}

export const AddTask=(tasks,text)=>{
  return (text!=='')? [{text:text,isDone:false,id:uuid()},...tasks]:tasks
}