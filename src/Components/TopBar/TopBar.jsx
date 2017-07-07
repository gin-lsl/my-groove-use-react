import React from 'react'

import './top-bar.css'

import Search from '../Search/Search'

import { MdMenu } from 'react-icons/lib/md'

class TopBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isSearchFocus: false
    }
    this.handleSearchFocus = this.handleSearchFocus.bind(this)
  }

  handleSearchFocus() {
    this.setState({
      isSearchFocus: !this.state.isSearchFocus
    })
  }

  render() {
    let topBarTitleClass = 'top-bar-title ' + (this.state.isSearchFocus ? 'hide' : 'show')
    return (
      <div className='top-bar'>
        <div className='top-bar-hamburger-btn' onClick={this.props.onHumburgerClick}>
          <MdMenu size={30} style={{ verticalAlign: 'baseline' }} />
        </div>
        {!this.state.isSearchFocus && <div style={{ flexGrow: 1 }}>{this.props.title || '我的音乐'}</div>}
        <div className='top-bar-search' style={{ flexGrow: this.state.isSearchFocus ? 1 : 0 }}>
          <Search isSearchFocus={this.state.isSearchFocus}
            onChangeToFocus={this.handleSearchFocus} />
        </div>
      </div>
    )
  }
}

export default TopBar