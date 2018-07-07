import React, {Component} from 'react'
import { Label,Segment, Divider, Container, Button, Input, TextArea, Select, Rating } from 'semantic-ui-react'
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { SortableContainer, SortableElement, arrayMove } from 'react-sortable-hoc';
import dateformat from 'dateformat'

class AddTaskForm extends Component {

  render() {
    let {endDate, text, handleChanges, onAddTask, changeRating} = this.props
    return (
      <Segment padded className='task-form'>
        <Label attached='top'>Form to add new task</Label>
        <Container textAlign='center'>
          <Container>
            <Rating icon='star' clearable maxRating={10} onRate={changeRating}/>
            <Label>Choose the priority of task</Label>
          </Container>
          <Container>
            <Label>Choose the date</Label>
            <Input icon='calendar alternate outline' iconPosition='left'
              id='form-input-control-time-to-finish' name='endDate'
              type="date" value={dateformat(endDate,'yyyy-mm-dd')} 
              onChange={handleChanges} />
          </Container>
          <Container>
            <Label>Task description</Label>
            <TextArea autoHeight placeholder='Enter task description here'
              id='form-input-control-description' name='text' 
              icon='edit' iconPosition='left' value={text} 
              onChange={handleChanges}/>
          </Container>
          <Button color='green' onClick={e => onAddTask(e)}>Add task</Button>
        </Container>
      </Segment>
    )
  }
}

export default AddTaskForm;