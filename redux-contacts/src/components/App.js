import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchUsers } from '../actions/userActions'
import { Container } from '../ui'

import UserList from './UserList'

@connect(store => {
    return {
      users: store.users.users
    }
  })

export default class App extends Component {
  componentWillMount() {
    this.props.dispatch(fetchUsers())
  }
  render() {
    return (
      <div>
        <UserList users={this.props.users} />
      </div>
    )
  }
}

