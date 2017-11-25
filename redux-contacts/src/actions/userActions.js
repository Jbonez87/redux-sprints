import axios from 'axios'

export const fetchUsers = () => dispatch => {
  const url = new URL('/users', 'https://jsonplaceholder.typicode.com')
  axios.get(url)
  .then(response => dispatch({
    type: 'FETCH_USERS_FULFILLED',
    payload: response.data
  }))
  .catch(err => dispatch({
    type: 'FETCH_USERS_REJECTED',
    payload: err
  }))
}

