import React, { Component } from 'react'
import TodoInput from './TodoInput'
import TodoList from './TodoList'
import './todo.css'

class Todo extends Component {
  constructor() {
    super()
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleTodoListAdd = this.handleTodoListAdd.bind(this)
    this.handleTodoListItemClick = this.handleTodoListItemClick.bind(this)
    this.state = {
      inputValue: '',
      todos: [
        {
          id: 0,
          content: '吃饭'
        },
        {
          id: 1,
          content: '写作业'
        }
      ]
    }
  }

  handleInputChange(todoText) {
    this.setState({
      inputValue: todoText
    })
  }

  getNextId() {
    let _todos = this.state.todos
    let maxId = _todos ? 0 : _todos[0].id
    _todos.forEach(todo => {
      if (todo.id > maxId) {
        maxId = todo.id
        return
      }
    })
    return maxId + 1
  }

  handleTodoListAdd() {
    if (this.state.inputValue == '') {
      return
    }
    this.setState((prevState, prop) => {
      let _todos = prevState.todos.slice()
      let _id = this.getNextId()
      _todos.push({
        id: _id,
        content: prevState.inputValue
      })
      return {
        todos: _todos,
        inputValue: ''
      }
    })
  }

  handleTodoListItemClick(id) {
    console.log('handleTodoListItemClick id: ' + id)
    this.setState((prevState, prop) => {
      let _index = prevState.todos.findIndex((todo) => todo.id === id)
      if (_index !== -1) {
        let _todo = prevState.todos.slice()
        _todo.splice(_index, 1)
        return {
          todos: _todo
        }
      }
    })
  }

  render() {
    return (
      <div className='todo'>
        <h2>清单</h2>
        <TodoInput inputValue={this.state.inputValue}
          onInputValueChange={this.handleInputChange}
          onAddTodo={this.handleTodoListAdd} />
        <TodoList todos={this.state.todos}
          onTodoListItemClick={this.handleTodoListItemClick} />
      </div>
    )
  }
}

export default Todo