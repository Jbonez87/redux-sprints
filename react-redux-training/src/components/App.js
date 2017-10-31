import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Button from './Button'
import UserItem from './UserItem'

class App extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { data, fetchUsers } = this.props
    return (
      <div className="container">
        <section className="box">
          <Button 
            onClick={fetchUsers}
            text="Fetch Users"
            className="btn btn-blue"
          />
          <div id="users">
            {data.users.map((user, i) => {
              return <UserItem 
                       key={i}
                       user={user}
                       className="success"
                       id="user-item"
                     />
            })}
          </div>
        </section>
      </div>
    )
  }
}

export default App
