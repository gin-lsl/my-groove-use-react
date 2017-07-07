import React from 'react'
import './play-status-bar.css'

import { MdFirstPage, MdLastPage, MdPlayArrow, MdPause } from 'react-icons/lib/md'

import { verticalAlign} from '../../Utils/vars.js'

/**
 * 播放栏上方进度条
 */
class PlayStatusBarProcess extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='play-status-bar-process'>
        {/*已经播放的时间*/}
        <div className="has-time">1:00</div>
        <div className="process-wrap">
          <div className="process-has-time"></div>
          <div className="process-current-point"></div>
          <div className="process-remaining-time"></div>
        </div>
        {/*剩余时间*/}
        <div className="remaining-time">3:00</div>
      </div>
    )
  }
}

/**
 * 播放栏下方的操作区
 */
class PlayStatusBarMusicActions extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='play-status-bar-music-actions'>
        <div className="bar-actions-left">
          <div className="img-wrap">
            <img src="/cover01.jpg" alt="test" width='50' height='50' />
          </div>
          <div className='info-wrap'>
            <div className="title">花头台</div>
            <div className="singer">东京塔子</div>
          </div>
        </div>
        <div className="bar-actions-right">
          <div className="btn">
            <MdFirstPage size={30} style={verticalAlign} />
          </div>
          <div className="btn">
            <MdPlayArrow size={30} style={verticalAlign} />
          </div>
          <div className="btn">
            <MdLastPage size={30} style={verticalAlign} />
          </div>
        </div>
      </div>
    )
  }
}

/**
 * 播放栏组件
 */
class PlayStatusBar extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className='play-status-process'>
        <div className="play-status-process-inner">
          <PlayStatusBarProcess />
          <PlayStatusBarMusicActions />
        </div>
      </div>
    )
  }
}

export default PlayStatusBar