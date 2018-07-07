import v4 from 'uuid';
import action from '../actions/action_types';

const loadFromLocalStorage = () => {
  let store = JSON.parse(localStorage.getItem('my_todoList'));
  let initialState = (store !== null) ? store.lists : { lists: []}
  return initialState
}

const initialState = loadFromLocalStorage();

const addNewList = (state, title) => {
  let lists = [...state.lists,{
    id: v4(),
    title,  
  }]
  return {
    lists
  }
}
const changeList = (state, newIndex) => {
  return {
    lists: state.lists
  }
}
const editList = (state, {listIndex, title}) => {
  let lists = [...state.lists].map((list, index) => 
    (index === listIndex) ? 
      {id: list.id, title: title} :
      list
  )
  return {
    lists
  }
}
const deleteList = (state, index) => {
  let lists = [...state.lists].filter((item, i) => (i !== index) ? true : false);
  return {
    lists
  }
}

function lists(state=initialState, event){
  switch(event.type){
    case action.ADD_LIST:
      return addNewList(state, event.payload);
    case action.DELETE_LIST:
      return deleteList(state, event.payload);
    case action.CHANGE_LIST:
      return changeList(state, event.payload);
    case action.EDIT_LIST:
      return editList(state, event.payload);  
    default:
      return state;
  }
}


export default lists;

