import { connect } from 'react-redux';
import TaskContainer from '../components/Task/TaskContainer';
import { onCheckTask, onEditTask, onDeleteTask } from '../actions/';

const mapDispatchToProps = (dispatch) => ({
	checkTask: (id) => {
		dispatch(onCheckTask(id));
	},
	editTask: (editedTask) => dispatch(onEditTask(editedTask)),
	deleteTask: (id) => {
		dispatch(onDeleteTask(id));
	}
});

export default connect(null, mapDispatchToProps)(TaskContainer);
