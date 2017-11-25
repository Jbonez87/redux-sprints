import React, { Component } from 'react'
import PropTypes from 'prop-types'

import User from './User'
import { 
  Container,
  Header
} from '../ui'

export default class UserList extends Component {
  render() {
    if (Object.getOwnPropertyNames(this.props.users).length === 0) {
      return (<div></div>)
    }
    let userNodes = this.props.users.map(user => {
      return (
        <User 
          name={user.name} 
          email={user.email}
          key={user.id}
        >
          {user.name}
        </User>
      )
    })
    return (
      <Container border='2px solid rgb(80, 233, 146)'>
        <Header color='rgb(85, 212, 214)'>Users</Header>
        {userNodes}
      </Container>
    )
  }
}
