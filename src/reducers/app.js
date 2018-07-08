import action from '../actions/action_types';
import tasks from './tasks.js';
import {combineReducers} from 'redux';

const loadFromLocalStorage = () => {
  let store = JSON.parse(localStorage.getItem('my_todoList'));
  let initialState = (store !== null) ? store : {idOfCurrentList:null, lists: []}
  return initialState
}

const initialState = loadFromLocalStorage();

const addNewList = (state, listData) => {
  let lists = [...state.lists, listData]
  return {
    ...state,
    lists
  }
}
const changeList = (state, newListId) => {
  return {
    ...state,
    idOfCurrentList: newListId,
  }
}
const editList = (state, title) => {
  let lists = [...state.lists].map((list) => 
    (state.idOfCurrentList === list.id) ? 
      {id: list.id, title: title, tasks: list.tasks} :
      list
  )
  return {
    ...state,
    lists
  }
}
const deleteList = (state, listId) => {
  let lists = [...state.lists].filter((list) => (listId !== list.id) ? true : false);
  return {
    ...state,
    lists
  }
}
const reorderLists = (state, lists) => {
  return {
    ...state,
    lists
  }
}
const getListIndexById = (lists, listId) => {
  return lists.findIndex((list) => (listId === list.id))
}
function lists(state=initialState, event){
  switch(event.type){
     /* LISTS */
    case action.ADD_LIST:
      return addNewList(state, event.payload);
    case action.DELETE_LIST:
      return deleteList(state, event.payload);
    case action.CHANGE_LIST:
      return changeList(state, event.payload);
    case action.EDIT_LIST:
      return editList(state, event.payload);
    case action.REORDER_LISTS:
      return reorderLists(state,event.payload)
      /* TASKS */
    case action.ADD_TASK:
    case action.CHECK_TASK:
    case action.EDIT_TASK:
    case action.DELETE_TASK: 
    case action.DELETE_CHECKED_TASKS:
    case action.CHANGE_TASKS_ARRAY:
              let lists = [...state.lists];
              let index = getListIndexById(lists, state.idOfCurrentList);
              let list = lists[index];
              list.tasks = tasks(list, event.payload, event.type)  
              lists[index] = list;
              return {
                ...state,
                lists
              }   
    default:
      return state;
  }
}


export default combineReducers({
  lists,
})

