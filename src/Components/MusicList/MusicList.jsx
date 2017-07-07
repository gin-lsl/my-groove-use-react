import React from 'react'
import './music-list.css'

import MusicListItem from '../MusicListItem/MusicListItem'
import PlayStatusBar from '../PlayStatusBar/PlayStatusBar'

import * as Md from 'react-icons/lib/md'

const musics = [
  {
    id: 0,
    title: '反唱西游',
    songSinger: '陈知&游园惊梦',
    album: {
      albumId: 0,
      albumTitle: '武汉之声Vol.2',
      albumSinger: '陈知&游园惊梦',
    },
    type: '未知流派',
    time: 167,
    year: 2014,
    index: 1,
    sum: 1,
  },
  {
    id: 1,
    title: '寒椿 ～ Kantsubaki',
    songSinger: 'ESQUARIA',
    album: {
      albumId: 1,
      albumTitle: 'reproduction',
      albumSinger: 'ESQUARIA',
    },
    type: '同人',
    time: 310,
    year: 2013,
    index: 1,
    sum: 1,
  },
  {
    id: 2,
    title: '大地に咲く旋律',
    songSinger: '幽閉サテライト',
    album: {
      albumId: 2,
      albumTitle: '濡れた髪に触れられた时',
      albumSinger: '幽閉サテライト',
    },
    type: '未知流派',
    time: 280,
    year: 2012,
    index: 1,
    sum: 6,
  },
  {
    id: 3,
    title: '不负相负（Cover 原曲 / 地尽头）',
    songSinger: '漆柚',
    album: {
      albumId: 3,
      albumTitle: '【漆柚】不负相负 - 《花开成毒》第二期ED',
      albumSinger: '漆柚',
    },
    type: '未知流派',
    time: 255,
    year: null,
    index: 1,
    sum: 1,
  },
  {
    id: 4,
    title: '花头台',
    songSinger: '东京塔子',
    album: {
      albumId: 4,
      albumTitle: '花头台 with 泠鸢yousa',
      albumSinger: '东京塔子',
    },
    type: '未知流派',
    time: 175,
    year: null,
    index: 1,
    sum: 1,
  },
  {
    id: 5,
    title: '听到请回答',
    songSinger: 'SNH48鞠婧祎',
    album: {
      albumId: 5,
      albumTitle: '等不到你',
      albumSinger: 'SNH48鞠婧祎',
    },
    type: '未知流派',
    time: 207,
    year: 2017,
    index: 1,
    sum: 3,
  },
  {
    id: 6,
    title: '我偏独坐第一香（Cover：乐正绫）',
    songSinger: '祖娅纳惜',
    album: {
      albumId: 6,
      albumTitle: '暂时先这么集合放着哈',
      albumSinger: '祖娅纳惜',
    },
    type: '未知流派',
    time: 268,
    year: null,
    index: 1,
    sum: 101,
  },
  {
    id: 7,
    title: '无心',
    songSinger: 'まじ娘',
    album: {
      albumId: 7,
      albumTitle: '最新热歌慢摇97',
      albumSinger: 'まじ娘',
    },
    type: '未知流派',
    time: 288,
    year: 2015,
    index: 1,
    sum: 1,
  },
  {
    id: 8,
    title: '海に行く',
    songSinger: '茶太',
    album: {
      albumId: 8,
      albumTitle: 'ワンダー・フルワールド',
      albumSinger: '茶太',
    },
    type: '未知流派',
    time: 316,
    year: 2010,
    index: 1,
    sum: 4,
  },
  {
    id: 9,
    title: '反唱西游',
    songSinger: '陈知&游园惊梦',
    album: {
      albumId: 0,
      albumTitle: '武汉之声Vol.2',
      albumSinger: '陈知&游园惊梦',
    },
    type: '未知流派',
    time: 167,
    year: 2014,
    index: 1,
    sum: 1,
  },
  {
    id: 10,
    title: '寒椿 ～ Kantsubaki',
    songSinger: 'ESQUARIA',
    album: {
      albumId: 1,
      albumTitle: 'reproduction',
      albumSinger: 'ESQUARIA',
    },
    type: '同人',
    time: 310,
    year: 2013,
    index: 1,
    sum: 1,
  },
  {
    id: 11,
    title: '大地に咲く旋律',
    songSinger: '幽閉サテライト',
    album: {
      albumId: 2,
      albumTitle: '濡れた髪に触れられた时',
      albumSinger: '幽閉サテライト',
    },
    type: '未知流派',
    time: 280,
    year: 2012,
    index: 1,
    sum: 6,
  },
  {
    id: 12,
    title: '不负相负（Cover 原曲 / 地尽头）',
    songSinger: '漆柚',
    album: {
      albumId: 3,
      albumTitle: '【漆柚】不负相负 - 《花开成毒》第二期ED',
      albumSinger: '漆柚',
    },
    type: '未知流派',
    time: 255,
    year: null,
    index: 1,
    sum: 1,
  },
  {
    id: 13,
    title: '花头台',
    songSinger: '东京塔子',
    album: {
      albumId: 4,
      albumTitle: '花头台 with 泠鸢yousa',
      albumSinger: '东京塔子',
    },
    type: '未知流派',
    time: 175,
    year: null,
    index: 1,
    sum: 1,
  },
  {
    id: 14,
    title: '听到请回答',
    songSinger: 'SNH48鞠婧祎',
    album: {
      albumId: 5,
      albumTitle: '等不到你',
      albumSinger: 'SNH48鞠婧祎',
    },
    type: '未知流派',
    time: 207,
    year: 2017,
    index: 1,
    sum: 3,
  },
  {
    id: 15,
    title: '我偏独坐第一香（Cover：乐正绫）',
    songSinger: '祖娅纳惜',
    album: {
      albumId: 6,
      albumTitle: '暂时先这么集合放着哈',
      albumSinger: '祖娅纳惜',
    },
    type: '未知流派',
    time: 268,
    year: null,
    index: 1,
    sum: 101,
  },
  {
    id: 16,
    title: '无心',
    songSinger: 'まじ娘',
    album: {
      albumId: 7,
      albumTitle: '最新热歌慢摇97',
      albumSinger: 'まじ娘',
    },
    type: '未知流派',
    time: 288,
    year: 2015,
    index: 1,
    sum: 1,
  },
  {
    id: 17,
    title: '海に行く',
    songSinger: '茶太',
    album: {
      albumId: 8,
      albumTitle: 'ワンダー・フルワールド',
      albumSinger: '茶太',
    },
    type: '未知流派',
    time: 316,
    year: 2010,
    index: 1,
    sum: 4,
  },
]

class MusicList extends React.Component {
  constructor() {
    super()
    this.state = {
      musics: musics
    }
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