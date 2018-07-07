import React, {Component } from 'react';
import EditableTask from './EditableTask'
import Task from './Task'

import config from '../../config';

class TaskContainer extends Component{
  constructor(props){
    super(props);
    this.state = {
      isEditable: false,
      text: this.props.taskData.caption,
      endDate: this.props.taskData.endDate,
    }
    this.editTask = this.editTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);

    setInterval(()=>{
      this.checkIfTaskCompleted();
    }, config.REFRESH_DELAY)
  }
  handleChange = (e, { name, value }) => this.setState({ [name]: value })
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
  editTask(e){
    e.preventDefault();
    e.stopPropagation();
    if(this.state.isEditable){
      let newTask = {...this.props.taskData};
      newTask.caption = this.state.text;
      newTask.endDate = this.state.endDate;
      this.setState({isEditable: !this.state.isEditable});
      this.props.editTask(newTask);
    }else{
      this.setState({isEditable: !this.state.isEditable});
    }
  }
  deleteTask(e){
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
        <div
          key={id}          
          className={classes}
          onClick={e=>{(isEditable) ? e : checkTask(id)}}>
          {(isEditable) ?
            <EditableTask deleteTask={this.deleteTask} editTask={this.editTask}
              text={this.state.text} endDate={this.state.endDate}
              handleChange={this.handleChange}/>
            :
            <Task editTask={this.editTask} deleteTask={this.deleteTask}
             taskData={this.props.taskData}/>
          }
        </div>
    )
  }
}

export default TaskContainer;

