import { 
  createStore, 
  combineReducers, 
  applyMiddleware 
} from 'redux'
import logger from 'redux-logger'
// import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'
import axios from 'axios'

const initialState = {
  sendingRequest: false,
  requestRecieved: false,
  user: {
    name: '',
    email: '',
    gender: '',
  },
  status: '',
  statusClass: ''
}

// Thunk Method 
// userReducer
// const userReducer = (state = initialState, action) => {
//   const user = {
//     name: '',
//     email: '',
//     gender: ''
//   }
  
//   switch (action.type) {
//     case 'GET_USER':
//       return {
//         ...state, 
//         sendingRequest: true, 
//         status: 'Pending...', 
//         statusClass: 'pending'
//       }
//       break;
//     case 'USER_RECIEVED':
//       user.name = `${action.payload[0].name.first}`
//       user.email = action.payload[0].email
//       user.gender = action.payload[0].gender
//       return {
//         ...state,
//         sendingRequest: false,
//         user,
//         status: 'User recieved',
//         statusClass: 'success'
//       }
//       break;
//     case 'ERROR': 
//       return {
//         ...state,
//         sendingRequest: false,
//         status: `${action.payload.message}`,
//         statusClass: 'error'
//       }
//       break;
//     default:
//       return state
//   }
// }

// Promise Method
// Pending case
// Fulfilled Case
// Rejected Case
const userReducer = (state = initialState, action) => {
  const user = {
    name: '',
    email: '',
    gender: ''
  }

  switch (action.type) {
    case 'FETCH_USER_PENDING':
      return {
        ...state,
        sendingRequest: true,
        status: 'Pending...',
        statusClass: 'pending'
      }
      break;
    case 'FETCH_USER_FULFILLED':
      user.name = `${action.payload.data.results[0].name.first} ${action.payload.data.results[0].name.last}`
      user.email = action.payload.data.results[0].email
      user.gender = action.payload.data.results[0].gender
      return {
        ...state,
        sendingRequest: false,
        user,
        status: 'User recieved',
        statusClass: 'success'
      }
      break;
    case 'FETCH_USER_REJECTED':
      return {
        ...state,
        sendingRequest: false,
        status: `${action.payload.message}`,
        statusClass: 'error'
      }
      break;
    default:
      return state
  }
}

// Thunk store 
// const store = createStore(userReducer, applyMiddleware(logger, thunk))
// Promise store
const store = createStore(userReducer, applyMiddleware(logger, promise()))
const nameEl = document.querySelector('#name')
const emailEl = document.querySelector('#email')
const genderEl = document.querySelector('#gender')
const statusEl = document.querySelector('#status')

const render = () => {
  const state = store.getState()
  nameEl.innerHTML = state.user.name
  emailEl.innerHTML = state.user.email
  genderEl.innerHTML = state.user.gender
  statusEl.innerHTML = state.status
  statusEl.className = state.statusClass
}

render()
store.subscribe(render)

// Thunk Actions
// document.querySelector('#getUser')
//   .addEventListener('click', () => store.dispatch(dispatch => {
//     dispatch({ type: 'GET_USER' })
//     let url = new URL('https://randomuser.me/api/')
//     console.log(url)
//     axios.get(url)
//       .then(res => dispatch({ type: 'USER_RECIEVED', payload: res.data.results }))
//       .catch(error => dispatch({ type: 'ERROR', payload: error}))
//     dispatch({ type: 'AFTER ASYNC ACTION' })
//   })
// )

// Promise Actions
document.querySelector('#getUser')
  .addEventListener('click', () => {
    let url = new URL('https://randomuser.me/api/')
    store.dispatch({ 
      type: 'FETCH_USER', 
      payload: axios.get(url)
    })
  })