import React from 'react'
import './my-musics.css'

import MusicList from '../../Components/MusicList/MusicList'
import { Tab } from '../../Components/Tab'

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
        {/*<MusicList />*/}
        <Tab tabs={tabs}>
          <MusicList />
        </Tab>
      </div>
    )
  }
}

export default MyMusics