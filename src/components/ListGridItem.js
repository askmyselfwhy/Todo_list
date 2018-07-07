import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import { Button, Container } from 'semantic-ui-react'

import { sortByDate } from '../sort'
import { ANIMATION_DELAY } from '../config';

class ListGridItem extends Component {
  render(){
    let {listData, deleteList} = this.props;
    let tasks = listData.tasks;
    let orderedTasks = sortByDate([...tasks], true);
    let upcomingTasks = orderedTasks.slice(0,3);

    return(
      <div className="lists-grid__item">
        <Link to={"/list/"+listData.id} draggable="false">
          <Container textAlign='right'>
            <Button icon='delete' color='red' 
              onClick={e=>{e.preventDefault();deleteList(listData.id)}}/> 
          </Container>
          <h4 className="lists-grid__item__title">{listData.title}</h4>
          <h5>Upcoming tasks</h5>
          <ol className="lists-grid__item__tasks">
          {upcomingTasks.map(task => (
              <li className="lists-grid__item__tasks__item" key={task.id}>
                {task.caption}
              </li>  
            ))
          }
          </ol>
        </Link>
      </div>
    )
  }
}

export default ListGridItem;