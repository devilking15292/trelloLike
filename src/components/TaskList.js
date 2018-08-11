import React from 'react'
import PropTypes from 'prop-types'
import Task from './Task'
import Card from '@material-ui/core/Card'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography'
import DeleteIcon from '@material-ui/icons/Delete'
import ListSubheader from '@material-ui/core/ListSubheader';

const TaskList = ({ tasks, groupName, onDelete}) => {

  const classes = {
    title: {
      marginBottom: 16,
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
    button: {
      margin: 3,
    },
    list: {
      width: '98%',
      minHeight: '75vh',
      maxHeight: '75vh',
      overflow: 'auto',
    },
  }

  return (
    <List style={classes.list}>
      <ListItem key={'header'} cols={1}>
        <ListItemText primary={groupName} secondary="all Tickets" />
      </ListItem>
      {tasks.map(task => (
        <ListItem key={task.id} cols={1}>
          <Task
            key={task.id}
            {...task}
            groupName={groupName}
            onDelete={onDelete}
          />
        </ListItem>
      ))}
    </List>
  )
}

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired
}

export default TaskList
