// A reducer takes in two things:

// 1. The action (info about what happened)
// 2. A copy of the current state

export function posts (state = [], action) {
  switch (action.type) {
    case 'INCREMENT_LIKES':
      const i = action.index
      return [
        ...state.slice(0, i), // before the one we are updating
        { ...state[i], likes: state[i].likes + 1 }, // incrementing specific like+1
        ...state.slice(i + 1) // after the one we are updating
      ]
    default:
      return state
  }
}
