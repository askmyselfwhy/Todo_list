import React, { Component } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { SortableContainer, SortableElement, arrayMove } from 'react-sortable-hoc';
import ListGridItem from './ListGridItem';
import HomePageNav from './HomePageNav';
import AddListModal from './AddListModal';
import config from '../config';

const SortableItem = SortableElement(({ listData, deleteList }) => (
	<ListGridItem listData={listData} deleteList={deleteList} />
));

const SortableList = SortableContainer(({ items, deleteList, toggleModal }) => {
	return (
		<div className="grid-container">
			<TransitionGroup component={null}>
				{items.map((item, index) => (
					<CSSTransition key={item.id} timeout={500} classNames="zoom">
						<SortableItem key={item.id + index} index={index} listData={item} deleteList={deleteList} />
					</CSSTransition>
				))}
			</TransitionGroup>
			<div className="lists-grid__item--add" onClick={(e) => toggleModal()} />
		</div>
	);
});

class ListGrid extends Component {
	state = {
		openAddListModal: false
	};
	saveToStorage() {
		let obj = JSON.stringify({
			idOfCurrentList: null,
			lists: this.props.lists
		});
		localStorage.setItem('my_todoList', obj);
	}
	componentDidMount() {
		let node = document.getElementsByClassName('grid-container')[0];
		setTimeout(() => {
			node.style.opacity = '1';
		}, config.ANIMATION_DELAY);
	}
	componentWillUnmount() {
		this.saveToStorage();
	}
	componentDidUpdate() {
		this.saveToStorage();
	}
	toggleModal = () => {
		this.setState({
			openAddListModal: !this.state.openAddListModal
		});
	};
	onSortEnd = ({ oldIndex, newIndex }) => {
		this.lists = arrayMove(this.lists, oldIndex, newIndex);
		this.props.reorderLists(this.lists);
	};
	onSortStart = ({ oldIndex, newIndex }, e) => {
		e.preventDefault();
	};

	render() {
		let { lists, addList, deleteList } = this.props;
		this.lists = lists;
		return (
			<div>
				<HomePageNav toggleModal={this.toggleModal} />
				<AddListModal isOpen={this.state.openAddListModal} addList={addList} toggleModal={this.toggleModal} />
				<SortableList
					distance={2}
					axis="xy"
					items={lists}
					deleteList={deleteList}
					addList={addList}
					onSortStart={this.onSortStart}
					onSortEnd={this.onSortEnd}
					toggleModal={this.toggleModal}
				/>
			</div>
		);
	}
}
export default ListGrid;
