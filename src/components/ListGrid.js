import React, {Component} from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { SortableContainer, SortableElement, arrayMove } from 'react-sortable-hoc';
import ListGridItem from './ListGridItem'
import v4 from 'uuid'
import config from '../config';

const SortableItem = SortableElement(({listData, deleteList}) =>
  <ListGridItem listData={listData} deleteList={deleteList}/>
);
 
const SortableList = SortableContainer(({items, deleteList, addList}) => {
  return (
    <div className="grid-container">
      <div 
        className="lists-grid__item--add"          
        onClick={e=>{e.preventDefault();addList({id: v4(), tasks: [] ,title: 'New List'})}}>
      </div> 
      <TransitionGroup component={null}>
        {items.map((item, index) => (
          <CSSTransition key={item.id} timeout={500} classNames="zoom">
            <SortableItem key={item.id+index} index={index}
              listData={item} deleteList={deleteList}>
            </SortableItem>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  )
});

class ListGrid extends Component {
  saveToStorage(){
    let obj = JSON.stringify({
      idOfCurrentList: null,
      lists: this.props.lists
    });
    localStorage.setItem('my_todoList',obj)
  }
  componentDidMount(){
    let node = document.getElementsByClassName('grid-container')[0];
    setTimeout(()=> {
      node.style.opacity = "1"
      }, config.ANIMATION_DELAY)
  }
  componentWillUnmount(){
    this.saveToStorage();
  }
  componentDidUpdate(){
    this.saveToStorage();
  }

  onSortEnd = ({oldIndex, newIndex}) => {
    this.lists = arrayMove(this.lists, oldIndex, newIndex);
    this.props.reorderLists(this.lists);
  };
  onSortStart = ({oldIndex, newIndex}, e) => {
    e.preventDefault();
  };

  render(){
    let {lists, addList, deleteList} = this.props;
    this.lists = lists;
    return (
      <SortableList distance={2} axis='xy' items={lists}
        deleteList={deleteList} addList={addList} 
        onSortStart={this.onSortStart}
        onSortEnd={this.onSortEnd}/>
    )
  }
}
export default ListGrid;

