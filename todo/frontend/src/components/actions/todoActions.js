import { GET_TODOS, ADD_TODO, DELETE_TODO, UPDATE_TODO } from './types'
import axios from 'axios'

export const getTodos = () => dispatch => {
    axios.get('api/todos/')
        .then(todo => dispatch({
            type: GET_TODOS,
            payload: todo.data
        }))
        .catch(err => console.log(err))
}

export const addTodos = (newTodo) => dispatch => {
    axios.post('api/todos/', newTodo)
        .then(todo => dispatch({
            type: ADD_TODO,
            payload: todo.data
        }))
        .catch(err => console.log(err))
}

export const deleteTodos = (delTodo) => dispatch => {
    axios.delete(`api/todos/${delTodo.id}/`)
        .then(() => dispatch({
            type: DELETE_TODO,
            payload: delTodo
        }))
        .catch(err => console.log(err))
}

export const updateTodo = (changeTodo) => dispatch => {
    axios.put(`api/todos/${changeTodo.id}/`, changeTodo)
        .then(() => dispatch({
            type: UPDATE_TODO,
            payload: changeTodo
        }))
        .catch(err => console.log(err))
}
