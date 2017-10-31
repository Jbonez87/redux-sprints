import { connect } from 'react-redux'
import App from '../components/App'
import fetchUsers from '../actions/user'

const mapStateToProps = state => ({
  data: state
})

const mapDispatchToProps = dispatch => {
  return {
    fetchUsers: () => dispatch(fetchUsers())
  }
}

const UsersContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

export default UsersContainer