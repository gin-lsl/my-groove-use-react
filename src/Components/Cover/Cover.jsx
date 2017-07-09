import React from 'react'
import './cover.css'

import { MdChangeHistory, MdAdd, MdCheck } from 'react-icons/lib/md'
import { verticalAlign } from '../../Utils/vars.js'

class Cover extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      check: false
    }
    this.handleChangeCheck = this.handleChangeCheck.bind(this)
  }

  handleChangeCheck() {
    this.setState({
      check: !this.state.check
    })
  }

  render() {
    const _props = { ...this.props }
    const _borderRadius = _props.isCircle ? { borderRadius: '50%' } : {}
    const _size = _props.size ? { height: _props.size, width: _props.size } : { height: 150, width: 150 }
    const _style = { ..._borderRadius, ..._size }
    // 播放按钮样式
    const mdPlayBorderStyle = {
      transform: 'rotate(90deg)',
      verticalAlign: verticalAlign.verticalAlign
    }
    return (
      <div className='cover' style={_style}>
        <div className="cover-inner" style={_style}>
          <div className="cover-check-wrap">
            <div className="cover-check"
              onClick={this.handleChangeCheck}>
              {this.state.check && <MdCheck />}
            </div>
          </div>
          <div className="cover-actions">
            <div className='cover-btn'>
              <MdChangeHistory size={23} style={mdPlayBorderStyle} />
            </div>
            <div className='cover-btn'>
              <MdAdd size={23} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Cover