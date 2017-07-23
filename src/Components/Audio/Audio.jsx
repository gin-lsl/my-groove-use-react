import React from 'react'

import { convertToMusicUrl } from '../../Utils/funs.js'

class Audio extends React.Component {
  constructor(props) {
    super(props)
    this.audio = null
  }

  componentDidMount() {
    this.audio = this.refs.audio
  }

  componentDidUpdate() {
    if (this.props.isPlaying) {
      this.audio.play()
    } else {
      this.audio.pause()
    }
  }

  render() {
    const audioSrc = convertToMusicUrl(this.props.currentPlayingMusic.id)
    return (
      <div className='Audio'>
        <audio ref='audio' src={audioSrc} height='100' width='100'>
          <source src={audioSrc} type='audio/mp3' />
          <embed src={audioSrc} height='100' width='100' />
        </audio>
      </div>
    )
  }
}

export default Audio