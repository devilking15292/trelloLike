const tasks = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return findGroupAndAdd(state, action);

    case 'DELETE_TASK':
      return findgroupAndRemove(state, action);

    case 'MOVE_TASK':
      return findGroupAndMove(state, action);
    
    case 'ADD_GROUP':
      return addGroup(state, action);
    
    default:
      return state
  }
}

let addGroup = (state, action) => {
  return {...state,
    [action.name]: []
  }
}

let findGroupAndAdd = (state, action) => {
  let groupObj = {};

  if(state.hasOwnProperty(action.togroup)) {
    groupObj = state[action.togroup];
  }

  return {...state,
    [action.togroup]: [
      ...groupObj,
      {...action}
    ]
  }
}

let findGroupAndMove = (state, action) => {
  let groupObj = {};

  if(state.hasOwnProperty(action.fromgroup)) {
    groupObj = state[action.fromgroup].filter(e=> e.id == action.id);
    if(!groupObj)
      return state;
  }

  return findgroupAndRemove( findGroupAndAdd(state, {...groupObj[0], togroup: action.togroup}), {...groupObj[0], fromgroup: action.fromgroup});
}

let findgroupAndRemove = (state, action) => {

  if(!state.hasOwnProperty(action.fromgroup)) {
    return state;
  }

  return {...state,
    [action.fromgroup]: [
      ...state[action.fromgroup].filter(e=> e.id != action.id)
    ]
  }
}

export default tasks
