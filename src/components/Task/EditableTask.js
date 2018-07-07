import React from 'react';
import { Button, Form, Container, Rating } from 'semantic-ui-react'
import dateformat from 'dateformat'

const EditableTask = ({editTask, deleteTask, text, endDate, handleChange}) => {
  return (
      <div>
        <Container fluid textAlign="right">
          <Button compact size='mini' color='green' content='Accept'
           onClick={e => editTask(e)}/>
          <Button compact size='mini' color='red' icon='delete'
           onClick={e => deleteTask(e)}/>
        </Container>
        <Form>
          <Rating icon='star' clearable maxRating={10}/>
          <Form.TextArea autoHeight id='form-input-control-description' 
            label='Task description' placeholder='Enter task description here' 
            name='text' value={text} onChange={handleChange}/> 
          <Form.Input id='form-input-control-time-to-finish' 
            label='Time to finish the task' type="date"
            placeholder="Enter finish time for the task here" name='endDate' 
            value={dateformat(endDate,'yyyy-mm-dd')} 
            onChange={handleChange}/>
        </Form>
      </div>
  )
}

export default EditableTask