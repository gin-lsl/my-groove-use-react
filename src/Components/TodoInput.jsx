import React, { Component } from 'react'
import './todo-input.css'

class TodoInput extends Component {
  constructor(props) {
    super(props)
    this.handleInputValueChange = this.handleInputValueChange.bind(this)
    this.handleKeyPress = this.handleKeyPress.bind(this)
    this.handleButtonClick = this.handleButtonClick.bind(this)
  }

  handleInputValueChange(evt) {
    this.props.onInputValueChange(evt.target.value)
  }

  handleKeyPress(evt) {
    if (evt.which === 13) {
      this.props.onAddTodo()
    }
  }

  handleButtonClick() {
    this.props.onAddTodo()
  }

  render() {
    return (
      <div className='todo-input'>
        <input type="text" value={this.props.inputValue} onKeyPress={this.handleKeyPress} onChange={this.handleInputValueChange} />
        <button onClick={this.handleButtonClick}>添加</button>
      </div>
    )
  }
}

export default TodoInput