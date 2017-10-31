const initialState = {
  users: [],
  loading: false,
  error: null,
}

// Promise Method
// Pending case
// Fulfilled Case
// Rejected Case
const usersReducer = (state = initialState, action) => {
  let users;

  switch (action.type) {
    case 'FETCH_USER_PENDING':
      return {
        ...state,
        loading: true
      }
      break;
    case 'FETCH_USER_FULFILLED':
      users = action.payload.data.results
      return {
        ...state,
        loading: false,
        users
      }
      break;
    case 'FETCH_USER_REJECTED':
      return {
        ...state,
        loading: false,
        error: `${action.payload.message}`
      }
      break;
    default:
      return state
  }
}

export default usersReducer

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