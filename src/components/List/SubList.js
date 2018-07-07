import React, { Component } from 'react'
import { Popup, Tab, Button, Label, Icon, Container } from 'semantic-ui-react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { SortableContainer, SortableElement } from 'react-sortable-hoc'

import TaskContainer from '../../containers/TaskContainer'

const SortableItem = SortableElement(({taskData}) =>
  <TaskContainer taskData={taskData}/> 
);

const SortableList = SortableContainer(({items, title, collectionNumber, checkTask, deleteTasks, sortTasks, selectTasks}) => {
  let pane1 =     
  <Tab.Pane inverted>
    <Button as='div' labelPosition='right' onClick={e => sortTasks('date', true)}>
      <Button icon='calendar alternate outline'/>
      <Label as='a' basic >Sort by date</Label>
    </Button>
    <Button as='div' labelPosition='right' onClick={e => sortTasks('priority', true)}>
      <Button icon='star outline'/>
      <Label as='a' basic >Sort by priority</Label>
    </Button>
  </Tab.Pane>;
  let pane2 = 
  <Tab.Pane inverted>
    <Button as='div' labelPosition='right' onClick={e => sortTasks('date', false)}>
      <Button icon='calendar alternate outline'/>
      <Label as='a' basic >Sort by date</Label>
    </Button>
    <Button as='div' labelPosition='right' onClick={e => sortTasks('priority', false)}>
      <Button icon='star outline'/>
      <Label as='a' basic >Sort by priority</Label>
    </Button>
  </Tab.Pane>;
  const panes = [
    { menuItem: 'Sort ascending', render: () => pane1 },
    { menuItem: 'Sort descending', render: () => pane2 },
  ]
  return (
    <div>
      <Container fluid textAlign='center'>
        <h1>{title}</h1>
      </Container>
      <Container fluid textAlign='right' className='sublist-controls'>
        <Button.Group widths='4'>
          <Popup inverted flowing
            trigger={<Button compact icon><Icon name='sort' />Sort by</Button>}
            on='click' hideOnScroll>
            <Tab menu={{fluid: true, secondary: true, inverted: true}} panes={panes}/>
          </Popup>
          <Button compact content='Select all'   onClick={e => selectTasks(true)}/>
          <Button compact content='Unselect all' onClick={e => selectTasks(false)}/>
          <Button compact content='Delete checked' onClick={e => deleteTasks()}
            color='red'/>
        </Button.Group>
      </Container>
      <TransitionGroup>
        {items.map((item, index) => (
          <CSSTransition key={item.id} timeout={500} classNames="fade">
            <SortableItem key={item.id+index} collection={collectionNumber} 
              index={index} taskData={item}/>
          </CSSTransition>
        ))}
      </TransitionGroup> 
    </div>
  )
});


class SubList extends Component {
  constructor(props){
    super(props);
    this.state = {
      isPriorityAscOrder: true,
      isDateAscOrder: true,
    }
    this.sortTasks = this.sortTasks.bind(this);
    this.selectTasks = this.selectTasks.bind(this);
    this.deleteTasks = this.deleteTasks.bind(this);
  }
  sortTasks(sortType, order){
    this.props.sortAndChangeTasks(this.props.index, sortType, order)
  }
  selectTasks(isCheck){
    this.props.checkAndChangeTasks(this.props.index, isCheck)
  }
  deleteTasks(){
    this.props.deleteAndChangeTasks(this.props.index);
  }
  render(){
    let {subList, index, onSortStart, onSortEnd, checkTask } = this.props;
    return (
      <SortableList collectionNumber={index}
        lock='y' distance={2} items={subList.tasks} title={subList.title}
        onSortEnd={onSortEnd} checkTask={checkTask}
        onSortStart={onSortStart}
        deleteTasks={this.deleteTasks} sortTasks={this.sortTasks} selectTasks={this.selectTasks}/>
    )
  }

}

export default SubList