import { createStore, compose } from 'redux'
import { syncHistoryWithStore } from 'react-router-redux'
import { browserHistory } from 'react-router'

// Import the root reducer
import rootReducer from './reducers/index'

import comments from './data/comments'
import posts from './data/posts'

// Create an object for the default data
const defaultState = {
  posts,
  comments
}

const enhancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
)

if (module.hot) {
  console.log('hot reloading reducers')
  module.hot.accept('./reducers/', () => {
    const hotRootReducer = require('./reducers/index').default
    store.replaceReducer(hotRootReducer)
    module.hot.accept()
  })
}

export const store = createStore(rootReducer, defaultState, enhancers)

export const history = syncHistoryWithStore(browserHistory, store)
