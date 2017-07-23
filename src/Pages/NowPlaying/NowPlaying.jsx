import React from 'react'

class NowPlaying extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPlaying: false
    }
    this.handlePlayButtonClicked = this.handlePlayButtonClicked.bind(this)
  }

  handlePlayButtonClicked() {
    // this.setState({
    //   isPlaying: !this.state.isPlaying
    // })
    // this.refs.audio.play()
    this.setState((prevState, prop) => {
      return {
        isPlaying: !prevState.isPlaying
      }
    }, () => {
      if (this.state.isPlaying) {
        this.refs.audio.pause()
      } else {
        this.refs.audio.play()
      }
    })
  }

  render() {
    return (
      <div>
        <button
          onClick={this.handlePlayButtonClicked}
          className='btn-play'>{this.state.isPlaying ? '暂停' : '播放'}</button>
        <br />
        <audio ref='audio' controls height='100' width='100'>
          <source src="/东京塔子 - 花头台.mp3" type='audio/mp3' />
          <embed src="/东京塔子 - 花头台.mp3" height='100' width='100' />
        </audio>
      </div>
    );
  }

}

export default NowPlaying