import React from 'react'
import './split-view.css'

import { Link } from 'react-router-dom'
import { MdMenu, MdMusicNote, MdAccessTime, MdPlaylistPlay, MdPlayArrow, MdSettings } from 'react-icons/lib/md'

import { verticalAlign, PUBLIC_URL } from '../../Utils/vars.js'

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
            <img src={PUBLIC_URL + '/user.jpg'} alt="荷兰酒" width='20' height='20' />
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
      <div className='split-view-item' onClick={this.props.onSplitViewItemClicked}>
        <Link to={this.props.link}>
          <div className='split-view-item-icon'>{this.props.icon}</div>
          <div className="split-view-item-title">{this.props.title}</div>
        </Link>
      </div>
    )
  }
}

/**
 * 侧边栏
 */
class SplitView extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='split-view' style={{ display: this.props.isSplitViewOpen ? 'flex' : 'none' }}>
        <div className="split-view-inner">
          <SplitViewHead onSplitViewClose={this.props.onSplitViewClose} />
          <div className="split-view-menu-list">
            <SplitViewItem link='/'
              icon={<MdMusicNote size={20} style={verticalAlign} />}
              title='我的音乐'
              onSplitViewItemClicked={this.props.onSplitViewClose} />
            <SplitViewItem link='/testmd'
              icon={<MdAccessTime size={20} style={verticalAlign} />}
              title='最近播放的内容'
              onSplitViewItemClicked={this.props.onSplitViewClose} />
            <SplitViewItem link='/playlists'
              icon={<MdPlaylistPlay size={20} style={verticalAlign} />}
              title='播放列表'
              onSplitViewItemClicked={this.props.onSplitViewClose} />
            <SplitViewItem link='/playing'
              icon={<MdPlayArrow size={20} style={verticalAlign} />}
              title='正在播放'
              onSplitViewItemClicked={this.props.onSplitViewClose} />
          </div>
          <SplitViewFoot />
        </div>
        <div className="split-view-padding" onClick={this.props.onSplitViewClose}></div>
      </div>
    )
  }
}

export default SplitView