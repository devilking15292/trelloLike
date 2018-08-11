import React from 'react'
import AddGroup from '../containers/AddGroup'
import TaskDashboard from '../containers/TaskDashboard'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

const App = (props) => {
  const { classes } = props;
  return (
    <div style={{width: '99%'}}>
      <AppBar style={{margin: '10px',  background: 'rgba(255,255,255,0.8)'}} position="static" color="default">
        <Toolbar>
          <Typography variant="title" color="inherit" className={classes.flex}>
            Trello-Like
          </Typography>
          <AddGroup />
        </Toolbar>
      </AppBar>
      
      <TaskDashboard />
    </div>
  )
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default  withStyles(styles)(App)
