import React from 'react'
import './my-musics.css'

import { Tab } from '../../Components/Tab'
import MusicList from '../../Components/MusicList/MusicList'
import SingerList from '../../Components/SingerList/SingerList'

class MyMusics extends React.Component {
  constructor() {
    super()
  }

  render() {
    const tabs = [
      {
        title: '歌曲',
        children: <div>歌曲</div>
      },
      {
        title: '歌手',
        children: <div>歌手</div>
      },
      {
        title: '专辑',
        children: <div>专辑</div>
      }
    ]
    return (
      <div>
        <Tab tabs={tabs}>
          <MusicList />
          <SingerList />
          <div>TODO: 专辑页面</div>
        </Tab>
      </div>
    )
  }
}

export default MyMusics