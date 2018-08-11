import React from 'react'
import { connect } from 'react-redux'
import { addTask } from '../actions'
import Button from '@material-ui/core/Button'
import Input from '@material-ui/core/Input'
import { withStyles } from '@material-ui/core/styles'
import AddIcon from '@material-ui/icons/Add';
import IconButton from '@material-ui/core/IconButton';

const AddTask = ({ dispatch, state }) => {

  const classes = {
    margin10: {
      margin: 10,
      width: '85%'
    },

    button: {
      margin: 10
    }
  }

  let taskName;

  let togroup = "open";

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!taskName.value.trim()) {
          return
        }
        
        dispatch(addTask({text: taskName.value, togroup}))
        taskName.value = '';
      }}>

        <Input inputRef={node=>taskName=node} placeholder="Add tasks..." style={classes.margin10} />
        
        <IconButton aria-label="Delete" type="submit">
          <AddIcon />
        </IconButton>
      </form>
    </div>
  )
}


export default connect()(AddTask)
