import React, { Component } from 'react'
import Photo from './Photo'
import Comments from './Comments'

class Single extends Component {
  render () {
    const { postId } = this.props.params
    // index of the post
    const i = this.props.posts.findIndex((post) => post.code === postId)
    // get us the post
    const post = this.props.posts[i]
    // get us the post comments
    const postComments = this.props.comments[postId] || []

    return (
      <div className='single-photo'>
        <Photo
          i={i}
          post={post}
          comments={this.props.comments}
          incrementLikes={this.props.incrementLikes} />
        <Comments
          postId={postId}
          postComments={postComments}
          addComment={this.props.addComment}
          removeComment={this.props.removeComment}
        />
      </div>
    )
  }
}

export default Single
