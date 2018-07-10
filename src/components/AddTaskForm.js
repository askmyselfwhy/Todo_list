import React, { Component } from 'react'
import { Label, Segment, Container, Button, Input, TextArea, Rating } from 'semantic-ui-react'
import dateformat from 'dateformat'


class AddTaskForm extends Component {

  render() {
    let { endDate, text, priority, handleChanges, onAddTask, changeRating } = this.props
    return (
      <Container fluid textAlign='center' className='task-form__grid'>
        <Label>Choose the priority of task</Label>
        <Rating icon='star' clearable defaultRating={priority} maxRating={10} onRate={changeRating} />
        <Label>Choose the date</Label>
        <Input icon='calendar alternate outline' iconPosition='left'
          id='form-input-control-time-to-finish' name='endDate'
          type="date" value={dateformat(endDate, 'yyyy-mm-dd')}
          onChange={handleChanges} />
        <Label>Task description</Label>
        <TextArea placeholder='Enter task description here'
          id='form-input-control-description' name='text'
          value={text}
          onChange={handleChanges} />
        <Button color='green' onClick={e => onAddTask(e)}>Add task</Button>
      </Container>
    )
  }
}

export default AddTaskForm;