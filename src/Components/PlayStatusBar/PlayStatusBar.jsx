import React from 'react'
import './play-status-bar.css'

import { MdFirstPage, MdLastPage, MdPlayArrow, MdPause } from 'react-icons/lib/md'

import Audio from '../Audio/Audio'

import { verticalAlign, PUBLIC_URL } from '../../Utils/vars.js'
import { convertToTime } from '../../Utils/funs.js'
import { musicUrl, albumCoverUrl } from '../../Utils/services.js'

import ICurrentPlayingMusicChangeListener from '../../Interfaces/ICurrentPlayingMusicChangeListener.js'

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
        <div className="bar-actions-right">
          <div className="btn"
            onClick={this.props.onPlayPrevMusic}>
            <MdFirstPage size={30} style={verticalAlign} />
          </div>
          <div className="btn"
            onClick={this.props.onIsPlayingChanged}>
            {this.props.isPlaying
              ? <MdPause size={30} style={verticalAlign} />
              : <MdPlayArrow size={30} style={verticalAlign} />}
          </div>
          <div className="btn"
            onClick={this.props.onPlayNextMusic}>
            <MdLastPage size={30} style={verticalAlign} />
          </div>
        </div>
        <div className="bar-actions-left">
          <div className="img-wrap">
            <img src={albumCoverUrl + 'cover' + this.props.currentPlayingMusic.id + '.jpg'} alt="test" width='50' height='50' />
          </div>
          <div className='info-wrap'>
            <div className="title">{this.props.currentPlayingMusic.title}</div>
            <div className="singer">{this.props.currentPlayingMusic.songSinger}</div>
          </div>
        </div>
      </div>
    )
  }
}

/**
 * 播放栏组件
 */
class PlayStatusBar extends ICurrentPlayingMusicChangeListener {
  constructor(props) {
    super(props)
    this.state = {
      isPlaying: true,
      currTime: 0,
      sumTime: 175
    }
    this.handleIsPlayingChanged = this.handleIsPlayingChanged.bind(this)
    this.changeCurrTime = this.changeCurrTime.bind(this)
    this.handlePlayPrevMusic = this.handlePlayPrevMusic.bind(this)
    this.handlePlayNextMusic = this.handlePlayNextMusic.bind(this)

    // 引用播放
    this.playInterval = null
    // 引用播放元素
    this.audio = null
  }

  componentWillMount() {
    // this.playInterval = setInterval(this.changeCurrTime, 1000)
    // this.audio = this.refs.audio
    // this.handleIsPlayingChanged()
    console.log('PlayStatusBar::componentWillMount')
  }

  componentDidMount() {
    console.log('PlayStatusBar::componentDidMount')
    this.audio = this.refs.audio
    this.handleIsPlayingChanged()
  }

  componentWillUpdate() {
    console.log('PlayStatusBar::componentWillUpdate')
  }

  componentDidUpdate() {
    console.log('PlayStatusBar::componentDidUpdate')
  }

  /**
   * 改变当前时间，如果没有参数，则当前时间+1
   * @param {number} toTime 改变为指定时间
   */
  changeCurrTime(toTime) {
    this.setState((prevState, prop) => ({
      currTime: toTime !== undefined ? toTime : prevState.currTime + 1
    }))
  }

  currentPlayingMusicChange() {
    this.changeCurrTime(0)
  }

  /**
   * 处理播放状态改变
   */
  handleIsPlayingChanged() {
    let _currIsPlaying = this.state.isPlaying
    this.setState({
      isPlaying: !_currIsPlaying
    })
    console.log(_currIsPlaying)
    if (_currIsPlaying) {
      clearInterval(this.playInterval)
      this.playInterval = null
      console.log('执行true')
      // this.audio.pause()
    } else {
      this.playInterval = setInterval(this.changeCurrTime, 1000)
      console.log('执行false')
      // if (this.audio) {
      // this.audio.play()
      // }
    }
  }

  handlePlayPrevMusic() {
    console.log('播放上一首')
  }

  handlePlayNextMusic() {
    console.log('播放下一首')
  }

  render() {
    const audioSrc = musicUrl + this.props.currentPlayingMusic.id + '.mp3'
    console.log('当前播放的音乐信息: %O', this.props.currentPlayingMusic)
    return (
      <div className='play-status-process'>
        <div className='play-status-process-inner'>
          <PlayStatusBarProcess isPlaying={this.state.isPlaying}
            currTime={this.state.currTime}
            sumTime={this.props.currentPlayingMusic.time} />
          <PlayStatusBarMusicActions isPlaying={this.state.isPlaying}
            onIsPlayingChanged={this.handleIsPlayingChanged}
            currentPlayingMusic={this.props.currentPlayingMusic}
            onPlayPrevMusic={() => this.props.onCurrentPlayingMusicChanged(-1)}
            onPlayNextMusic={() => this.props.onCurrentPlayingMusicChanged(+1)} />
        </div>
        <div ref='audio' className='audio-wrap'>
          <Audio currentPlayingMusic={this.props.currentPlayingMusic}
            isPlaying={this.state.isPlaying} />
        </div>
      </div>
    )
  }
}

export default PlayStatusBar