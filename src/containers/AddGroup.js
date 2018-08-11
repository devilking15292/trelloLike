import React from 'react'
import { connect } from 'react-redux'
import { addGroup } from '../actions'
import Button from '@material-ui/core/Button'
import Input from '@material-ui/core/Input'
import { withStyles } from '@material-ui/core/styles'



const AddGroup = ({ dispatch }) => {

  const styles = {
    margin10: {
      margin: '10px'
    } 
  }

  let groupName;
  dispatch(addGroup('open'))

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!groupName.value.trim()) {
          return
        }
        dispatch(addGroup(groupName.value))
        groupName.value = ''
      }}>
        <Input placeholder="Add Group..." style={styles.margin10} inputRef={node=>groupName=node} />
        <Button variant="contained" color="primary" type="submit">
          Add Group
        </Button>
      </form>
    </div>
  )
}

export default connect()(AddGroup)
