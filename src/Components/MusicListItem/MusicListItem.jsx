import React from 'react'
import './music-list-item.css'

import { MdPlayArrow, MdAdd } from 'react-icons/lib/md'

/**
 * 通过秒数计算时间
 *
 * @param {number} srcTime 原秒数
 */
const computeTime = (srcTime) => {
  return Math.floor(srcTime / 60) + ':' + (srcTime % 60)
}

class MusicListItem extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    /*
      {
        id: 0,
        title: '反唱西游',
        songSinger: '陈知&游园惊梦',
        album: {
          albumId: 1,
          albumTitle: '武汉之声Vol.2',
          albumSinger: '陈知&游园惊梦',
        },
        type: '未知流派',
        time: 167,
        year: 2014,
        index: 1,
        sum: 1,
      },
     */
    return (
      <div className='music-list-item'>
        <div className="music-info">
          <div className="title">{this.props.music.title}</div>
          <div className="sub-title">
            <span className="singer">{this.props.music.songSinger}</span>
            <b> • </b>
            <span className="album">{this.props.music.album.albumTitle}</span>
          </div>
        </div>
        <div className="right-wrap">
          <div className='btns'>
            <div className="btn play">
              <MdPlayArrow />
            </div>
            <div className="btn add">
              <MdAdd />
            </div>
          </div>
          <div className="time">
            {computeTime(this.props.music.time)}
          </div>
        </div>
      </div>
    )
  }
}

export default MusicListItem