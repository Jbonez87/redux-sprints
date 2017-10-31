import {
  createStore,
  // combineReducers,
  applyMiddleware,
  compose,
} from 'redux'
import logger from 'redux-logger'
// import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'
import axios from 'axios'
import usersReducer from './reducers/users'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default createStore(
  usersReducer,
  composeEnhancers(
    applyMiddleware(
      logger,
      promise()
    )
  )
)