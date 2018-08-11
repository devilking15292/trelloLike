let nextTaskId = 0
export const addTask = ({togroup, text}) => ({
  type: 'ADD_TASK',
  id: nextTaskId++,
  text,
  togroup
})

export const deleteTask = (fromgroup, id) => ({
  type: 'DELETE_TASK',
  id,
  fromgroup
})

export const moveTask = (fromgroup, togroup, id) => ({
  type: 'MOVE_TASK',
  id,
  fromgroup,
  togroup
})

export const addGroup = name => ({
  type: 'ADD_GROUP',
  name,
})