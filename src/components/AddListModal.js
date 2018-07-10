import React, { Component } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Input, Button } from 'semantic-ui-react';
import v4 from 'uuid';

class AddListModal extends Component {
	state = {
		title: ''
	};
	handleChange = (e, { name, value }) => {
		this.setState({
			[name]: value
		});
	};
	render() {
		let { isOpen, toggleModal, addList } = this.props;
		return (
			<Modal isOpen={isOpen} toggle={toggleModal} centered>
				<ModalHeader toggle={toggleModal}>Create new list</ModalHeader>
				<ModalBody>
					<Input
						id="form-input-control-title"
						name="title"
						placeholder="Enter list title here"
						type="text"
						value={this.state.title}
						onChange={this.handleChange}
					/>
				</ModalBody>
				<ModalFooter>
					<Button onClick={toggleModal} negative content="Cancel" />
					<Button
						onClick={(e) => {
							addList({ id: v4(), tasks: [], title: this.state.title });
							toggleModal();
							this.setState({ title: '' });
						}}
						positive
						content="Add new list"
					/>
				</ModalFooter>
			</Modal>
		);
	}
}

export default AddListModal;
