import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getTodos, deleteTodos, updateTodo } from '../actions/todoActions'

class Todo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            text: 'Завершить',
            color: this.props.todo.completed === false ? 'list-group-item d-flex justify-content-between align-items-center' : 'list-group-item d-flex justify-content-between align-items-center list-group-item-success'
        }
        this.deleteHandler = this.deleteHandler.bind(this)
        this.changeHandler = this.changeHandler.bind(this)
    }
    deleteHandler(e) {
        this.props.deleteTodos(this.props.todo)
    }
    changeHandler(e) {
        const comp = this.props.todo.completed === false ? true : false
        const changeTodo = {
            "id": this.props.todo.id,
            "text": this.props.todo.text,
            "completed": comp
        }
        if (this.props.todo.completed === false) {
            this.setState({
                color: "list-group-item d-flex justify-content-between align-items-center list-group-item-success"
            })
        } else {
            this.setState({
                color: "list-group-item d-flex justify-content-between align-items-center"
            })
        }
        this.props.updateTodo(changeTodo)
    }
    render() {
        return (
            <li className={this.state.color}>
                <h2>{this.props.todo.text}</h2>
                <div className="btn-group" role="group" aria-label="Basic example">
                    <button onClick={this.changeHandler} type="button" className="btn btn-primary btn-sm">{this.state.text}</button>
                    <button onClick={this.deleteHandler} type="button" className="btn btn-danger btn-sm">Удалить</button>
                </div>
            </li>
        )
    }
}

export default connect(null, { deleteTodos, updateTodo })(Todo)
