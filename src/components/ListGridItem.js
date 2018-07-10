import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Container } from 'semantic-ui-react';

class ListGridItem extends Component {
	render() {
		let { listData, deleteList } = this.props;
		return (
			<div className="lists-grid__item">
				<Link to={'/list/' + listData.id}>
					<Container textAlign="right">
						<Button
							icon="delete"
							color="red"
							onClick={(e) => {
								e.preventDefault();
								deleteList(listData.id);
							}}
						/>
					</Container>
					<h4 className="lists-grid__item__title">{listData.title}</h4>
				</Link>
			</div>
		);
	}
}

export default ListGridItem;
