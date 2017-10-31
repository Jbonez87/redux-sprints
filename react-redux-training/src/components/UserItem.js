import React from 'react'
import PropTypes from 'prop-types'

const UserItem = props => (
  <div className={props.className}>
    <div id={props.id}>
      <img src={props.user.picture.thumbnail} />
      <span>{props.user.login.username}</span>
    </div>
  </div>
)

UserItem.propTypes = {
  user: PropTypes.object.isRequired
}

export default UserItem