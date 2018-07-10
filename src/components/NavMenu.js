import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Icon, Menu, Popup, Button } from 'semantic-ui-react';
import AddTaskForm from './AddTaskForm';

class NavMenu extends Component {
	state = {
		isPanelOpened: false
	};
	tooglePanel = () => {
		this.setState({
			isPanelOpened: !this.state.isPanelOpened
		});
	};
	render() {
		let { handleChanges, onAddTask, endDate, priority, text, changeRating } = this.props;
		return (
			<Menu as="nav" stackable>
				<Link to="/" className="item">
					<Icon name="home" />Home
				</Link>
				<Popup
					flowing
					position="bottom center"
					trigger={
						<Menu.Item>
							<Icon name="add" />Add new task
						</Menu.Item>
					}
					on="click"
					hideOnScroll
				>
					<AddTaskForm
						handleChanges={handleChanges}
						onAddTask={onAddTask}
						endDate={endDate}
						priority={priority}
						text={text}
						changeRating={changeRating}
					/>
				</Popup>
			</Menu>
		);
	}
}

export default NavMenu;
