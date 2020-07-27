import React, { Component, Fragment } from 'react'
import ReactDOM from 'react-dom'
import Header from './layout/Header'
import TodoForm from './layout/todoForm'
import TodoList from './layout/todoList'
import { Provider } from 'react-redux'
import store from './store'

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Fragment>
                    <Header />
                    <br />
                    <TodoForm />
                    <hr />
                    <TodoList />
                </Fragment>
            </Provider>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))