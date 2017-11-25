import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Article } from '../ui'

export default class User extends Component {
  render() {
    return (
      <Article>
        {this.props.name} - {this.props.email}
      </Article>
    )
  }
}
