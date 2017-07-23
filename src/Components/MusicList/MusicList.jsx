import React from 'react'
import './music-list.css'

import MusicListItem from '../MusicListItem/MusicListItem'
import PlayStatusBar from '../PlayStatusBar/PlayStatusBar'

import * as Md from 'react-icons/lib/md'

import { fetchMusics } from '../../Utils/services.js'

// const musics = 

class MusicList extends React.Component {
  constructor() {
    super()
    this.state = {
      musics: [],
      currentPlayMusicIndex: -1,
    }
    this.loadMusics = this.loadMusics.bind(this)
  }

  componentDidMount() {
    fetch(fetchMusics)
      .then(res => res.json())
      .then(_json => {
        this.loadMusics(_json.musics)
      })
      .catch(err => {
        console.error('发生错误: ' + err)
      })
  }

  loadMusics(musics) {
    this.setState({
      musics: musics,
      currentPlayMusicIndex: 0
    })
  }

  render() {
    return (
      <div>
        <div>
          {this.state.musics.map(music => (
            <MusicListItem key={music.id} music={music} />
          ))}
        </div>
        {/*<PlayStatusBar />*/}
        {/*{Object.keys(md)}*/}
        {/*{mds.map((Tmd) => (
            <Tmd />
          ))}*/}
        {/*{mds}*/}
      </div>
    )
  }
}

export default MusicList