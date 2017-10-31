import { 
  createStore, 
  combineReducers, 
  applyMiddleware 
} from 'redux'
import logger from 'redux-logger'

//Counter Reducer
const counterReducer = (state={ count: 0 }, action) => {
  
  const nextState = Object.assign({}, state)

  switch (action.type) {
    case 'ADD':
      nextState.count = state.count + 1
      return nextState
      break;
    case 'MINUS':
      nextState.count = state.count - 1
      return nextState
      break;
    case 'RESET':
      nextState.count = 0
      return nextState
    default:
      return state
      break;
  }
}

// TODO Reducer
const todoReducer = (state={ todos: [] }, action) => {

  const nextState = Object.assign({}, state)

  switch (action.type) {
    case 'NEW':
      nextState.todos.push(action.payload)
      return nextState
      break;
    case 'DELETE':
      nextState.todos.pop()
      return nextState
      break;
    case 'DELETE_ALL':
      nextState.todos = []
      return nextState
      break;
    default:
      return state
      break;
  }
}

// const logger = store => next => action => {
//   console.log('dispatching', action)
//   let result = next(action)
//   console.log('next state', store.getState())
//   return result
// }

const store = createStore(combineReducers(
    {
      counterReducer: counterReducer,
      todoReducer: todoReducer
    }
  ), 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), 
  applyMiddleware(logger)
)
// console.log(store)
const counterEl = document.querySelector('#counter')
const todoInput = document.querySelector('#todo')
const todoList = document.querySelector('.todo-list')

const render = () => {
  // console.log('In render')
  console.log(store.getState())
  const state = store.getState()
  counterEl.innerText = state.counterReducer.count.toString()
  renderList(state)
}

const renderList = state => {
  todoList.innerHTML = ''
  for (let i = 0; i < state.todoReducer.todos.length; i++) {
    const li = document.createElement('li')
    const todo = state.todoReducer.todos[i]
    li.innerHTML = todo.toString()
    todoList.appendChild(li)
  }
}

render()

store.subscribe(render)

// Actions
document.querySelector('#add')
  .addEventListener('click', () => store.dispatch({ type: 'ADD' }))
document.querySelector('#minus')
  .addEventListener('click', () => store.dispatch({ type: 'MINUS' }))
document.querySelector('#reset')
  .addEventListener('click', () => store.dispatch({ type: 'RESET' }))
document.querySelector('#new')
  .addEventListener('click', () => {
    store.dispatch({
      type: 'NEW',
      payload: todoInput.value
    })
    todoInput.value = ''
  })
document.querySelector('#todo')
  .addEventListener('keydown', e => {
    if(e.keyCode === 13) {
      store.dispatch({
        type: 'NEW', 
        payload: todoInput.value 
      })
      todoInput.value = ''
    }
  })
document.querySelector('#delete')
  .addEventListener('click', () => store.dispatch({ type: 'DELETE' }))
document.querySelector('#delete-all')
  .addEventListener('click', () => store.dispatch({ type: 'DELETE_ALL' }))
