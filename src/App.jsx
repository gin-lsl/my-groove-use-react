import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
// import route from './Routers/Route'
import logo from './logo.svg'
import './App.css'

import Todo from './Components/Todo'
import Home from './Pages/Home/Home'
import MyMusics from './Pages/MyMusics/MyMusics'
import TestMd from './Pages/TestPages/TestMd'
import Playlists from './Pages/PlayLists/PlayLists'
import NowPlaying from './Pages/NowPlaying/NowPlaying'

import TopBar from './Components/TopBar/TopBar'
import PlayStatusBar from './Components/PlayStatusBar/PlayStatusBar'
import SplitView from './Components/SplitView/SplitView'

import { fetchMusics } from './Utils/services.js'

class App extends Component {
  constructor() {
    super()
    this.state = {
      isSplitViewOpen: false,
      musics: null,
      currentPlayingIndex: -1
    }
    this.handleHamburgerButtonClick = this.handleHamburgerButtonClick.bind(this)
    this.loadMusics = this.loadMusics.bind(this)
    this.handleCurrentPlayingMusicChangedById = this.handleCurrentPlayingMusicChangedById.bind(this)
    this.handleCurrentPlayingMusicChangedByIndex = this.handleCurrentPlayingMusicChangedByIndex.bind(this)
    this.handleCurrentPlayingMusicChangedByIncrement = this.handleCurrentPlayingMusicChangedByIncrement.bind(this)
  }

  componentDidMount() {
    fetch(fetchMusics)
      .then(res => res.json())
      .then(json => this.loadMusics(json.musics))
  }

  /**
   * 把加载的音乐数据赋值给state
   * @param {any[]} musics 音乐数据
   */
  loadMusics(musics) {
    this.setState({
      musics: musics,
      currentPlayingIndex: 0
    })
  }

  /**
   * 处理点击汉堡按钮事件,打开或关闭侧边栏
   */
  handleHamburgerButtonClick() {
    this.setState({
      isSplitViewOpen: !this.state.isSplitViewOpen
    })
  }

  /**
   * 通过id改变当前播放的音乐
   * @param {number|string} id 传入id
   */
  handleCurrentPlayingMusicChangedById(id) {
    let _willId = this.state.musics.findIndex(music => {
      music.id === id
    })
    if (_willId === -1) {
      return
    }
    this.setState({
      currentPlayingIndex: _willId
    })
  }

  /**
   * 通过索引改变当前播放的音乐
   * @param {number} index 索引
   */
  handleCurrentPlayingMusicChangedByIndex(index) {
    this.setState({
      currentPlayingIndex: index
    })
  }

  /**
   * 通过增量改变当前播放的音乐
   * @param {number} inc 增量
   */
  handleCurrentPlayingMusicChangedByIncrement(inc) {
    this.refs.playStatusBar.currentPlayingMusicChange()
    this.setState(function (prevState, prop) {
      let _currentMusicIndex = prevState.currentPlayingIndex
      let _maxIndex = prevState.musics.length - 1
      if (inc > 0) {
        return ({
          currentPlayingIndex: (_currentMusicIndex >= _maxIndex) ? 0 : (_currentMusicIndex + 1)
        })
      }
      if (inc < 0) {
        return ({
          currentPlayingIndex: (_currentMusicIndex <= 0) ? (_maxIndex) : (_currentMusicIndex - 1)
        })
      }
    })
  }

  render() {
    return (
      <Router>
        <div className='app'>
          <SplitView isSplitViewOpen={this.state.isSplitViewOpen} onSplitViewClose={this.handleHamburgerButtonClick} />
          <TopBar onHumburgerClick={this.handleHamburgerButtonClick} />
          <div className='router-inner'>
            <Route exact path='/' component={MyMusics} />
            <Route path='/foo' component={Todo} />
            <Route path='/testmd' component={TestMd} />
            <Route path='/playing' component={NowPlaying} />
            <Route path='/playlists' component={Playlists} />
          </div>
          {this.state.musics != null
            && <PlayStatusBar ref='playStatusBar' currentPlayingMusic={this.state.musics[this.state.currentPlayingIndex]}
              onCurrentPlayingMusicChanged={this.handleCurrentPlayingMusicChangedByIncrement} />
          }
        </div>
      </Router>
    )
  }
}

export default App