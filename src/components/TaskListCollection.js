import React from 'react'
import PropTypes from 'prop-types'
import TaskList from './TaskList'
import Grid from '@material-ui/core/Grid';
import AddTask from '../containers/AddTask'

const TaskListCollection = ({ taskLists, onDelete, onDrop }) => {

  this.handleDrop = (e, toGroup)=> {
    //console.log(toGroup)
    console.log(e)
    onDrop( e.dataTransfer.getData('fromGroup') , toGroup, e.dataTransfer.getData('id') )
  }

  this.handleDragOver = (e) => {
    //nothing to do anyway
    //console.log(e)
    e.preventDefault()
    e.stopPropagation()
  }

  return (  
      <Grid style={{margin: '10px'}} container spacing={16}>
        {Object.keys(taskLists).map(taskGroupName =>
            <Grid key={taskGroupName} style={{margin: '10px', background: 'rgba(255,255,255,0.8)'}} item xs={12} md={3} onDragOver={(e)=>this.handleDragOver(e)} onDrop={(e)=>this.handleDrop(e, taskGroupName)}>
              <TaskList
                tasks={taskLists[taskGroupName]}
                onDelete={onDelete}
                groupName={taskGroupName.toString()}
                key={taskGroupName}
              />
              {(taskGroupName==='open')?<AddTask />:""}
            </Grid>
        )}
      </Grid>
  )
}

TaskListCollection.propTypes = {
  taskLists: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired).isRequired
}

export default TaskListCollection
