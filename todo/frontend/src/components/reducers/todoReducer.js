import { GET_TODOS, ADD_TODO, DELETE_TODO, UPDATE_TODO } from '../actions/types'

const intitState = {
    todos: []
}

export default function (state = intitState, action) {
    switch (action.type) {
        case UPDATE_TODO:
            return {
                ...state,
                todos: state.todos
            }
        case DELETE_TODO:
            return {
                ...state,
                todos: state.todos.filter(item => item !== action.payload)
            }
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, action.payload]
            }
        case GET_TODOS:
            return {
                ...state,
                todos: action.payload
            }
        default:
            return state
    }
}