import React from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import DeleteIcon from '@material-ui/icons/Delete'
import IconButton from '@material-ui/core/IconButton';

const Task = ({ text, id, groupName, onDelete }) => {

  const classes = {
    card: {
      minWidth: 25,
      maxWidth: 150
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
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
  }

  this.dragStartHandler=e=>{
    e.dataTransfer.setData('id', id)
    e.dataTransfer.setData('fromGroup', groupName)
  }

  return (
    <div draggable onDragStart={e=>{
      e.dataTransfer.setData('id', id)
      e.dataTransfer.setData('fromGroup', groupName)
    }}>
      <Card style={{ background: 'rgba(255,255,255,0.5)'}}>
        <CardContent>
          <Typography color="textSecondary">
            Task
          </Typography>
          <Typography variant="headline" component="h2">
            {text}
          </Typography>
        </CardContent>
        <CardActions 
          class="mui--align-right">
            <IconButton style={{float: 'right'}} onClick={()=>onDelete(groupName, id)} className={classes.button} aria-label="Delete">
              <DeleteIcon />
            </IconButton>
        </CardActions>
      </Card>
    </div>
  )
}

Task.propTypes = {
  text: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  onDelete: PropTypes.func.isRequired
}

export default Task
