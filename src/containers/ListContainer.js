import {connect} from 'react-redux'
import List from '../components/List/List'
import {onDeleteTask, onCheckTask, onChangeTasksArray,onChangeList,onDeleteAllCheckedTasks, onAddTask, onEditList} from '../actions/'

const mapStateToProps = (state) => ({
  lists: state.lists.lists
})

const mapDispatchToProps = (dispatch) => ({
  changeList: (newListId)   => {dispatch(onChangeList(newListId))},
  deleteAllCheckedTasks: () => {dispatch(onDeleteAllCheckedTasks())},
  addTask: (taskData)       => {dispatch(onAddTask(taskData))},
  editList: (title)         => {dispatch(onEditList(title))},
  changeTasks: (tasks)      => {dispatch(onChangeTasksArray(tasks))},
  checkTask: (id)           => {dispatch(onCheckTask(id))},
  deleteTask: (id)          => {dispatch(onDeleteTask(id))}
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List)