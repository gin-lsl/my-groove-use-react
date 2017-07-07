import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
// import route from './Routers/Route'
import logo from './logo.svg'
import './App.css'

import Todo from './Components/Todo'
import Home from './Pages/Home/Home'
import MyMusics from './Pages/MyMusics/MyMusics'
import TestMd from './Pages/TestPages/TestMd'
import Playlists  from './Pages/PlayLists/PlayLists'

import TopBar from './Components/TopBar/TopBar'
import PlayStatusBar from './Components/PlayStatusBar/PlayStatusBar'
import SplitView from './Components/SplitView/SplitView'

const Root = () => (
  <Router>
    <Route path='/' component={Home} />
  </Router>
)

class App extends Component {
  constructor() {
    super()
    this.state = {
      isSplitViewOpen: false
    }
    this.handleHamburgerButtonClick = this.handleHamburgerButtonClick.bind(this)
  }

  handleHamburgerButtonClick() {
    this.setState({
      isSplitViewOpen: !this.state.isSplitViewOpen
    })
  }

  render() {
    return (
      <div>
        <SplitView isSplitViewOpen={this.state.isSplitViewOpen} onSplitViewClose={this.handleHamburgerButtonClick} />
        <Router>
          <div>
            <TopBar onHumburgerClick={this.handleHamburgerButtonClick} />
            <Route path='/home' component={MyMusics} />
            <Route path='/foo' component={Todo} />
            <Route path='/testmd' component={TestMd} />
            <Route path='/testsv' component={SplitView} />
            <Route path='/playlists' component={Playlists} />
            <PlayStatusBar />
          </div>
        </Router>
      </div>
    )
  }
}

export default App