import action from './action_types';

export const onAddList = (title) => ({
  type : action.ADD_LIST,
  payload : title
})
export const onChangeList = (newListId) => ({
  type : action.CHANGE_LIST,
  payload : newListId
})
export const onEditList = (title) => ({
  type : action.EDIT_LIST,
  payload : title
})
export const onDeleteList = (listId) => ({
  type : action.DELETE_LIST,
  payload : listId
})
export const onReorderLists = (lists) => ({
  type: action.REORDER_LISTS,
  payload: lists
})
export const onAddTask = (taskData) => ({
  type : action.ADD_TASK,
  payload : taskData
})
export const onCheckTask = (taskId) => ({
  type : action.CHECK_TASK,
  payload : taskId
})
export const onEditTask = (editedTask) => ({
  type : action.EDIT_TASK,
  payload : editedTask
})
export const onDeleteTask = (taskId) => ({
  type : action.DELETE_TASK,
  payload : taskId
})
export const onDeleteAllCheckedTasks = () => ({
  type : action.DELETE_CHECKED_TASKS,
})
export const onChangeTasksArray = (tasks) => ({
  type: action.CHANGE_TASKS_ARRAY,
  payload: tasks
})