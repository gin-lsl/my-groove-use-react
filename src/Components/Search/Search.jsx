import React from 'react'

import './search.css'

import { MdSearch, MdClear } from 'react-icons/lib/md'

import { verticalAlign } from '../../Utils/vars.js'

/**
 * 组件 当搜索组件没有获取焦点
 */
class SearchNotFocus extends React.Component {
  constructor(props) {
    super(props)
  }

  handleClick() {
  }

  render() {
    return (
      <div className='search-not-focus' onClick={this.props.onClick}>
        <MdSearch size={30} style={verticalAlign} />
      </div>
    )
  }
}

/**
 * 组件 当搜索组件有获取焦点
 */
class SearchHasFocus extends React.Component {
  constructor() {
    super()
    this.state = {
      inputValue: ''
    }
    this.handleSearch = this.handleSearch.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleInputChange(evt) {
    this.setState({
      inputValue: evt.target.value
    })
  }

  handleSearch() {
    this.setState({
      inputValue: ''
    })
  }

  render() {
    return (
      <div className='search-has-focus'>
        <div className="input-wrap">
          <input type="text"
            placeholder='搜索'
            value={this.state.inputValue}
            onChange={this.handleInputChange}
            onBlur={this.props.onBlur} />
          <span className="btn clear">
            <MdClear size={30} style={verticalAlign} />
          </span>
        </div>
        <span className="btn search" onClick={this.handleSearch}>
          <MdSearch size={30} style={verticalAlign} />
        </span>
      </div>
    )
  }
}

/**
 * 搜索组件
 */
class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isFocus: false
    }
    this.handleClickWhenSearchBtnNotFocus = this.handleClickWhenSearchBtnNotFocus.bind(this)
  }

  handleClickWhenSearchBtnNotFocus() {
    console.log('处理点击事件,btn没有获取焦点')
    this.setState({
      isFocus: true
    })
  }

  render() {
    return (
      <div>
        {this.props.isSearchFocus ? <SearchHasFocus onBlur={this.props.onChangeToFocus} /> : <SearchNotFocus onClick={this.props.onChangeToFocus} />}
      </div>
    )
  }
}

export default Search