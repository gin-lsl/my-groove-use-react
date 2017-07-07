import React, { Component } from 'react'
import './todo-list-item.css'

class TodoListItem extends Component {
  constructor(props) {
    super(props)
    this.handleItemClick = this.handleItemClick.bind(this)
  }

  handleItemClick() {
    this.props.onClick(this.props.todo.id)
  }

  render() {
    return (
      <div className='todo-list-item' onClick={this.handleItemClick}>
        {this.props.todo.content}
      </div>
    )
  }
}

export default TodoListItem