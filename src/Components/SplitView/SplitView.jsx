import React from 'react'
import './split-view.css'

import { BrowserRouter as Router, Link, Redirect, HashRouter } from 'react-router-dom'
import { } from 'react-router'
import { MdMenu, MdMusicNote, MdAccessTime, MdPlaylistPlay, MdPlayArrow, MdSettings } from 'react-icons/lib/md'

import { verticalAlign } from '../../Utils/vars.js'

class SplitViewHead extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='split-view-head'>
        <div className="top-bar-hamburger-btn" onClick={this.props.onSplitViewClose}>
          <MdMenu size={30} style={verticalAlign} />
        </div>
      </div>
    )
  }
}

class SplitViewFoot extends React.Component {
  constructor() {
    super()

  }

  render() {
    return (
      <div className='split-view-foot'>
        <div className="user-info">
          <div className="user-avatar-wrap">
            <img src="/user.jpg" alt="荷兰酒" width='20' height='20' />
          </div>
          <div className="user-name">LSL GIN</div>
        </div>
        <div className="settings">
          <MdSettings size={20} style={verticalAlign} />
        </div>
      </div>
    )
  }
}

class SplitViewItem extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='split-view-item'>
        <Link to={this.props.link}>
          <div className='split-view-item-icon'>{this.props.icon}</div>
          <div className="split-view-item-title">{this.props.title}</div>
        </Link>
      </div>
    )
  }
}

class SplitView extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='split-view' style={{ display: this.props.isSplitViewOpen ? 'flex' : 'none' }}>
        <div className="split-view-inner">
          <SplitViewHead onSplitViewClose={this.props.onSplitViewClose} />
          <Router>
            <div className="split-view-menu-list">
              <SplitViewItem link='/home' icon={<MdMusicNote size={20} style={verticalAlign} />} title='我的音乐' />
              <SplitViewItem link='/recent' icon={<MdAccessTime size={20} style={verticalAlign} />} title='最近播放的内容' />
              <SplitViewItem link='/playlists' icon={<MdPlaylistPlay size={20} style={verticalAlign} />} title='播放列表' />
              <SplitViewItem link='/playing' icon={<MdPlayArrow size={20} style={verticalAlign} />} title='正在播放' />
            </div>
          </Router>
          <SplitViewFoot />
        </div>
        <div className="split-view-padding" onClick={this.props.onSplitViewClose}></div>
      </div>
    )
  }
}

export default SplitView