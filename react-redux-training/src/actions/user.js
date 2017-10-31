import axios from 'axios'

export default () => {
  let url = new URL('https://randomuser.me/api/?results=10')
  return {
    type: 'FETCH_USER',
    payload: axios.get(url)
  }
}