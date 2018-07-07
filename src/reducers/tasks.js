import action from '../actions/action_types';
import {sortByDateASC, sortByDateDESC} from '../sort'

const addNewTask = (list, taskData) => {
  return [...list.tasks, taskData]
}
const checkTask = (list, taskId) => {
  return [...list.tasks]
    .map((item) => 
     (item.id === taskId) ? {...item, isChecked: !item.isChecked } : item);
}
const deleteTask = (list, taskId) => {
  return [...list.tasks]
    .filter((item) => (item.id === taskId) ? false : true);
}
const deleteAllCheckedTasks = (list) => {
  return [...list.tasks]
    .filter((item) => (!item.isChecked) ? true : false )
}
const changeTasksArray = (list, tasks) => {
  return tasks
}
const editTask = (list, taskData) => {
  return [...list.tasks].map((item) =>{
    return (item.id === taskData.id) ? taskData : item;
  })
}

function tasks(list, payload, eventType){
  switch(eventType){
    case action.ADD_TASK:
      return addNewTask(list, payload); 
    case action.CHECK_TASK:
      return checkTask(list, payload);
    case action.DELETE_TASK:
      return deleteTask(list, payload);   
    case action.DELETE_CHECKED_TASKS:
      return deleteAllCheckedTasks(list);
    case action.EDIT_TASK:
      return editTask(list, payload);
    case action.CHANGE_TASKS_ARRAY:
      return changeTasksArray(list, payload);
    default:
      return list;
  }
}

export default tasks;