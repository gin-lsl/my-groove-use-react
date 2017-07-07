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
    // 播放按钮样式
    const mdPlayBorderStyle = {
      transform: 'rotate(90deg)',
      verticalAlign: verticalAlign.verticalAlign
    }
    return (
      <div className='cover'>
        <div className="cover-inner">
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