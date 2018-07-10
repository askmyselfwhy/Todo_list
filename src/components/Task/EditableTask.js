import React from 'react';
import { Button, Form, Container, Rating, Label } from 'semantic-ui-react';
import dateformat from 'dateformat';

const EditableTask = ({ editTask, deleteTask, caption, endDate, priority, handleChange, handleOnRate }) => {
	return (
		<div>
			<Container fluid textAlign="right">
				<Button compact size="mini" color="green" content="Accept" onClick={(e) => editTask(e)} />
				<Button compact size="mini" color="red" icon="delete" onClick={(e) => deleteTask(e)} />
			</Container>
			<Form>
				<Form.Field>
					<label>Change priority of task here</label>
					<Rating icon="star" clearable defaultRating={priority} maxRating={10} onRate={handleOnRate} />
				</Form.Field>
				<Form.TextArea
					autoHeight
					id="form-input-control-description"
					label="Task description"
					placeholder="Enter task description here"
					name="caption"
					value={caption}
					onChange={handleChange}
				/>
				<Form.Input
					id="form-input-control-time-to-finish"
					label="Time to finish the task"
					type="date"
					placeholder="Enter finish time for the task here"
					name="endDate"
					value={dateformat(endDate, 'yyyy-mm-dd')}
					onChange={handleChange}
				/>
			</Form>
		</div>
	);
};

export default EditableTask;
