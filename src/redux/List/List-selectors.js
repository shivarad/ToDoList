import {createSelector} from 'reselect';

 const getList = state => state.List;

export const getVisibilityFilter =createSelector(
  [getList],
  List=>List.visibilityFilter
) 

export const getTasks=createSelector(
  [getList],
  List=>List.tasks
  )

export const selectVisibleTasks = createSelector(
  [ getVisibilityFilter, getTasks ],
  (visibilityFilter, tasks) => {
    switch (visibilityFilter) {
      case(0):
        return tasks.filter(task=>task.isDone);
      case(1):
        return tasks.filter(task=>!task.isDone);
      default:
        return tasks
    }
  }
)

