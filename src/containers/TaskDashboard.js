import React from 'react'
import { connect } from 'react-redux'
import TaskListCollection from '../components/TaskListCollection';
import { deleteTask, moveTask } from '../actions'

const mapStateToProps = state => ({
  taskLists: state.tasks
})

const mapDispatchToProps = dispatch => ({
  onDelete: (groupName, id) => dispatch(deleteTask(groupName, id)),
  onDrop: (fromGroup, toGroup, id) => dispatch(moveTask(fromGroup, toGroup, id))
})

export default connect(mapStateToProps, mapDispatchToProps)(TaskListCollection)
