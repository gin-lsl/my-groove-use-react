import React, { Component } from 'react'
import TodoListItem from './TodoListItem'
import './todo-list.css'

class TodoList extends Component {
  constructor(props) {
    super(props)
    this.handleItemClick = this.handleItemClick.bind(this)
  }

  handleItemClick(id) {
    this.props.onTodoListItemClick(id)
  }

  render() {
    return (
      <div className='todo-list'>
        {this.props.todos.map(todo => (
          <TodoListItem key={todo.id} todo={todo} onClick={this.handleItemClick} />
        ))}
      </div>
    )
  }
}

export default TodoList