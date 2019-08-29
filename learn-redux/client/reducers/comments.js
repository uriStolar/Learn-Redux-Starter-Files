// A reducer takes in two things:

// 1. The action (info about what happened)
// 2. A copy of the current state
function postComments (state = [], action) {
  switch (action.type) {
    case 'ADD_COMMENT':
      return [
        ...state, {
          user: action.author,
          text: action.comment
        }
      ]
    case 'REMOVE_COMMENT':
      return [
        ...state.slice(0, action.i),
        ...state.slice(action.i + 1)
      ]
    default:
      return state
  }
}

export function comments (state = [], action) {
  if (typeof action !== 'undefined') {
    return {
      // take the current state
      ...state,
      // overwrite this post with a new one
      [action.postId]: postComments(state[action.postId], action)
    }
  }
}
