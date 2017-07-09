import React from 'react'
import './play-status-bar.css'

import { MdFirstPage, MdLastPage, MdPlayArrow, MdPause } from 'react-icons/lib/md'

import { verticalAlign } from '../../Utils/vars.js'
import { convertToTime } from '../../Utils/funs.js'

/**
 * 播放栏上方进度条
 */
class PlayStatusBarProcess extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currTime: 0
    }
  }

  componentWillMount() {

  }

  render() {
    const _sumLen = this.props.sumTime
    let _hasLen = this.props.currTime
    let _remainLen = _sumLen - _hasLen
    return (
      <div className='play-status-bar-process'>
        {/*已经播放的时间*/}
        <div className="has-time">{convertToTime(_hasLen)}</div>
        <div className="process-wrap">
          <div className="process-has-time" style={{ flexGrow: _hasLen }}></div>
          <div className="process-current-point"></div>
          <div className="process-remaining-time" style={{ flexGrow: _remainLen }}></div>
        </div>
        {/*剩余时间*/}
        <div className="remaining-time">{convertToTime(_remainLen)}</div>
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
          <div className="btn" onClick={this.props.onIsPlayingChanged}>
            {this.props.isPlaying
              ? <MdPause size={30} style={verticalAlign} />
              : <MdPlayArrow size={30} style={verticalAlign} />}
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
    this.state = {
      isPlaying: false,
      currTime: 0,
      sumTime: 300
    }
    this.handleIsPlayingChanged = this.handleIsPlayingChanged.bind(this)
    this.changeCurrTime = this.changeCurrTime.bind(this)
    this.playInterval = null
  }

  componentWillMount() {
    // this.playInterval = setInterval(this.changeCurrTime, 1000)
    this.handleIsPlayingChanged()
    console.log('componentWillMount')
  }

  changeCurrTime(toTime) {
    this.setState((prevState, prop) => ({
      currTime: toTime || prevState.currTime + 1
    }))
  }

  handleIsPlayingChanged() {
    let _currState = this.state.isPlaying
    this.setState({
      isPlaying: !_currState
    })
    console.log(_currState)
    if (_currState) {
      clearInterval(this.playInterval)
      this.playInterval = null
      console.log('执行true')
    } else {
      this.playInterval = setInterval(this.changeCurrTime, 1000)
      console.log('执行false')
    }
  }

  render() {
    return (
      <div className='play-status-process'>
        <div className='play-status-process-inner'>
          <PlayStatusBarProcess isPlaying={this.state.isPlaying}
            currTime={this.state.currTime}
            sumTime={this.state.sumTime} />
          <PlayStatusBarMusicActions isPlaying={this.state.isPlaying}
            onIsPlayingChanged={this.handleIsPlayingChanged} />
        </div>
      </div>
    )
  }
}

export default PlayStatusBar