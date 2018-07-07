import {connect} from 'react-redux'
import ListGrid from '../components/ListGrid'
import {onAddList, onDeleteList, onReorderLists} from '../actions/'

const mapStateToProps = (state) => ({
  lists: state.lists.lists
})

const mapDispatchToProps = (dispatch) => ({
  addList: (title)      => dispatch(onAddList(title)),
  deleteList: (listId)  => dispatch(onDeleteList(listId)),
  reorderLists: (lists) => dispatch(onReorderLists(lists))
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListGrid)
