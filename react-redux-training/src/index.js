import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import UsersContainer from './containers/UsersContainer'
import UsersStore from './store'

render(
  <Provider store={UsersStore}>
    <UsersContainer />
  </Provider>, 
  document.getElementById('root')
)