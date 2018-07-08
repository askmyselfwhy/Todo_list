import React, {Component } from 'react';
import EditableTask from './EditableTask'
import Task from './Task'

import config from '../../config';

class TaskContainer extends Component{
  constructor(props){
    super(props);
    console.log(props.taskData)
    this.state = {
      isEditable: false,
      caption: props.taskData.caption,
      endDate: props.taskData.endDate,
      priority: props.taskData.priority
    }
    setInterval(()=>{
      this.checkIfTaskCompleted();
    }, config.REFRESH_DELAY)
  }
  handleOnRate = (e, {rating, maxRating}) => {
    this.setState({priority: rating})
  }
  handleChange = (e, { name, value }) => {
    this.setState({ [name]: value });
  } 
  checkIfTaskCompleted(){
    let date = new Date();
    let taskDate = new Date(this.props.taskData.endDate);
    date.setHours(0,0,0,0);
    taskDate.setHours(0,0,0,0);
    if(date > taskDate && 
      !this.props.taskData.isChecked){
      this.props.checkTask(this.props.taskData.id)
    }
  }
  editTask = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if(this.state.isEditable){
      console.log(this.state.priority)
      let newTask = {
        ...this.props.taskData,
        caption: this.state.caption,
        endDate: this.state.endDate,
        priority: this.state.priority
      };
      this.setState({isEditable: !this.state.isEditable});
      this.props.editTask(newTask);
    }else{
      this.setState({isEditable: !this.state.isEditable});
    }
  }
  deleteTask = (e) => {
    e.preventDefault();
    e.stopPropagation();
    let id = this.props.taskData.id;
    this.props.deleteTask(id)
  }

  render(){
    let {id, isChecked} = this.props.taskData;
    let {checkTask} = this.props;
    let {isEditable} = this.state;
    let classes = (isChecked) ? "list__task--is-checked":"list__task";
    classes += (isEditable) ? " list__task--is-editable":"";
    return(
        <article
          key={id}          
          className={classes}
          onClick={e=>{(isEditable) ? e : checkTask(id)}}>
          {(isEditable) ?
            <EditableTask deleteTask={this.deleteTask} editTask={this.editTask}
              caption={this.state.caption} endDate={this.state.endDate}
              priority={this.state.priority}
              handleChange={this.handleChange}
              handleOnRate={this.handleOnRate}/>
            :
            <Task editTask={this.editTask} deleteTask={this.deleteTask}
             taskData={this.props.taskData}/>
          }
        </article>
    )
  }
}

export default TaskContainer;

