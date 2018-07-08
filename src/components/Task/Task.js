import React from 'react';
import { Rating, Button, Icon } from 'semantic-ui-react'
import {getFormatedDate} from '../../dateTime';

const Task = (props) => {
  let {priority, caption, isChecked, endDate} = props.taskData;
  let {editTask, deleteTask} = props;
  return (
    <div>
      {(priority > 0) ?
        <Rating icon='star' disabled maxRating={priority} defaultRating={priority}/>
        : ''
      }
      <div className='list__task-content'>
        <p className="list__task__caption">
          {(isChecked) ? 
            <Icon name='check square outline'/> :
            <Icon name='square outline'/>
          }
          {caption}
        </p>
        <div className="list__task-controls">
          <Button compact size='mini' color='teal' content='Edit' 
            onClick={e => editTask(e)}/>
          <Button compact size='mini' color='red'  icon='delete' 
            onClick={e => deleteTask(e)}/>
        </div>
        
      </div>
      <div className="list__task__dates">
        <div className="list__item__time-exp">
          The task should be completed by: 
          <time>{getFormatedDate(endDate)}</time>
        </div>
      </div>
    </div>
  )
}

export default Task;