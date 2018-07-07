import action from '../actions/action_types';

const loadFromLocalStorage = () => {
  let store = JSON.parse(localStorage.getItem('my_todoList'));
  let initialState = (store !== null) ? store.tasks : {tasks: []}
  return initialState
}

const initialState = loadFromLocalStorage()

const addNewTask = (state, {listIndex, taskInfo}) => {
  let tasks = [...state.tasks]
  tasks[listIndex] = [
    ...tasks[listIndex], taskInfo
  ];
  return {
    ...state,
    tasks
  }
}

const checkTask = (state, {listIndex, id}) => {
  console.log(listIndex + " " + id)
  let tasks = [...state.tasks];
  tasks[listIndex] = [...tasks[listIndex]].map((item) => 
    (item.id === id) ? {...item, isChecked: !item.isChecked } : item)
  return {
    ...state,
    tasks
  }
}

const deleteTask = (state, {listIndex, id}) => {
  let tasks = [...state.tasks];
  tasks[listIndex] = [...tasks[listIndex]].filter((item) => (item.id === id) ? false : true);
  return {
    ...state,
    tasks
  }
}

const deleteAllCheckedTasks = (state, listIndex) => {
  let tasks = [...state.tasks];
  tasks[listIndex] = [...tasks[listIndex]].filter((item) => (!item.isChecked) ? true : false )
  return {
    ...state,
    tasks
  }
}
const sortTasks = (state, {listIndex, isAscOrder}) => {
  let tasks = [...state.tasks];
  let sortedTasks = (isAscOrder) ? 
    [...tasks[listIndex]].sort((task1, task2) => {
      let date1 = new Date(task1.timeExp);
      let date2 = new Date(task2.timeExp);
      var timeDiff = date1.getTime() - date2.getTime();
      return timeDiff
    })
      :
    [...tasks[listIndex]].sort((task1, task2) => {
      let date1 = new Date(task1.timeExp);
      let date2 = new Date(task2.timeExp);
      var timeDiff = date2.getTime() - date1.getTime();
      return timeDiff
    })
  
  tasks[listIndex] = sortedTasks;
  return {
    ...state,
    tasks
  }
}
const changeOrder = (state, {listIndex}) => {
  return state;
}

const editTask = (state, {listIndex, editedTask}) => {
  let tasks = [...state.tasks];
  tasks[listIndex] = [...tasks[listIndex]].map((item) =>{
    return (item.id === editedTask.id) ? editedTask : item;
  })
  return {
    ...state,
    tasks
  }
}

const deleteListTasks = (state, listIndex) => {
  let tasks = [...state.tasks].filter((task, i) => (i !== listIndex) ? true : false);
  return {
    tasks
  }
}

function tasks(state=initialState, event){
  switch(event.type){
    case action.ADD_TASK:
      return addNewTask(state, event.payload); 
    case action.CHECK_TASK:
      return checkTask(state, event.payload);
    case action.DELETE_TASK:
      return deleteTask(state, event.payload);   
    case action.DELETE_CHECKED_TASKS:
      return deleteAllCheckedTasks(state,event.payload);
    case action.SORT_TASKS:
      return sortTasks(state,event.payload);
    case action.EDIT_TASK:
      return editTask(state, event.payload);
    case action.ADD_LIST:
      return {tasks: [...state.tasks, []],}  
    case action.CHANGE_LIST:
      return {tasks: state.tasks}
    case action.DELETE_LIST:
      return deleteListTasks(state, event.payload)          
    default:
      return state;
  }
}

export default tasks;