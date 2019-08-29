// Increment likes
export function incrementLikes (index) {
  return {
    type: 'INCREMENT_LIKES',
    index
  }
}
// Add comment
export function addComment (postId, author, comment) {
  return {
    type: 'ADD_COMMENT',
    postId,
    author,
    comment
  }
}

// Remove comment
export function removeComment (postId, i) {
  return {
    type: 'REMOVE_COMMENT',
    postId,
    i
  }
}
