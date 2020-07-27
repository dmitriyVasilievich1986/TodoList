import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getTodos, deleteTodos, updateTodo } from '../actions/todoActions'
import Todo from './Todo'

class TodoList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            completed: "list-group-item d-flex justify-content-between align-items-center",
            notCompleted: "list-group-item list-group-item-dark d-flex justify-content-between align-items-center"
        }
    }
    componentWillMount() {
        this.props.getTodos()
    }
    render() {
        return (
            <div>
                <ul className="list-group">
                    {this.props.todos.map(todo => (<Todo key={todo.id} todo={todo} />))}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    todos: state.todos.todos
})

export default connect(mapStateToProps, { getTodos, deleteTodos, updateTodo })(TodoList)