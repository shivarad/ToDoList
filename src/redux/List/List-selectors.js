import {createSelector} from 'reselect';

export const getVisibilityFilter = (state) => state.visibilityFilter
export const getTasks = (state) => state.tasks

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

