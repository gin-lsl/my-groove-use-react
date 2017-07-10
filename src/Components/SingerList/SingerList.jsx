import React, { Component } from 'react';
import './singer-list.css'
import SingerCover from '../Cover/SingerCover/SingerCover'

class SingerList extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    const singerNames = ['3L', '东京塔子', '周杰伦', '陈楚生', 'Anges Obel', 'Aimer', 'Aiobahn', 'Alex G', 'Alan Walker', 'Avril Lavigne', '吴品醇', '妖言君']
    let _singerCovers = singerNames.map((_name, _idx) => (
      <SingerCover key={_idx} singerName={_name} />
    ))
    return (
      <div className='singer-list'>
        {_singerCovers}
      </div>
    );
  }
}

export default SingerList;