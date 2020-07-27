import React, { Component } from 'react'
import { addTodos } from '../actions/todoActions'
import { connect } from 'react-redux'

class TodoForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            text: ''
        }
        this.onClick = this.onClick.bind(this)
        this.onChange = this.onChange.bind(this)
    }
    onClick(e) {
        e.preventDefault()
        const todo = {
            "text": this.state.text,
            "completed": false
        }
        this.props.addTodos(todo)
        this.setState({ text: '' })
    }
    onChange(e) {
        this.setState({ text: e.target.value })
    }
    render() {
        return (
            <div>
                <form>
                    <div className="form-group">
                        <div className="input-group input-group-sm mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="inputGroup-sizing-sm">Text</span>
                            </div>
                            <input value={this.state.text} onChange={this.onChange} type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                        </div>
                    </div>
                    <button onClick={this.onClick} type="submit" className="btn btn-outline-primary btn-sm">Добавить</button>
                </form>
            </div>
        )
    }
}

export default connect(null, { addTodos })(TodoForm)